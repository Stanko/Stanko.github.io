const sidenoteTriggers = document.querySelectorAll('.sidenote__trigger');

sidenoteTriggers.forEach((trigger) => {
  const note = trigger.nextElementSibling;

  trigger.addEventListener('click', () => {
    trigger.classList.toggle('sidenote__trigger--expanded')
  })
});
