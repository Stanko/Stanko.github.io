---
layout: post
title: Using React keys (even to animate stuff)
category: [React]
---

It is me again blabbering about React stuff.
I have a feeling that people don't really understand what React keys are, and why are they useful.


If you pass a unique component key to React,
it will reuse it's HTML code even if is rendered at another place.


This is the live example of the carousel I built using this method:

<iframe
height='450px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/GMKajJ/?height=450&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/GMKajJ/'>React Carousel using only React keys</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!--more-->

Please note that animating using keys this won't work if you need multiple keyframes.
In that case you need to take care of those yourself or use one of many animation libraries.
