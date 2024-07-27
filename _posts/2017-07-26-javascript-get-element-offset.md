---
layout: post
title: Get element offset in JavaScript
category: [JavaScript]
tags: [js]
redirect_from: "/javascript-get-element-offset/"
---

When we left jQuery behind and embraced modern JavaScript frameworks,
we thought we would never touch DOM directly again.
Well that is not entirely true.
There are a lot of cases when you need to get some DOM element size.
For element's dimensions `.offsetWidth` and `.offsetHeight` are great way to do it.

But one of the other common tasks is getting element's offset, top and left.
I'll show you two ways to get those.

<!--more-->

## Using `offsetTop` / `offsetLeft`

This one is old school, and there is nothing wrong with it.
Even today, this method lives in my `helpers.js`.
It is looping to the root of the DOM tree and performance obsessed people may having problem with it.
But so far I never had performance issue with it, and I'm talking about production level projects.

One important thing to note - it is not taking CSS transforms into calculations.
Everything is calculated from element's original position.

```javascript
function getElementOffset(el) {
  let top = 0;
  let left = 0;
  let element = el;

  // Loop through the DOM tree
  // and add it's parent's offset to get page offset
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left,
  };
}
```

## Using `getBoundingClientRect`

Another way is using `getBoundingClientRect` which is cool because it
takes CSS transforms into calculations and it is natively supported.
No need to loop through the element's parents.
But it's `top` and `left` properties are distances from the viewport, not from the document.
Because of this, you need to add document scroll to it.

Just note one thing, there is a [known bug](https://openradar.appspot.com/radar?id=6668472289329152)
with iOS and `getBoundingClientRect` in combination with `position: fixed`<sup>1</sup>.
Sometimes it is returning wrong values.
So when you have fixed elements, you probably want to fallback to the method above

<span class="Small">
  <sup>1</sup> I found about this bug few days ago when I was working on [react-plx](https://github.com/Stanko/react-plx).
</span>


```javascript
function getElementOffset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
  };
}

// If you want to support IE8 and lower
// Use
//
// top: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
// left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
```
