import PhotoSwipeLightbox from "photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "photoswipe/dist/photoswipe.esm.js";

// Update CSS when updating JS lib!!

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

  lightbox.on("itemData", (e) => {
    if (e.itemData?.element?.dataset.isVideo) {
      e.itemData.html = `<video class="art-single__video" src="${e.itemData.src}#t=0.001" controls playsinline />`;
      e.itemData.src = undefined;
    }
  });

  lightbox.on("change", (e) => {
    document.querySelectorAll(".art-single__video").forEach((video) => {
      video.pause();
    });
  });

  lightbox.init();
}
