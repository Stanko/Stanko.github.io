+++
title = "HTML canvas video player"
aliases = ["/html-canvas-video-player-ios/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "canvas", "video"]

[extra]

+++

This is the one of my most popular repos. Once client asked for inline video that works on iPhone too.
As Apple doesn't allow that (all videos are full screen in native player, and autoplay is not supported),.
There was no easy solution, so this player was born.

It uses HTML `video` and `canvas`. Script picks up the frame from the video and draws it on the canvas.
For sound, there is `audio` element using video files (you can provide different audio file for it).

[![HTML canvas video player - Demo](/img/projects/canvas-video.jpg)](https://muffinman.io/html-canvas-video-player/)

Play, pause, jump to time and autoplay are all supported.
But please check the [documentation and demo](https://muffinman.io/html-canvas-video-player/).

You shouldn't use this on any device that supports HTML video natively, but as a fallback.

Grab the code on [GitHub](https://github.com/Stanko/html-canvas-video-player).
