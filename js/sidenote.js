const sidenoteTriggers = document.querySelectorAll(".sidenote__trigger");

sidenoteTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    trigger.classList.toggle("sidenote__trigger--expanded");
  });

  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      trigger.classList.toggle("sidenote__trigger--expanded");
    }
  });
});
