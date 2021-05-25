---
layout: post
title: Using AutoTrace's centerline option for pen plotting
category: ["Generative Art / Plotting"]
tags: [svg,vector,trace]
---

For one of my previous projects, [Metaballs](/metaballs/), I used [potrace](http://potrace.sourceforge.net/) to vectorize my work. I need vectors to be able to pen plot them. Potrace is awesome, but it doesn't support "centerline" vectorization. That means it traces the outline, rather then the centerline. For Metaballs it worked well, as I generated images with that in mind.

But recently I wanted to do something a little bit different - to plot these wonderful [I Believe](https://wintergatan.net/collections/download/products/i-believe-posters-all-colours-and-formats) posters. If you are not familiar with Marble Machine X and Martin's work on it, I urge you to check his [YouTube channel](https://www.youtube.com/channel/UCcXhhVwCT6_WqjkEniejRJQ). He is documenting the whole process of creating this wonderful contraption.

{:#plot}
!["I believe" poster, plotted on black paper](/public/img/i-believe-plot.jpg)

That is how I found [AutoTrace](https://github.com/autotrace/autotrace). It is the only open source library I found, that supports centerline vectorizing. Above you can see the finished pen plot.

<!--more-->

## Use `.pnm` instead of `.png`

I downloaded the latest [release from GitHub](https://github.com/autotrace/autotrace/releases), which includes the app, but double clicking it didn't do anything. Then I figured out I can run it's executable from the terminal, by giving the whole path to it:

```
./autotrace.app/Contents/MacOS/autotrace
```

Unfortunately, standalone build doesn't work with `.png` files. When I tried to vectorize a png file, I would get an error message:
```
[31][01][00][20]: invalid chunk type
```

You can enable png support by compiling it yourself, but I quickly gave up on that, when I realized it works with `.pnm` files. I used Gimp to convert my png files to pnm.

## Vectorize it using "centerline" argument

When you generate `.pnm` file, it is easy to follow documentation to covert images to vector line drawings:

```
./autotrace.app/Contents/MacOS/autotrace -centerline -color-count 2 -output-file output.svg -output-format svg input.pnm
```

I think it is pretty self explanatory, but let's go through CLI arguments:

* `-centerline` - trace centerline instead of outline
* `-color-count 2` - reduce the image to two colors before tracing
* `-output-file output.svg` - output file name
* `-output-format svg` - output format (you can use a lot of different formats like eps, ai, dxf...)
* `input.pnm` - and finally the input file

## Result

You already saw the finished plot [above](#plot), but here is the vector file as well. It is not perfect, but I'm super satisfied with the output. There are some artifacts and glitches, but those just gave the plot a hand drawn feel.

{:.Image.Image--lg}
![Preview of a vectorized image](/public/img/i-believe.svg)

If you end up using the vector image, please credit Martin's [original source](https://wintergatan.net/collections/download/products/i-believe-posters-all-colours-and-formats), and follow the Creative Common license CC BY NC SA 4.0 license it was released under.
