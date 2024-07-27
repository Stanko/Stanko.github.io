import ScrollManager from 'window-scroll-manager'

const sm = new ScrollManager();

const headerTitle = document.querySelector('.Header-title');
const headerAbout = document.querySelector('.Header-about');

window.addEventListener('window-scroll', function(e) {
  const windowHeight = window.innerHeight;

  if (e.detail.scrollPosition < windowHeight) {
    const transform = `translateY(-${ e.detail.scrollPosition / 4 }px)`;
    const opacity = 1 - e.detail.scrollPosition / windowHeight;

    headerTitle.style.transform = transform;
    headerTitle.style.opacity = opacity;

    if (headerAbout) {
      headerAbout.style.transform = transform;
    }
  }
});
