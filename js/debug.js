const styleElement =
  '<style class="debug-styles">* { outline: 1px solid rgb(57, 102, 230, 0.2); }</style>';

if (window.location.hash === '#debug') {
  document.body.innerHTML += styleElement;
}

window.addEventListener(
  'hashchange',
  () => {
    if (window.location.hash === '#debug') {
      document.body.innerHTML += styleElement;
    } else {
      const element = document.querySelector('.debug-styles');

      if (element) {
        element.remove();
      }
    }
  },
  false
);
