// ----- OBSERVER and CUSTOM EVENT ----- //

// Initial width
let currentWidth = window.innerWidth - document.documentElement.clientWidth;
const scrollbarEvent = new Event('scrollbar-width');

// Check if the scrollbar width has changed and trigger the custom event
const updateScrollbarWidth = () => {
  const newWidth = window.innerWidth - document.documentElement.clientWidth;

  if (newWidth !== currentWidth) {
    scrollbarEvent.detail = {
      previous: currentWidth,
      current: newWidth,
    };
    currentWidth = newWidth;
    window.dispatchEvent(scrollbarEvent);
  }
};

updateScrollbarWidth();

const observer = new ResizeObserver(updateScrollbarWidth);
observer.observe(document.documentElement);

// ----- DEMO ----- //

const pre = document.querySelector('.scrollbar-size');
const toggle = document.querySelector('.toggle-scrollbar');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('scrollbar-width-test');
});

// ----- USAGE ----- //

const handleScrollbarWidth = (width) => {
  document.documentElement.style.setProperty('--scrollbar-width', width + 'px');

  if (width > 0) {
    document.documentElement.classList.add('has-scrollbar');
  } else {
    document.documentElement.classList.remove('has-scrollbar');
  }

  pre.innerHTML = `--scrollbar-width: ${width}px;`;
};

// Add event listener
window.addEventListener('scrollbar-width', (e) => {
  console.log('Scrollbar width changed:', e.detail);
  handleScrollbarWidth(e.detail.current);
});

// Handle initial state
handleScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
