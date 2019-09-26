---
layout: post
title: Accessible range slider
category: [JavaScript]
tags: [javascript,accessibility]
image: /public/img/range-slider.png
---


This time I want to share a small range slider (progress bar) I built. Check the [demo](http://muffinman.io/aria-progress-range-slider/). Code and documentation are available [here](https://github.com/Stanko/aria-progress-range-slider).

[![Range slider screenshot](/public/img/range-slider.png)](http://muffinman.io/aria-progress-range-slider/)


Same story again, on a React project we needed a media progress bar, and I ended up writing one myself.

Why I didn't like anything I found? Well, everything I tried was missing one of the things we considered mandatory - good touch support, accessibility (aria attributes, keyboard control), callbacks or easy styling.

<!--more-->

On this specific project we went with [Material-UI's slider](https://material-ui.com/lab/slider/), but it is still in their beta (lab) phase and it has couple of glitches. Soon we are going to replace it with the one I built.

## Accessibility

This range slider is the first library I wrote with accessibility-first mindset. That is something that I want to pursue and promote more. If you start with basic accessibility and build features around it, it will be much easier than just adding accessibility stuff
<label class="SideNote-trigger">when library is complete.</label>
<small class="SideNote">
Similar like it goes with tests. I do it myself, too - I get excited about the problem, start hacking, and couple of hours later I have a decent codebase and zero tests.
</small>



## Features

I started using [this example](https://www.w3.org/TR/wai-aria-practices/examples/slider/slider-1.html) and added more features. And I would love to mention a few:

* Fully accessible (aria attributes and keyboard control)
* Great touch support, actual hitbox area is bigger than track and handle
* Two tooltips, one for the current value, and the other shown on hover which shows the value that will be set on click
* Additional "buffer bar" that is controlled by the user (great for media players)
* Callback system
* Easy to style (I plan to add more themes)

At the moment, only plain JavaScript version is available, but I plan to add a React wrapper. And while we are talking about accessible React libraries, you should check David Clark's work:

* [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)
* [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton)
* [react-aria-tabpanel](https://github.com/davidtheclark/react-aria-tabpanel)

He has a bunch of other great libraries, be sure to check them out.

-----

As usual it is released under MIT license and code is available on [GitHub](https://github.com/Stanko/aria-progress-range-slider). Let me know what you think and feel free to open an issue or submit a pull request.
