+++
title = "Sektor - draw and animate SVG sectors"
aliases = ["/sektor-draw-and-animate-svg-circle-sectors-2016/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "svg"]

[extra]
comments = [
  "comments/sektor-draw-and-animate-svg-circle-sectors-2016/1560402028559.toml",
  "comments/sektor-draw-and-animate-svg-circle-sectors-2016/1560414071172.toml",
  "comments/sektor-draw-and-animate-svg-circle-sectors-2016/1560481572425.toml"
]

+++

For a current project I'm on, we needed both circular timer, and progress bar.
Again, I wasn't able to find small library to do that. But I found
[awesome answer](http://stackoverflow.com/questions/21205652/how-to-draw-a-circle-sector-in-css/21206274#21206274)
on Stack Overflow, decided SVG is way to go, and wrote [Sektor](https://muffinman.io/sektor/).

Sektor is a plain JavaScript library that draws circle sector (or an arc).
Once it is drawn, you can change it's angle and animate the change.

[
  ![Sektor - draw and animate SVG circle](https://muffinman.io/sektor/img/sektor.png)
](https://muffinman.io/sektor/)

It works in every browser with SVG and `requestAnimationFrane` support (IE10+ and modern browsers).
Check [demo and docs](https://muffinman.io/sektor/).

I may use this for example how much better is to use `requestAnimationFrame` than `setInterval`.
If you are bored, try it yourself, and you'll see that animating using `requestAnimationFrame` is way smoother.

React component is coming soon as well. Cheers!
