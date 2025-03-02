const COLOR_SCHEME_KEY = "color-scheme";

const DARK = "dark-scheme";
const LIGHT = "light-scheme";

const toggleButtons = document.querySelectorAll(".color-scheme-switcher");

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    const systemScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? DARK
      : LIGHT;
    const storedScheme = localStorage.getItem(COLOR_SCHEME_KEY);
    const currentScheme = storedScheme || systemScheme;
    const newScheme = currentScheme === DARK ? LIGHT : DARK;

    // If the new scheme is the same as the system scheme, remove the stored
    if (systemScheme === newScheme) {
      localStorage.removeItem(COLOR_SCHEME_KEY);
    } else {
      // Otherwise, store the new scheme
      localStorage.setItem(COLOR_SCHEME_KEY, newScheme);
    }
    // Update the class on the root element
    document.documentElement.classList.remove(currentScheme);
    document.documentElement.classList.add(newScheme);
  });
});
