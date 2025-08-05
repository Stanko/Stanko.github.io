import { Monorail } from './monorail/monorail.js';

const examples = [...document.querySelectorAll('.example')];

examples.forEach((example) => {
  const animationElement = example.querySelector('.animation');
  const monorailContainer = example.querySelector('.animation-monorail');
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
});

const toggleGap = document.querySelector('.toggle-gap');
toggleGap.addEventListener('click', () => {
  toggleGap.parentElement.classList.toggle('show-strips--debug');
});
