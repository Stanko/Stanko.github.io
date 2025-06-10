if (navigator.clipboard) {
  document.querySelectorAll('.article a + code').forEach((code) => {
    const text = code.innerText;
    const button = document.createElement('button');
    let timeout;
    button.addEventListener('click', () => {
      clearTimeout(timeout);
      navigator.clipboard
        .writeText(text)
        .then(
          () => {
            button.innerText = 'Coppied';
          },
          () => {
            button.innerText = 'Error, try again';
          }
        )
        .finally(() => {
          timeout = setTimeout(() => {
            button.innerText = 'Copy';
          }, 3000);
        });
    });
    button.classList.add('copy-button');
    button.innerText = 'Copy';
    code.appendChild(button);
  });
}
