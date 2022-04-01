import MicroModal from "micromodal";
import { search } from "./search";

const ANIMATION_DURATION = 500;

const searchInput = document.querySelector(".search__input");
const page = document.querySelector("#page");

const reducedMotionMediaQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let y;
let timeout;

const isTouch = "ontouchstart" in document.documentElement;

MicroModal.init({
  onShow: () => {
    // Save scroll position
    y = window.scrollY;

    // Don't auto focus input on mobile phones
    if (!isTouch || window.innerWidth > 768) {
      searchInput.focus();
      searchInput.select();
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // Disable scroll
      document.documentElement.classList.add("html--overflow-hidden");
      page.style.marginTop = `-${y}px`;
    }, ANIMATION_DURATION);
  },
  onClose: () => {
    // Enable scroll and reset scroll position
    document.documentElement.classList.remove("html--overflow-hidden");
    page.style.marginTop = "";

    window.scrollTo({
      top: y,
    });

    // Clear search
    searchInput.value = "";
    search();
    searchInput.blur();
  },
  awaitCloseAnimation: !reducedMotionMediaQuery.matches,
  disableFocus: true,
});

const HIDE_TOGGLE_CLASS = "menu__toggle-fixed-wrapper--hidden";
const SHOW_TOGGLE_SCROLL = 250;

const menuToggleFixedWrapper = document.querySelector(
  ".menu__toggle-fixed-wrapper"
);
const menuToggleFixed = document.querySelector(".menu__toggle--fixed");

function checkMenu() {
  const currentY = window.scrollY;
  const toggleHidden =
    menuToggleFixedWrapper.classList.contains(HIDE_TOGGLE_CLASS);

  // Show toggle only when user scrolled past the threshold
  const isScrolled = currentY > SHOW_TOGGLE_SCROLL;

  if (isScrolled && toggleHidden) {
    menuToggleFixedWrapper.classList.remove(HIDE_TOGGLE_CLASS);
    menuToggleFixed.setAttribute("tabindex", 0);
  } else if (!isScrolled && !toggleHidden) {
    menuToggleFixedWrapper.classList.add(HIDE_TOGGLE_CLASS);
    menuToggleFixed.setAttribute("tabindex", -1);
  }

  prevY = currentY;
}

window.addEventListener("scroll", () => {
  checkMenu();
});
