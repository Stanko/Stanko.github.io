const COLOR_SCHEME_KEY = "color-scheme";
const DARK = "dark-scheme";
const LIGHT = "light-scheme";

const toggleButtons = document.querySelectorAll(".color-scheme-switcher");

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    const userSelected = localStorage.getItem(COLOR_SCHEME_KEY);
    const isUserSelectedDark = userSelected && userSelected === DARK;

    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const systemScheme = isSystemDark ? DARK : LIGHT;

    document.documentElement.classList.remove(DARK, LIGHT);

    const isCurrentDark = userSelected ? isUserSelectedDark : isSystemDark;

    const newMode = isCurrentDark ? LIGHT : DARK;

    document.documentElement.classList.add(newMode);
    localStorage.setItem(COLOR_SCHEME_KEY, newMode);

    // TODO check if this is too complicated
    // if (userSelected && userSelected !== systemScheme) {
    //   localStorage.removeItem(COLOR_SCHEME_KEY);
    // } else {
    //   const newMode = isSystemDark ? LIGHT : DARK;

    //   document.documentElement.classList.add(newMode);
    //   localStorage.setItem(COLOR_SCHEME_KEY, newMode);
    // }
  });
});
