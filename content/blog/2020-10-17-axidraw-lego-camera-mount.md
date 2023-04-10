+++
title = "AxiDraw Lego camera mount"
aliases = ["/axidraw-lego-camera-mount/"]

[taxonomies]
category = ["Pen Plotting"]
tags = ["generative-art", "plotter", "raspberrypi", "camera"]

[extra]
image = "/img/axidraw/lego-front.jpg"
icon = "/icons/pen-plotter.svg"
+++

I already [built a mount](/blog/axidraw-plotter-camera-mount/) for my Raspberry Pi camera, but it was 3d printed. Meaning that it has one fixed position. I used it a couple of times, but I wasn't super satisfied. Then I stumbled on [these images](https://imgur.com/gallery/VjXSSzh), and thought it was a great idea to use Lego to build a new, more versatile mount.

A friend of mine had a bunch of spare Legos laying around, so he gave me two bags full of Legos to play around. I wasn't sure where to start, especially because I wanted to make both height and rotation adjustable. After fiddling with the blocks for about an hour, I came up with this:

{{ dual_image(
  src1="/img/axidraw/lego-front.jpg",
  alt1="Camera on the mount, front view",
  src2="/img/axidraw/lego-back.jpg",
  alt2="Camera on the mount, back view"
) }}

<!-- more -->

It is quite simple, but the secret is in the blue part. Because it can be connected with the black "rail" I
{{ sidenote(text="glued on to the plotter", note="
I used double sided mounting tape, as it is stable enough and easy to remove if I want to
") }}

![AxiDraw with black lego rail glued on](/img/axidraw/lego-rail.jpg)

This allows me to change the height of the mount, by inserting the blue part into the different hole. And to make things even better, the blue part behaves as an axis, and the whole mount can be rotated around it. Once mounted, it looks like this:

![Camera mounted on the plotter](/img/axidraw/lego-mounted.jpg)

And finally I shot a short test video plotting my logo:

<video
  style="width:100%"
  controls="true"
  muted="true"
  loop="true"
  playsinline="true"
  alt-text="Silver pen drawing my logo on black paper"
  src="/img/axidraw/lego-example.mp4#t=0.001"
></video>

If you want to see pen plots of my generative art, check my [Instagram account](https://www.instagram.com/muffinman_io/).
