import animateScrollTo from 'animated-scroll-to';

const scrollToLinks = document.querySelectorAll('.scroll-to');

if (scrollToLinks.length) {
  scrollToLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const element = document.querySelector(link.getAttribute('href'));

      animateScrollTo(element, { maxDuration: 750 });
    });
  })
}
