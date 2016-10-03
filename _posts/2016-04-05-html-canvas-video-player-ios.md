---
layout: post
title: HTML canvas video player
category: [JavaScript, HTML]
---

This is the one of my most popular repos. Once client asked for inline video that works on iPhone too.
As Apple doesn't allow that (all videos are full screen in native player, and autoplay is not supported),.
There was no easy solution, so this player was born.

It uses HTML `video` and `canvas`. Script picks up the frame from the video and draws it on the canvas.
For sound, there is `audio` element using video files (you can provide different audio file for it).

<a href="http://stanko.github.io/html-canvas-video-player/">
  <img src="/public/img/projects/canvas-video.jpg" alt="HTML canvas video player - Demo">
</a>

Play, pause, jump to time and autoplay are all supported.
But please check the [documentation and demo](http://stanko.github.io/html-canvas-video-player/).

You shouldn't use this on any device that supports HTML video natively, but as a fallback.

Grab the code on [GitHub](https://github.com/Stanko/html-canvas-video-player).
