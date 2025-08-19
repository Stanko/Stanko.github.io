import {
  renderStepByStep,
  prepareStepByStepAnimation,
  Invader,
  SCALE,
  BezierEasing,
} from './invaders.js';

// Pause animations

document.querySelectorAll('.animation-pause').forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('paused');
  });
});

// Generate a random oklch color for our invader
const setColor = () => {
  const l = random(0.55, 0.8, options.colorRng, 2).toString();
  const c = random(0.2, 0.5, options.colorRng, 2).toString();
  const h = (random(120, 420, options.colorRng, 0) % 360).toString(); // skip brownish tones 60 - 120

  const color = `oklch(${l} ${c} ${h})`;

  document.documentElement.style.setProperty('--invader-color', color);
};

// Seeded RNG using a linear congruential generator
const seededRandom = (seed) => {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;

  return function () {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
};

const random = (min = 0, max = 1, rng, decimalPlaces = 16) => {
  const value = (rng || Math.random)() * (max - min) + min;

  if (decimalPlaces) {
    return parseFloat(value.toFixed(decimalPlaces));
  }

  return Math.round(value);
};

// Parse the seed from the URL
let mainSeed = parseInt(
  new URLSearchParams(window.location.search).get('seed'),
  10
);

// Validate the seed and use a random one if invalid
mainSeed =
  mainSeed && !isNaN(mainSeed) && mainSeed > 0
    ? mainSeed
    : random(1, 999999, null, 0);

const mainSeedRng = seededRandom(mainSeed);

// Replace math random with seeded random to achieve repeatable invaders
Math.random = mainSeedRng;

const options = {
  size: random(6, 13, null, 0),
  mainSeed: 123,
  mainSeedRng,
  gap: 0,
  split: 0,
  lineThickness: [0.6, 0.11, 0.8, 0.3],
  color: random(1, 999999, null, 0),
  eyes: random(1, 999999, null, 0),
  animate: false,
  flip: false,
  showGrid: false,
  debug: false,
};

// Add RNGs for eyes and color, this is automatically done in the generator
options.eyesRng = seededRandom(options.eyes);
options.colorRng = seededRandom(options.color);
// Add the easing function for line thickness, this is also automatically done in the generator
options.lineThicknessEasing = BezierEasing(...options.lineThickness);

// Width is always odd to have a center pixel
const width = options.size * 2 + 1;
const height = width;

// Generate the invader
const invader = new Invader(width, height, options);

// Prepare the SVG Element
const svgElement = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'svg'
);
svgElement.setAttribute('viewBox', `0 0 ${width * SCALE} ${height * SCALE}`);
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
// svgElement.style.setProperty('--invader-width', width.toString());
svgElement.classList.add('invader-svg');

// Render
const svgContent = renderStepByStep(options, invader);
svgElement.innerHTML = svgContent;

// Interactive scroll section
document.querySelector('.drawing').appendChild(svgElement);

const { jumpTo, timeline } = prepareStepByStepAnimation(svgElement);

const animationIds = [
  'finding-the-center',
  'defining-top-and-bottom',
  'drawing-the-left-side',
  'mirroring-it-to-the-right',
  'connect-the-dots',
  'finding-the-root',
  'sketching-the-mid-line',
  'fattening-the-line',
  'our-first-tentacle',
  'growing-more-tentacles',
  'adding-horns',
  'pixelizing-the-body',
  'pixelizing-the-limbs',
  'adding-eyes',
];

let activeIndex = -1;

const topEl = document.getElementById('building-the-invader');
const bottomEl = document.getElementById('coloring-the-invader');

const activeHeaderClass = 'active-header';

const updateAnimationState = () => {
  const threshold =
    window.innerWidth < 960
      ? window.innerHeight * 0.5
      : window.innerHeight * 0.3;

  const currentHeader = document.querySelector(`.${activeHeaderClass}`);

  // Currently active header
  for (let i = animationIds.length - 1; i >= 0; i--) {
    const id = animationIds[i];
    const element = document.getElementById(id);

    if (element.getBoundingClientRect().top < threshold) {
      if (activeIndex !== i) {
        element.classList.add(activeHeaderClass);

        if (currentHeader) {
          currentHeader.classList.remove(activeHeaderClass);
        }

        if (i > activeIndex) {
          jumpTo(i);
        } else {
          jumpTo(i + 1, false);
        }

        activeIndex = i;
      }
      break;
    }
  }

  // Above / below state
  svgElement.dataset.position = 'in';
  if (topEl.getBoundingClientRect().top > threshold) {
    svgElement.dataset.position = 'above';

    if (activeIndex > -1) {
      jumpTo(0);
      activeIndex = -1;
      timeline.pause();
    }

    if (currentHeader) {
      currentHeader.classList.remove(activeHeaderClass);
    }
  } else if (bottomEl.getBoundingClientRect().top < threshold) {
    svgElement.dataset.position = 'below';

    timeline.seek(timeline.duration);
    timeline.pause();

    if (currentHeader) {
      currentHeader.classList.remove(activeHeaderClass);
    }
  }
};

document.querySelector('.btn-replay').addEventListener('click', () => {
  jumpTo(activeIndex);
});

window.addEventListener('scroll', () => {
  updateAnimationState();
});

updateAnimationState();
setColor();
