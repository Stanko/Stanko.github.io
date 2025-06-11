import { Monorail } from './monorail.js';

const examples = [...document.querySelectorAll('.example')];

examples.forEach((example) => {
  const animationElement = example.querySelector('.animation');
  const playButton = example.querySelector('.btn');
  const monorailContainer = example.querySelector('.animation-monorail');
  const animation = animationElement.getAnimations()[0];
  const monorail = new Monorail(animation, { height: 20 });
  monorailContainer.appendChild(monorail.element);

  animationElement.addEventListener('animationend', () => {
    playButton.textContent = 'Play';
  });

  playButton.addEventListener('click', () => {
    if (animation.playState === 'running') {
      animation.pause();
      playButton.textContent = 'Play';
    } else {
      animation.play();
      playButton.textContent = 'Pause';
    }
  });
});

const toggleGap = document.querySelector('.toggle-gap');
toggleGap.addEventListener('click', () => {
  toggleGap.parentElement.classList.toggle('show-strips--debug');
});
