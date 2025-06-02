const radios = document.querySelectorAll('input[type=radio]');

const resizable = document.querySelector('.demo-resize');
const handle = resizable.querySelector('.demo-resize-handle');

radios.forEach((radio) => {
  radio.addEventListener('input', () => {
    if (radio.checked) {
      resizable.className = `demo-resize ${radio.value}`;
    }
  });
});

let startX;
let isDragging;
let resizeValue = 0;

function handleDragStart(e) {
  if (e.touches && e.touches.length > 1) {
    return;
  }

  if (e.clientX || (e.touches && e.touches[0])) {
    isDragging = true;
    document.body.classList.add('no-select');
    startX = e.clientX || e.touches[0].clientX;
  }
}

function handleDrag(e) {
  const isValid = e.clientX || (e.touches && e.touches[0]);

  if (isDragging && isValid) {
    let clientX = e.clientX || e.touches[0].clientX;
    const delta = clientX - startX;

    if (delta < 0 && resizable.clientWidth <= 100) {
      return;
    }

    resizeValue += delta;
    startX = clientX;

    resizable.style.width = `calc(100% + ${resizeValue}px)`;
  }
}

function handleDragEnd() {
  isDragging = false;
  document.body.classList.remove('no-select');
}

handle.addEventListener('mousedown', handleDragStart);
window.addEventListener('mousemove', handleDrag);
window.addEventListener('mouseup', handleDragEnd);

handle.addEventListener('touchstart', handleDragStart);
window.addEventListener('touchmove', handleDrag);
window.addEventListener('touchend', handleDragEnd);
