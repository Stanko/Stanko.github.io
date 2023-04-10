const styleElement = document.createElement("style");
styleElement.className = "debug-styles";
styleElement.innerHTML = "* { outline: 1px solid rgb(57, 102, 230, 0.2); }";

if (window.location.hash === "#debug") {
  document.head.appendChild(styleElement);
}

window.addEventListener(
  "hashchange",
  () => {
    if (window.location.hash === "#debug") {
      document.head.appendChild(styleElement);
    } else {
      styleElement.remove();
    }
  },
  false
);
