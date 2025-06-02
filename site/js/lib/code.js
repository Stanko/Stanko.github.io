const codeBlocks = document.querySelectorAll('.code');

codeBlocks.forEach((block) => {
  const copy = block.querySelector('.code__copy');
  const tooltip = block.querySelector('.code__copy-tooltip');
  const code = block.querySelector('pre').textContent;

  let timeout;

  copy.addEventListener('click', () => {
    clearTimeout(timeout);

    timeout = navigator.clipboard
      .writeText(code)
      .then(() => {
        tooltip.innerHTML = 'Copied';

        setTimeout(() => {
          tooltip.innerText = 'Copy';
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  });
});
