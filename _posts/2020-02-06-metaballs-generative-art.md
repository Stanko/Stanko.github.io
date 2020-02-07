---
layout: post
title: Metaballs
category: [Generative Art]
tags: [svg,generative-art,threejs,js]
image: /public/img/metaballs/05a.png
---

I'm all about generative/creative coding these days. [Metaballs](/metaballs/) are my latest creation. It is one of those projects that I visualized in my head and managed to pull it off exactly how I imagined it.

Somehow I came up with an idea to generate spheres, smoothly merge them to get organic looking shapes, which then I would slice and render it's
<label class="SideNote-trigger">outlines.</label>
<small class="SideNote">
I ordered a pen plotter and that is why I'm focused on producing vector images.
</small>

And one of the final images looks like this (click on it to see more):

[!["Perspective", image generated using Metaballs](/public/img/metaballs/05a.png)](/metaballs/)

<!--more-->

## Exploration

Not sure how I started thinking about slicing these *blobby* objects, but I had a clear vision of what I wanted to achieve. At this point I had no idea they are called metaballs. I asked on our company's `#tech-creative-coding` channel, if anyone is familiar with something similar, and my colleagues pointed out the term metaballs and [marching cubes](https://en.m.wikipedia.org/wiki/Marching_cubes) algorithm.

### Definition

Wikipedia defines metaballs as:

> In computer graphics, metaballs are organic-looking n-dimensional isosurfaces, characterised by their ability to meld together when in close proximity to create single, contiguous objects.

Which makes them perfect for what I had in mind - generating organic looking blobs.

## Implementation

### The first try

I wanted to implement it myself, but I didn't really know where to start. My initial idea was to hack it by overlapping two spheres and calculate a curve between them. By rotating this curve, I would create a *tube* and merge it with both spheres.

![Visualization of connecting two spheres using a tube](/public/img/metaballs/2d.svg)

It looks ok-ish for two spheres, but I wasn't completely satisfied. And it is impossible do it for more than two. So I gave up early on this idea.

### Marching on

So I went back to the marching cubes algorithm. After some research I found a [wonderful
post](http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/), which very thoroughly explains implementation of
<label class="SideNote-trigger">marching squares.</label>
<small class="SideNote">
Marching squares are the same algorithm as marching cubes, but in 2D.
</small>

Now I understood how algorithm works, but I wanted to avoid implementing it myself. So I started searching for the existing solution. I was more interested in being creative and playing with the shapes, rather than re-implementing a known algorithm. That's how I stumbled on [this demo](https://www.clicktorelease.com/code/bumpy-metaballs/).

`MarchingCubes.js` was shamelessly copied and I started creating some blobs.

## Tooling

I love making tools. And for generative art, I love tooling that helps me fine tune the algorithm  with
<label class="SideNote-trigger">immediate visual feedback.</label>
<small class="SideNote">
Bret Victor has a great talk on the subject - [Inventing on Principle](https://vimeo.com/36579366)
</small>
Tools like that allow me to stay in the zone and see changes in real time.

The tool I made for Metaballs looks like this:

![Screenshot of the custom tool I build using three.js](/public/img/metaballs/tooling.png)

# TODO
It is made using [three.js](https://threejs.org/).

### Blob to vector

Cel (or toon) shading seemed like a good idea. Apply a shader to the model, grab an image and trace it using Inkscape
<label class="SideNote-trigger">Inkscape.</label>
<small class="SideNote">
Under the hood, Inkscape uses [Potrace](http://potrace.sourceforge.net/) to convert raster to vector images.
</small>
But it ended up much harder to pull off then I thought it would.

And then it hit me! Why would I try to get fat edges in 3d, when I could just trace the object as it is and change edges once I get vectors.

!["Ginger", image generated using Metaballs](/public/img/metaballs/exports.png)


[!["Ginger", image generated using Metaballs](/public/img/metaballs/03b.png)](/metaballs/)
