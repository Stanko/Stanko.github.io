---
layout: post
title: Metaballs
category: ["Generative Art / Plotting"]
tags: [svg,generative-art,threejs,js,metaballs]
image: /public/img/metaballs/05a.png
redirect_from: "/metaballs-generative-art/"
---

I'm all about generative art these days. Today, I present you [Metaballs](/metaballs/), my latest creation. It is one of those projects that I visualized in my head and managed to pull it off exactly how I imagined it.

Somehow I came up with an idea to generate spheres, smoothly merge them to get organic looking shapes, which then I would slice up and render the
<label class="SideNote-trigger">outlines.</label>
<small class="SideNote">
I ordered a pen plotter and that is the reason I'm focused on producing vector files.
</small>

One of the final images looks like this (click on it to see more):

[!["Ginger", image generated using Metaballs](/public/img/metaballs/03a.png)](/metaballs/)

<!--more-->

## Exploration

Not sure how I started thinking about slicing these *blobby* objects, but I had a clear vision of what I wanted to achieve. At this point I had no idea they are called metaballs. I asked on our company's `#tech-creative-coding` channel, if anyone is familiar with making something like this, and my colleagues pointed out the term metaballs and [marching cubes](https://en.m.wikipedia.org/wiki/Marching_cubes) algorithm.

### Definition

Wikipedia defines metaballs as:

> In computer graphics, metaballs are organic-looking n-dimensional isosurfaces, characterised by their ability to meld together when in close proximity to create single, contiguous objects.

Which makes them perfect for what I had in mind - generating organic looking blobs.

## Implementation

### The first try

Initially I wanted to implement it myself, but I didn't really know where to start. I had an idea to hack it by overlapping two spheres and calculate a curve between them. By rotating this curve, I would create a *tube* and merge everything together.

![Visualization of connecting two spheres using a tube](/public/img/metaballs/2d.svg)

It looks ok-ish for two spheres, but I wasn't completely satisfied. And it was impossible do it for more than two spheres. So I gave up early on this idea.

### Marching on

So I went back to the marching cubes algorithm. After some research I found a [wonderful
post](http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/), which very thoroughly explains implementation of
<label class="SideNote-trigger">marching squares.</label>
<small class="SideNote">
Marching squares are the same algorithm as marching cubes, but in 2D.
</small>

Now I understood how algorithm works, but I gave up on implementing it myself. I was more interested in being creative and playing with the shapes, rather than re-implementing a known algorithm. So I started searching for the existing solution. That's how I stumbled on [this demo](https://www.clicktorelease.com/code/bumpy-metaballs/).

`MarchingCubes.js` was shamelessly copied and I started creating some blobs.

## Tooling

I love making tools. And for generative art, I love tooling that helps me fine tune the algorithm  with
<label class="SideNote-trigger">immediate visual feedback.</label>
<small class="SideNote">
Bret Victor has a great talk on the subject - [Inventing on Principle](https://vimeo.com/36579366)
</small>
Tools like this allow me to stay in the zone and see changes real time.

This is the tool I made for generating Metaballs, it is made using [three.js](https://threejs.org/) and allows me to create shapes in 3D:

![Screenshot of the custom tool I build using three.js](/public/img/metaballs/tooling.png)

I start by playing with random number generator seeds, until I get something that looks interesting. Then I adjust the number and the size of the spheres. Once I love the shape and the point of view, I spend a lot of time finely tuning all other parameters, until I'm satisfied with the looks.

### Blob to vector

As the final goal is to pen plot these, I had to convert them to vector files.

I wanted to have thick edges, and cel (a.k.a. toon) shading seemed like a good idea. Apply a shader to the model, grab an image and
<label class="SideNote-trigger">trace it using Inkscape.</label>
<small class="SideNote">
Under the hood, Inkscape uses [Potrace](http://potrace.sourceforge.net/) to convert raster to vector images.
</small>
But it ended up being much harder to pull off then I thought it would, as I didn't have any prior experience with shaders.

And then it hit me! Why would I try to get fat edges in 3D, when I could just trace the object as it is and change edge width once I convert it to vector.

To pull this off, I paint the outer mesh black, and slice surfaces white. I take a screenshot, reverse the colors and take another screenshot. The result looks like this, and the high contrast makes tracing very precise.

![Images prepared for vector tracing](/public/img/metaballs/exports.png)

Once traced, I check and polish any rogue edges that appeared in the tracing process. And that gives me the final result:

[!["Perspective", image generated using Metaballs](/public/img/metaballs/05b.png)](/metaballs/)

I can't wait for my plotter to arrive to
<label class="SideNote-trigger">start printing</label>
<small class="SideNote">
Couple of my friends already asked for prints :blush:
</small>
these.


## Closing thoughts

When I read this post, it sounds like the whole process was smooth sailing. But in reality, I had a lot of back and forth moments and had to learn a lot about working with 3D objects. But it was worth it - it was a lot of fun and I can't be more satisfied with the result.


## Plotted version

<small>Update, August 2020</small>

I plotted this one long time ago, but never updated the post. Better late than never!

![Pen plotted image generated by Metaballs, white gel pen on black paper](/public/img/metaballs/plot.jpg)

![Same plotted image in the white frame](/public/img/metaballs/plot-framed.jpg)

If you want to see more of my generative art, check my [Instagram account](https://www.instagram.com/muffinman_io/).
