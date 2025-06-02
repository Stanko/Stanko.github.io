const spoilers = document.querySelectorAll('.spoiler');

spoilers.forEach((spoiler) => {
  const toggleButton = spoiler.querySelector('.spoiler__toggle');
  const content = spoiler.querySelector('.spoiler__content-wrapper');

  toggleButton.addEventListener('click', () => {
    const wasExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const isExpanded = !wasExpanded;

    content.classList.toggle('spoiler__content-wrapper--expanded');

    toggleButton.setAttribute('aria-expanded', isExpanded);
  });
});
