export default function toggleHeight(element) {
  if (element.getAttribute("animating") === "true") {
    return;
  }

  const wasHidden = element.getAttribute("aria-hidden") === "true";
  const content = element.childNodes[0];

  element.setAttribute("aria-hidden", !wasHidden);
  element.setAttribute("animating", true);

  const handleTransitionEnd = () => {
    element.style.height = "";

    if (!wasHidden) {
      element.style.display = "none";
    }

    element.setAttribute("animating", false);
    element.removeEventListener("transitionend", handleTransitionEnd);
  };

  element.addEventListener("transitionend", handleTransitionEnd);

  if (wasHidden) {
    element.style.height = 0;
    element.style.display = "block";
    // TODO decide whether to keep the opacity animation
    element.style.opacity = 0;

    setTimeout(() => {
      element.style.height = `${content.offsetHeight}px`;
      element.style.opacity = 1;
    }, 30);
  } else {
    element.style.height = `${content.offsetHeight}px`;

    setTimeout(() => {
      element.style.height = 0;
      element.style.opacity = 0;
    }, 30);
  }
}
