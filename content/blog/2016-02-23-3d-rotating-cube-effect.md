+++
title = "3D Rotating cubes hover effect"
aliases = ["/3d-rotating-cube-effect/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "css"]

[extra]

+++

Again, I've seen it somewhere on the internet and recreated it.
This one uses jQuery, although I plan to rewrite it to vanilla JavaScript.

It switches between two <i>sides</i> of the cube, every time you hover.
Depending from which side cursor entered the cube, it will rotate in opposite direction.
It is fully responsive, and on touch devices, direction depends of where you tap.

Cube side is a regular `div`, and you can put any type of content in it.

{{ image(
  src="/img/projects/cube-3D-rotate-grid.png",
  alt="Demo - 3D Rotating cubes hover effect",
  link="https://muffinman.io/cube-3D-rotate-grid/",
  size="lg"
) }}

<!-- more -->

Works on every modern browser, but on IE it falls back to the fade effect.
Thing is that Internet Explorers do not support `transform-style: preserve-3d` property.
More on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style).

Check the [demo](https://muffinman.io/cube-3D-rotate-grid/).
Documentation is on the same page.

Grab the code on [GitHub](https://github.com/Stanko/cube-3D-rotate-grid).

Warning: Every person introduced to these cubes, played with them for ages :)
