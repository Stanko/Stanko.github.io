import animateScrollTo from 'animated-scroll-to';

const jumpToContent = document.querySelector('.Header-jumpToContent');
const jumpToTop = document.querySelector('.Footer-jumpToTop');


jumpToContent && jumpToContent.addEventListener('click', function(e) {
  animateScrollTo(document.querySelector('.Header').offsetHeight);
});

jumpToTop && jumpToTop.addEventListener('click', function(e) {
  animateScrollTo(0, { maxDuration: 500 });
});
