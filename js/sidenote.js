const sidenoteTriggers = document.querySelectorAll(".sidenote__trigger");

sidenoteTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    trigger.classList.toggle("sidenote__trigger--expanded");
  });
});
