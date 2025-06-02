const gallery = document.querySelector('.photoswipe-gallery');

// Load PhotoSwipe library only if there is at least one gallery on the page
if (gallery) {
  // Load JS
  const script = document.createElement('script');
  script.src = '/js/photoswipe.js';
  document.head.appendChild(script);

  // Load CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/photoswipe.css';
  document.head.appendChild(link);
}
