const openButtons = document.querySelectorAll('.open-menu');
const closeButtons = document.querySelectorAll('.close-menu');
const menu = document.querySelector('.menu');

let timeout;
let y;

openButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    menu.showModal();
    // Save scroll position
    y = window.scrollY;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.documentElement.classList.add('html--overflow-hidden');
    }, 500); // Allow time for the modal to open
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    menu.close();
  });
});

menu.addEventListener('close', () => {
  clearTimeout(timeout);
  document.documentElement.classList.remove('html--overflow-hidden');
  window.scrollTo({
    top: y,
    behavior: 'instant',
  });
});

const HIDE_TOGGLE_CLASS = 'nav__hamburger--hidden';
const SHOW_TOGGLE_SCROLL = 250;

const hamburger = document.querySelector('.nav__hamburger--fixed');

function updateFixedHamburger() {
  const currentY = window.scrollY;
  const toggleHidden = hamburger.classList.contains(HIDE_TOGGLE_CLASS);

  // Show toggle only when user scrolled past the threshold
  const isScrolled = currentY > SHOW_TOGGLE_SCROLL;

  if (isScrolled && toggleHidden) {
    hamburger.classList.remove(HIDE_TOGGLE_CLASS);
    hamburger.setAttribute('tabindex', 0);
  } else if (!isScrolled && !toggleHidden) {
    hamburger.classList.add(HIDE_TOGGLE_CLASS);
    hamburger.setAttribute('tabindex', -1);
  }
}

window.addEventListener('scroll', () => {
  updateFixedHamburger();
});
