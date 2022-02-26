import MicroModal from "micromodal";

const ANIMATION_DURATION = 500;

const searchInput = document.querySelector(".search__input");
const page = document.querySelector("#page");

const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

let y;
let timeout;

MicroModal.init({
  onShow: () => {
    y = window.scrollY;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.documentElement.classList.add("html--overflow-hidden");
      page.style.marginTop = `-${y}px`;
      searchInput.focus();
    }, ANIMATION_DURATION);
  },
  onClose: () => {
    document.documentElement.classList.remove("html--overflow-hidden");
    page.style.marginTop = "";

    window.scrollTo({
      top: y,
    });
  },
  awaitCloseAnimation: !reducedMotionMediaQuery.matches,
  disableFocus: true,
});

// const HIDE_CLASS = 'menu--hide';
// const TIMEOUT = 300;

// let previousScrollPosition = window.scrollY;
// let lastUpdate = null;

// const menu = document.querySelector('.menu');

// function checkMenu() {
//   const currentScrollPosition = window.scrollY;
//   const now = new Date().getTime();

//   if (!lastUpdate || now - lastUpdate > TIMEOUT) {
//     if (currentScrollPosition > previousScrollPosition) {
//       menu.classList.add(HIDE_CLASS);
//     } else {
//       menu.classList.remove(HIDE_CLASS);
//     }

//     lastUpdate = now;
//   }

//   previousScrollPosition = currentScrollPosition;

//   if (currentScrollPosition > menu.clientHeight) {
//     document.body.classList.add('body--scrolled');
//   } else {
//     document.body.classList.remove('body--scrolled');
//   }
// }

// window.addEventListener('scroll', () => {
//   checkMenu();
// });
