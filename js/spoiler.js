const spoilers = document.querySelectorAll(".spoiler");

spoilers.forEach((spoiler) => {
  const toggleButton = spoiler.querySelector(".spoiler__toggle");
  const showLabel = spoiler.querySelector(".spoiler__show");
  const hideLabel = spoiler.querySelector(".spoiler__hide");
  const content = spoiler.querySelector(".spoiler__content");

  toggleButton.addEventListener("click", () => {
    const wasExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    const isExpanded = !wasExpanded;

    showLabel.style.display = isExpanded ? "none" : "";
    hideLabel.style.display = isExpanded ? "" : "none";
    content.style.display = isExpanded ? "" : "none";

    toggleButton.setAttribute("aria-expanded", isExpanded);
    content.setAttribute("aria-hidden", !isExpanded);
  });
});
