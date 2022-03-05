const sidenoteTriggers = document.querySelectorAll(".sidenote__trigger");
const sidenoteNotes = document.querySelectorAll(".sidenote__note");

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

sidenoteNotes.forEach((note) => {
  const trigger = note.previousElementSibling;

  note.addEventListener("mouseenter", () => {
    trigger.classList.add("sidenote__trigger--hover");
  });
  note.addEventListener("mouseleave", () => {
    trigger.classList.remove("sidenote__trigger--hover");
  });
});
