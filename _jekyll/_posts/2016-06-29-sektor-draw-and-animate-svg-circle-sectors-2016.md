---
layout: post
title: Sector - draw and animate SVG sectors
category: [JavaScript]
---

For a current project I'm on, we needed both circular timer, and progress bar.
Again, I wasn't able to find small library to do that. But I found
[awesome answer](http://stackoverflow.com/questions/21205652/how-to-draw-a-circle-sector-in-css/21206274#21206274)
on Stack Overflow, decided SVG is way to go, and wrote [Sektor](https://stanko.github.io/sektor/).

Sektor is a plain JavaScript library that draws circle sector (or an arc).
Once it is drawn, you can change it's angle and animate the change.

<a href="https://stanko.github.io/sektor/">
  <img alt="Sektor - draw and animate SVG circle" src="https://stanko.github.io/sektor/img/sektor.png">
</a>

It works in every browser with SVG and `requestAnimationFrane` support (IE10+ and modern browsers).
Check [demo and docs](https://stanko.github.io/sektor/).

I may use this for example how much better is to use `requestAnimationFrame` than `setInterval`.
If you are bored, try it yourself, and you'll see that animating using `requestAnimationFrame` is way smoother.

React component is coming soon as well. Cheers!
