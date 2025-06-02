const sidenoteTriggers = document.querySelectorAll('.sidenote__text');

sidenoteTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('sidenote__text--expanded');
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      trigger.classList.toggle('sidenote__text--expanded');
    }
  });
});
