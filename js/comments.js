const showAllButton = document.querySelector(".comments__show-all");
const allCommentsElement = document.querySelector(".comments__all");

if (showAllButton) {
  showAllButton.addEventListener("click", () => {
    showAllButton.style.display = "none";
    allCommentsElement.style.display = "block";
  });
}
