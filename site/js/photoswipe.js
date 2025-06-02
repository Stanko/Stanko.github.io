import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

const galleries = document.querySelectorAll('.photoswipe-gallery');

if (galleries.length > 0) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.photoswipe-gallery',
    children: 'a',
    pswpModule: PhotoSwipe,
    bgOpacity: 0.8,
    clickToCloseNonZoomable: false,
    loop: false,
  });

  lightbox.on('close', () => {
    // Hack to animate backdrop-filter blur
    const pwsp = document.querySelector('.pswp');
    pwsp.classList.add('pwsp--no-backdrop-filter');
  });

  lightbox.addFilter('itemData', (itemData) => {
    if (itemData.element.dataset.isVideo) {
      return {
        html: `<div class="pswp__video-wrapper">
          <video class="pswp__video" src="${itemData.src}#t=0.001" controls playsinline="true" />
        </div>`,
      };
    }

    return itemData;
  });

  lightbox.on('change', () => {
    document.querySelectorAll('.pswp__video').forEach((video) => {
      video.pause();
    });
  });

  lightbox.on('openingAnimationEnd', () => {
    const video =
      lightbox.pswp.currSlide.content.element.querySelector('.pswp__video');

    if (video) {
      // Add a timeout to wait out the initial animation
      video.play();
    }
  });

  lightbox.init();
}
