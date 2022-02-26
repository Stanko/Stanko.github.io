+++
title = "AxiDraw plotter Raspberry Pi camera mount"
aliases = ["/axidraw-plotter-camera-point/", "/axidraw-plotter-camera-mount/"]

[taxonomies]
category = ["Random"]
tags = ["generative-art", "plotter", "raspberrypi", "camera"]

[extra]
image = "/img/axidraw/mounted-1.jpg"
icon = "/icons/pen-plotter.svg"
+++

It has been almost two months since my last post because I was super busy with my new passion,
{{ sidenote(text="generative art", note="
For now, you can see my work on my [Instagram](https://www.instagram.com/muffinman_io/) profile.
Expect new posts about my process and tools in the near future.
") }}.

I also got my hands on the brilliant little machine by Evil Mad Scientist, [AxiDraw plotter](https://shop.evilmadscientist.com/908), and it is the best purchase I made in a long time. I love everything about it - how it is engineered, images I can produce using it and their support.

Then I saw [this video](https://www.instagram.com/p/B-5TeGDHo2c/) and was blown away by the idea of recording a plotter from this perspective. When I asked the author how he does it, he pointed me to [the tutorial he selflessly created](https://www.instructables.com/id/Raspberry-Pi-Camara-Mount-for-the-AxiDraw/). To film these wonderful videos, he made a mount for Raspberry Pi camera he can put directly on the plotter.

<!-- more -->
-----

I had a Raspberry lying somewhere in the flat, so I immediately ordered a camera and a 3d printed mount. Because of the COVID situation and the curfew it took a week for these to arrive, making me impatient.

It didn't take me long to assemble this, but I did
{{ sidenote(text="break one", note="
Luckily I ordered two.
") }}
3d printed mount when I was drilling holes in it. I didn't have any M2 screws, so improvised with the plastic spacers and connected everything together using thin steel wire. It is not the prettiest thing I've built, but it is functional!

![Camera on the 3d printed mount](/img/axidraw/front.jpg)

Here you can see how much I missed when I was drilling the holes:

![Back and side views of the mount](/img/axidraw/back-and-side.jpg)

Camera has a fixed focal length, and to get a sharp close up video, I had to adjust it by unscrewing the lens a little bit. My local Raspberry Pi supplier added [this tiny tool](https://www.adafruit.com/product/3518) with the camera, and it made adjusting super easy.

Shorty after I was able to record the first video using the little contraption I created:

<video
  poster="/img/axidraw/poster.jpg"
  style="width:100%"
  controls
  muted
  playsinline
  alt-text="White pen drawing stars on the black paper, the first video I recorded using the mount"
  src="/img/axidraw/stars.mp4"
></video>

Mesmerizing isn't it? I love the reflection on the pen.

-----

More images to show how it looks mounted on the plotter:

{{ dual_image(
  src1="/img/axidraw/mounted-1.jpg",
  alt1="The contraption mounted on AxiDraw plotter",
  src2="/img/axidraw/mounted-2.jpg",
  alt2="Another angle of the contraption mounted with the Raspberry Pi in the background"
) }}

This was a fun little project, and I hope you like the video. I can't wait to record longer ones.
And of course, big thanks to [@dutchplottr](https://www.instagram.com/dutchplottr/) who came up with the idea. Make sure you check his work as well!

