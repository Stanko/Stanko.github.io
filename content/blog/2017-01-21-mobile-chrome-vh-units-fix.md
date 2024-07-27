+++
title = "Mobile Chrome vh units fix"
aliases = ["/mobile-chrome-vh-units-fix/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["css"]

[extra]
comments = [
  "comments/mobile-chrome-vh-units-fix/1485768930389.toml",
  "comments/mobile-chrome-vh-units-fix/1485769363614.toml",
  "comments/mobile-chrome-vh-units-fix/1502860252876.toml",
  "comments/mobile-chrome-vh-units-fix/1504051820005.toml",
  "comments/mobile-chrome-vh-units-fix/1504082285951.toml",
  "comments/mobile-chrome-vh-units-fix/1504136708639.toml",
  "comments/mobile-chrome-vh-units-fix/1525878104044.toml",
  "comments/mobile-chrome-vh-units-fix/1525878550821.toml",
  "comments/mobile-chrome-vh-units-fix/1534504873511.toml",
  "comments/mobile-chrome-vh-units-fix/1534508451466.toml",
  "comments/mobile-chrome-vh-units-fix/1559741991699.toml"
]

+++

### Update March 2019

Check [this fix](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/) too. It works really well in most cases.

----

If you ever used `vh` units and tested your work on mobile Chrome (iOS and Android),
you probably were annoyed by page jumping when you scroll.

As you probably know `vh` units are based on the window height.
When you scroll, Chrome's address bar disappears and chrome actually changes window height.
Also triggers window resize event.
So when it does happen it changes the value of `vh` unit, making your elements resize,
and page jump. On Android, keyboard toggle will do the same.

Well I made a plain JavaScript library to solve this problem.

Demo and documentation are available [here](https://muffinman.io/mobile-chrome-vh-fix/).

<!-- more -->

## How does it work?

On load, it will get the element and set them fixed height in pixels,
using this formula:

```
window height / 100 * given vh value
```

Library listens for the window `resize` event, and only if both dimensions are changed
(which on mobile means orientation has changed)
it will recalculate and apply fixed height based on new window height. Please note that Android Chrome has a bug - when keyboard pops up, it triggers orientation change

Library will only do this if it detects Chrome on Android or iOS.

## Usage

It accepts one parameter, which is an array of objects.
Every object should have CSS selector and height in `vh` units.
All elements that match given selector will be fixed.

```tsx
var options = [
  {
    selector: '.Bears', // Mandatory, CSS selector
    vh: 150,  // Mandatory, height in vh units
  },
  {
    selector: '.Foxes',
    vh: 50
  },
  {
    selector: '.Horses',
    vh: 100
  }
];

var vhFix = new VHChromeFix(options);
```

## React Component is WIP

I have a React component already done in a another project,
but I need to extract it, and pack it up as a separate `npm` package for easier usage.

Grab the code on [GitHub](https://github.com/Stanko/mobile-chrome-vh-fix).
