const isInViewportClassName = "is-in-viewport";
const isNotInViewportClassName = "is-not-in-viewport";

// On load all elements are considered to in viewport
// to avoid waiting javascript to set the initial state.
//
// In other words, if I want something to be animated when in viewport,
// it is animated by default, and paused on load if it is not in viewport.
// This avoids animation being paused and played only when javascript loads.
const elements = document.querySelectorAll(`.${isInViewportClassName}`);

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

function handleIntersectionEvent(entries) {
  entries.forEach((entry) => {
    const newState = entry.isIntersecting;
    const currentState = entry.target.classList.contains(isInViewportClassName);

    if (newState !== currentState) {
      // Toggle both is-in-viewport and is-not-in-viewport classes
      entry.target.classList.toggle(isInViewportClassName);
      entry.target.classList.toggle(isNotInViewportClassName);
    }

    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
}

if (elements.length) {
  let observer = new IntersectionObserver(handleIntersectionEvent, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
}
