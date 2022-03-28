import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";

if (document.querySelector(".gallery")) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: ".art-single__images",
    children: "a",
    pswpModule: PhotoSwipe,
    bgOpacity: 0.8,
    clickToCloseNonZoomable: false,
    loop: false,
  });

  lightbox.on("close", () => {
    // Hack to animate backdrop-filter blur
    const pwsp = document.querySelector(".pswp");
    pwsp.classList.add("pwsp--no-backdrop-filter");
  });

  lightbox.addFilter("itemData", (itemData) => {
    if (itemData.element.dataset.isVideo) {
      return {
        html: `<video class="art-single__video" src="${itemData.src}#t=0.001" controls playsinline="true" />`,
      };
    }

    return itemData;
  });

  lightbox.on("change", () => {
    document.querySelectorAll(".art-single__video").forEach((video) => {
      video.pause();
    });
  });

  lightbox.on("openingAnimationEnd", () => {
    const video =
      lightbox.pswp.currSlide.content.element.querySelector(
        ".art-single__video"
      );

    if (video) {
      // Add a timeout to wait out the initial animation
      video.play();
    }
  });

  lightbox.init();
}
