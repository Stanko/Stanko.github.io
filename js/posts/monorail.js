import { Monorail } from './monorail/monorail.js';

const examples = [...document.querySelectorAll('.example')];

examples.forEach((example) => {
  const animationElement = example.querySelector('.animation');
  const monorailContainer = example.querySelector('.animation-monorail');
  const rangeInput = example.querySelector('.playback-speed-input');
  const rangeValue = example.querySelector('.playback-speed-value');

  let animation;
  try {
    animation = animationElement.getAnimations()[0];
  } catch (error) {
    const notice = document.createElement('div');
    notice.className = 'notice';
    notice.style.marginTop = '1rem';
    notice.innerText =
      "Sorry, something went wrong, couldn't read animation data.";
    example.appendChild(notice);

    return;
  }

  const monorail = new Monorail(animation, { height: 20 });
  monorailContainer.appendChild(monorail.element);

  if (rangeInput) {
    rangeInput.value = monorail.playbackSpeed.toString();
    rangeValue.textContent = rangeInput.value + 'x';

    rangeInput.addEventListener('input', () => {
      monorail.playbackSpeed = parseFloat(rangeInput.value);
      rangeValue.textContent = rangeInput.value + 'x';
    });
  }
});
