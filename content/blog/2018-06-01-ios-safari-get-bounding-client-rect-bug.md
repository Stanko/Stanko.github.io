+++
title = "iOS Safari window.scrollTo / getBoundingClientRect bug"
aliases = ["/ios-safari-get-bounding-client-rect-bug/"]

[taxonomies]
category = ["JavaScript"]
tags = ["ios", " safari", " bug"]

[extra]
comments = [
  "comments/ios-safari-get-bounding-client-rect-bug/1535079038028.toml"
]

+++

This is a weird one, and not something you will stumble into every day. But it is a bug nonetheless.

On iOS safari, if you use `window.scrollTo(0, y)` and `y` *is larger than document's maximum scroll*, any immediate call to `getBoundingClientRect` will return
{{ sidenote(text="incorrect `top` value.", note="
Same will happen for horizontal scroll and `left` value.
") }}

<!-- more -->

What happens is that browser thinks it actually scrolled to `y` and calculates element's position based on that scroll position. This happens only if `scrollTo` and `getBoundingClientRect` are executed one right after the other.

Not even `requestAnimationFrame` will save you. Adding a small timeout will, but that is not a viable solution.

Check the [demo](/demos/ios-safari-get-bounding-client-rect-bug/)
{{ sidenote(text="to see it yourself.", note="
Unfortunately I couldn't include the iframe with the demo, because of the [other bug](https://bugs.webkit.org/show_bug.cgi?id=172854). Today's your lucky day, you got two bugs by the price of one!
") }}

I've tested it only on iOS 11, but I guess other versions are affected as well.

## Solution

Solution is easy, we need to determine maximum possible scroll and to cap our `y` value.

Helper method:

```js
function getPageMaxScroll() {
  // Cross browser page height detection is ugly
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight; // Subtract viewport height
}
```

Usage:

```js
let top = 1000000; // Value larger than maximum scroll
const maxScroll = getPageMaxScroll();

// Fix for bug on iOS devices
// When top was larger than maximum page scroll
// "getBoundingClientRect" would take that value into calculations
if (top > maxScroll) {
  top = maxScroll;
}

// Scroll the window to the new position
window.scrollTo(0, top);

// Get the new position
const rect = this.contentWrapperElement.getBoundingClientRect();
```

Hope that helps!

P.S. There is [another bug](https://openradar.appspot.com/radar?id=6668472289329152) on iOS Safari with `getBoundingClientRect` and `position: fixed`, but that one is documented and tracked.
