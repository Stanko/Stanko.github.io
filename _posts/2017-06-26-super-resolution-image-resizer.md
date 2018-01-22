---
layout: post
title: waifu2x super resolution image resizer
category: [Random]
tags: [random]
---

I use [the same wallpaper](/public/img/image-resize/odin-2x.png)<sup>1</sup> (warning, 6mb file) for a long time now.
Not sure who is the author (if anyone knows the original author, please let me know in the comments).
But with high resolution displays, wallpaper started to look blurry and noisy, so I stopped using it.

But recently, my girlfriend reminded me of [this great website](http://waifu2x.udp.jp/) which super-scales images using magic. Ok, not magic, but it uses "Deep Convolutional Neural Networks", which is pretty much the same thing. Results are amazing, try it yourself.

The best thing, website is free to use and project is opensource. Code is available on [GitHub](https://github.com/nagadomi/waifu2x).

It supports max scaling of 2x, so if you need more you'll need to process image multiple times. Or you can dig in the code and add option for arbitrary scaling.

<span class="Small"><sup>1</sup> This is the resized image using waifu2x.</span>

### Example

Original, 250x250px jpeg <sup>2</sup>

<img
  class="Image"
  style="max-width: 500px; width: 100%;"
  src="/public/img/image-resize/rickmorty-250x250.jpg"
  alt="Original 250x250px image">

Result, 500x500px png

<img
  class="Image"
  style="max-width: 500px; width: 100%;"
  src="/public/img/image-resize/rickmorty-500x500.png"
  alt="Resized 2x 500x500px image">

If you ask me, results are really impressive, kudos to nagadomi!

<span class="Small"><sup>2</sup> Image is from my favorite animated show [Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty)</span>
