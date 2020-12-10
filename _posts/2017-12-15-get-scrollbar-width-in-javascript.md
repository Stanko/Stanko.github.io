---
layout: post
title: Get scrollbar width in JavaScript
category: [JavaScript]
tags: [js]
redirect_from: "/get-scrollbar-width-in-javascript/"
---

Another onliner I love, that returns body scrollbar width.
If scrollbar is not shown it will return zero (including mobile devices).

```js
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
```

Click on the button to try it yourself:

<button style="margin-top: 0" class="Post-readmore" onclick="alert('Scroll bar width is ' + (window.innerWidth - document.documentElement.clientWidth) + 'px')">Get scrollbar width!</button>

## Browser support

Tested on:
* Windows: IE9, IE10, IE11, Edge
* MacOS: Safari, Firefox, Chrome, Opera
* iOS: Safari, Chrome
* Android: Chrome
