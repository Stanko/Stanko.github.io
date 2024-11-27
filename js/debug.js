const className = "outline-debug";

if (window.location.hash === "#debug") {
  document.documentElement.classList.add(className);
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#debug") {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
});
