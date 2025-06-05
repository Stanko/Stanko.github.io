const NO_SELECT_CLASS = 'no-select';
const MIN_WIDTH = 100;

const resizeElements = document.querySelectorAll('.resize');

resizeElements.forEach((el) => {
  let startX;
  let isDragging;
  let resizeXValue = 0;

  const handle = el.querySelector('.resize__handle');

  handle.addEventListener('keydown', (e) => {
    const amounts = {
      ArrowLeft: -10,
      ArrowRight: 10,
    };

    const amount = amounts[e.key];

    if (amount) {
      e.preventDefault();
      if (el.clientWidth <= MIN_WIDTH && e.key === 'ArrowLeft') {
        return;
      }

      resizeXValue += amount;
      el.style.width = `calc(100% + ${resizeXValue}px)`;
    }
  });

  function handleDragStart(e) {
    if (e.touches && e.touches.length > 1) {
      return;
    }

    if (e.clientX || (e.touches && e.touches[0])) {
      isDragging = true;
      document.body.classList.add(NO_SELECT_CLASS);
      startX = e.clientX || e.touches[0].clientX;
    }
  }

  function handleDrag(e) {
    const isValid = e.clientX || (e.touches && e.touches[0]);

    if (isDragging && isValid) {
      let clientX = e.clientX || e.touches[0].clientX;

      const deltaX = clientX - startX;

      const invalidX = deltaX < 0 && el.clientWidth <= MIN_WIDTH;

      if (invalidX) {
        return;
      }

      resizeXValue += deltaX;
      startX = clientX;

      el.style.width = `calc(100% + ${resizeXValue}px)`;
    }
  }

  function handleDragEnd() {
    isDragging = false;
    document.body.classList.remove(NO_SELECT_CLASS);
  }

  handle.addEventListener('mousedown', handleDragStart);
  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('mouseup', handleDragEnd);

  handle.addEventListener('touchstart', handleDragStart);
  window.addEventListener('touchmove', handleDrag);
  window.addEventListener('touchend', handleDragEnd);
  window.addEventListener('blur', handleDragEnd);
});
