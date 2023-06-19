+++
title = "Get scrollbar width in JavaScript"
aliases = ["/get-scrollbar-width-in-javascript/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "scrollbar"]

[extra]
comments = [
  "comments/get-scrollbar-width-in-javascript/1530877044302.toml",
  "comments/get-scrollbar-width-in-javascript/1530882503646.toml",
  "comments/get-scrollbar-width-in-javascript/1580280072071.toml",
  "comments/get-scrollbar-width-in-javascript/1582137437128.toml",
  "comments/get-scrollbar-width-in-javascript/1606473781996.toml"
]

+++

Another one-liner I love, that returns body scrollbar width.
If scrollbar is not shown it will return zero (including mobile devices).

```js
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
```

Click on the button to try it yourself:

<button class="btn btn--main btn--sm" onclick="alert('Scroll bar width is ' + (window.innerWidth - document.documentElement.clientWidth) + 'px')">Get scrollbar width!</button>

## Browser support

Tested on:
* Windows: IE9, IE10, IE11, Edge
* MacOS: Safari, Firefox, Chrome, Opera
* iOS: Safari, Chrome
* Android: Chrome
