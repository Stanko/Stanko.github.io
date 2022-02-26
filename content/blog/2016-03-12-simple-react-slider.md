+++
title = "Simple React slider with touch support"
aliases = ["/simple-react-slider/"]

[taxonomies]
category = ["React"]
tags = ["react"]

[extra]

+++

I needed simple React slider component, as we are building our new website as a universal React application.
But I did not find anything lightweight. There is a crazy trend in JavaScript world - add gazillion dependencies.

So again, I made something myself.


{{ image(
  src="/img/projects/react-slider.png",
  alt="Demo - React slider with touch support",
  link="https://muffinman.io/react-slider/",
  size="md"
) }}

Check the [demo](https://muffinman.io/react-slider/).

It has <b>no dependencies</b>, and about 200 lines of code.
Very simple and extensible. Every modern browser is supported and IE10+.

IE9 should work (if you adapt the CSS), but I didn't test it.

Grab the code on [GitHub](https://github.com/Stanko/react-slider).
