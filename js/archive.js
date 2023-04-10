import toggleHeight from "./toggle-height";

const toggles = document.querySelectorAll(".archive__toggle");

const slug = window.location.hash.replace("#", "").trim();

// Open section from the URL slug
if (slug) {
  const category = document.querySelector(`.archive__category--${slug}`);

  if (category) {
    const toggle = category.querySelector(".archive__toggle");
    const posts = category.querySelector(".archive__posts");

    toggle.setAttribute("aria-expanded", true);
    console.log(toggle);

    posts.style.display = "block";
    posts.setAttribute("aria-hidden", false);
    toggle.setAttribute("aria-expanded", true);
  }
}

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpening = toggle.getAttribute("aria-expanded") === "false";

    if (isOpening) {
      // Replace hash without scrolling the page
      const url = `${window.location.pathname}${toggle.getAttribute("href")}`;
      window.history.replaceState({}, document.title, url);
    } else {
      const openCount = document.querySelectorAll(
        ".archive__toggle[aria-expanded=true]"
      ).length;

      if (openCount === 1) {
        // Only this accordion is opened, hash can be safely removed
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }

    toggle.setAttribute("aria-expanded", isOpening);
    toggleHeight(toggle.nextSibling);
  });
});
