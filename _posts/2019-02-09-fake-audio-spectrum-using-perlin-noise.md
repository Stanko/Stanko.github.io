---
layout: post
title: Fake audio spectrum, using perlin noise
category: [JavaScript]
tags: [js,animation]
---

Few days ago, I was chatting with our design team, and we were wondering how hard would be to create a fake audio spectrum (that mimics human speech) and visualize it. I immediately said it should be easy, and that I will play with it over the weekend. Of course, I didn't wait for the weekend, but wrote it the same evening. It was fairly straightforward, but it had few gotchas.

## Result

Before you start playing with the checkboxes I advise you to read the rest of this post.

<div class="Spectrum"></div>

<label style="display: block; display: flex; align-items: center; font-size: 0.8em">
  <input type="checkbox" class="Spectrum-checkbox Spectrum-checkbox--random" checked />
  Use random value
</label>
<label style="display: block; display: flex; align-items: center; font-size: 0.8em">
  <input type="checkbox" class="Spectrum-checkbox Spectrum-checkbox--sample" checked />
  Use static sample
</label>
<label style="display: block; display: flex; align-items: center; font-size: 0.8em">
  <input type="checkbox" class="Spectrum-checkbox Spectrum-checkbox--perlin" checked />
  Use perlin noise value
</label>


<style>
.Spectrum {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 300px;
}

.Spectrum-segment {
  background: #345;
  margin: 0 2px;
  height: 100%;
  transition: transform 125ms linear;
  width: 4px;
}
</style>

<script src="/public/examples/audio-spectrum.js"></script>

<!--more-->

## Implementation

My initial idea was to analyze couple of audio files to extract the
<label class="SideNote-trigger">average values</label>
<small class="SideNote">
Try disabling all checkboxes but "static".
</small>
for the spectrum. Then combine it with the data from this great post about [language pitch](https://erikbern.com/2017/02/01/language-pitch.html). At the end, I ended up tweaking values to make it "look better", based only on my personal feel.

Only thing left was to multiple the values I got with the
<label class="SideNote-trigger">randomly generated value.</label>
<small class="SideNote">
Enable "random" and "static" checkboxes and disable the "perlin" one to see how it looks. It kinda works, but it feel too random.
</small>


### Perlin noise

But before I started, I asked my colleagues for ideas, and I got some great feedback. One of the suggestions was to use [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise). I've never heard of it, so I did some reading.

> Perlin Noise is a technique used to produce natural appearing textures on computer generated surfaces for motion picture visual effects.

Ken Perlin was frustrated by machine-like look of computer graphics at the time, and created a gradient noise algorithm.  It is basically a pseudo-random generator which outputs more
<label class="SideNote-trigger">nature like patterns</label>
<small class="SideNote">
Disable "random" and play with the other two checkboxes to see how it feels.
</small>.

That seemed like a great way to improve my random only solution.

There are multiple JavaScript implementations, but I ended using [this one](https://codepen.io/anon/pen/vaRdGp) as it was really simple and I didn't need 2D or 3D noise.


### Putting everything together

Now when I had everything I needed, it was easy to write the actual code. Working demo was done really quickly. Then I started playing with values and tweaking them. Finally I was satisfied with the result. It still feels a little bit too smooth and unnatural. But I didn't mind it that much, I left it as something that can be improved, along with different speed for jumps and drops.

To animate things I ended up using CSS transforms plus flexbox, as it was the easiest way I could think of. Using canvas probably could probably improve performance, but this was a proof of concept and I didn't bother with it.

Code can be found on [Codepen](https://codepen.io/stanko/pen/mvprzX). Have fun!

-----

We probably won't use this one on the real project, but it's about the journey, not the destination. I had a lot of fun and I learned new things. And that is the main reason I enjoy research and proof of concepts so much.

