+++
title = "<span>Scrollbar width</span> custom event"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "scrollbar", "observer", "event"]

[extra]
intro = "An event that tracks those pesky gray bars"
# image = "/img/log-colors/chameleon.png"

+++

Some operating systems and browsers are not showing scrollbars by default. That often results in developers forgetting about these pesky gray bars and the issues they can cause.

I'll give you two quick examples:

When setting `overflow: hidden` on the body element, if there was a scrollbar visible, content will jump a little as it now has more space. If you ever implemented scroll locking for modals, you've probably encountered this issue.

Another thing is that `width: 100vw` and `width: 100%` on the body element don't match if there is a scrollbar visible:

- `100vw` is the width of the viewport **including** the scrollbar.
- `100%` is the width of the viewport **excluding** the scrollbar.

This becomes obvious if you have a fixed element like a header. It will be a little bit wider than the rest of the content when scrollbar is visible.

I'm sure there are more issues, but these are the two I remembered on top of my head. Anyhow, let's see how to solve this.

## JavaScript solution

Ideally we would like to have a `scrollbar-width` event. It doesn't exist, so we'll have to create a custom event ourselves, and trigger it when scrollbar width changes.

To catch the width changing, we can't use the `resize` event because viewport size don't change when scrollbar is toggled.

However, if we set the [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) on the `html` element, it will trigger when the scrollbar is toggled.

### Code

After setting the observer we need to fire our custom event when width has changed. Code looks something like this:

```js
const initScrollbarWidthEvent = () => {
  // Custom event
  const scrollbarEvent = new Event("scrollbar-width");
  // Initial state
  let currentWidth = window.innerWidth - document.documentElement.clientWidth;

  const observer = new ResizeObserver(() => {
    const newWidth = window.innerWidth - document.documentElement.clientWidth;

    // Check if the scrollbar width has changed and trigger the custom event
    if (newWidth !== currentWidth) {
      // Update event data
      // We are passing both previous and current width,
      // because having the previous value can get handy
      scrollbarEvent.detail = {
        previous: currentWidth,
        current: newWidth,
      };
      // Update the state
      currentWidth = newWidth;
      // Trigger the custom event
      window.dispatchEvent(scrollbarEvent);
    }
  });

  // Start observing
  observer.observe(document.documentElement);

  // Returning observer instance if we ever need to disconnect manually
  return observer;
}
```

### Example usage

Here is an example of how to use it to update `--scrollbar-width` CSS variable:

```js
// Initialize our custom event stuff
initScrollbarWidthEvent();

const updateCssVariable = (width) => {
  // Update CSS variable
  document.documentElement.style.setProperty("--scrollbar-width", width + "px");
};

// Update the variable on the first load
const initialWidth = window.innerWidth - document.documentElement.clientWidth;
updateCssVariable(initialWidth);

// Start listening for changes
window.addEventListener("scrollbar-width", (e) => {
  updateCssVariable(e.detail.current);
});
```

Similarly to when we track the scroll position (or window size), we'll have to set the initial state on load. Then, we can add a listener and make sure that the local state is up to date.


### Initial value of the CSS variable

This all happens on the client. Which means that `--scrollbar-width` won't be calculated before our JavaScript code executes. To be sure we'll give it a default value:

```css
:root {
  --scrollbar-width: 0px;
}
```

Because JavaScript is interpreted in the order it is defined, we can put our initialization code in the head element to make it more resilient. This way it will execute early and prevent the layout shift.

## Demo

Here is a live demonstration. Click on the button below to toggle the vertical scrollbar.

<pre class="scrollbar-size z-code"></pre>
<button class="btn btn--sm btn--main toggle-scrollbar">Toggle scrollbar</button>

Please note that if your browser doesn't show scrollbars, width will always be zero.

---

It is worth mentioning that there is also a CSS solution, but I prefer the JavaScript version as I find it more reliable. But if you want to find out more on CSS one, check [this answer on Stack Overflow](https://stackoverflow.com/a/34884924).

<script>
// ----- OBSERVER and CUSTOM EVENT ----- //

// Initial width
let currentWidth = window.innerWidth - document.documentElement.clientWidth;
const scrollbarEvent = new Event("scrollbar-width");

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

const pre = document.querySelector(".scrollbar-size");
const toggle = document.querySelector(".toggle-scrollbar");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("scrollbar-width-test");
});

// ----- USAGE ----- //

const handleScrollbarWidth = (width) => {
  document.documentElement.style.setProperty("--scrollbar-width", width + "px");

  if (width > 0) {
    document.documentElement.classList.add("has-scrollbar");
  } else {
    document.documentElement.classList.remove("has-scrollbar");
  }

  pre.innerHTML = `--scrollbar-width: ${width}px;`;
};

// Add event listener
window.addEventListener("scrollbar-width", (e) => {
  console.log("Scrollbar width changed:", e.detail);
  handleScrollbarWidth(e.detail.current);
});

// Handle initial state
handleScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
</script>

<style>
  body.scrollbar-width-test {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
  }
</style>
