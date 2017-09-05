---
layout: post
title: React Image Filter
category: [React, JavaScript]
---

On the project I'm currently working on, client's logo is displayed in two versions,
black on the white background and vice versa.
To make their life easier, so they don't have to upload two assets, I suggested SVG.
Alas they can't use SVGs (kinda long story), so I just applied CSS `filter: invert(1);`, but...

...you guessed it - it doesn't work in IE and Edge :(

So I started reading about [SVG filters](https://developer.mozilla.org/en/docs/Web/SVG/Element/filter)
and found a way to invert a image. But it got me interested,
so I kept going and made a React component for all sorts of color filters.

Play with the [interactive demo](https://stanko.github.io/react-image-filter/).

Documenation available on [GitHub](https://github.com/Stanko/react-image-filter) and [npm](https://www.npmjs.com/package/react-image-filter).

[![Demo](/public/img/image-filter-1.jpg)](https://stanko.github.io/react-image-filter/)

<!--more-->

SVG filters include `feColorMatrix` which is a matrix for color transformation.
Changing the matrix value you can achieve all of the CSS filters.

It accepts 5x4 matrix. Two examples:

```javascript
// Base matrix (no filter)
1  0  0  0  0
0  1  0  0  0
0  0  1  0  0
0  0  0  1  0

// Invert colors matrix
-1  0  0  0  1
 0 -1  0  0  1
 0  0 -1  0  1
 0  0  0  1  0
```

I wasn't lazy so I made interactive way of changing values in matrix.
Every value has it's own range slider. This way you can see the changes right away.

![Controls](/public/img/image-filter-controls.png)

Soon I encountered another problem.
As applying SVG filters in CSS also doesn't work in IE and Edge, I used SVG `<image />` tag.
But SVG wouldn't scale to the image size.

Then it hit me, I can solve it by using a simple hack. Component is rendering a wrapper div with SVG inside.
So I added a `<img />` using the same image and div resizes to fit the image.
Here comes the hack - I've hidden the image using `visibility: hidden` and made SVG absolute and 100% width/height.
This way SVG always keeps image aspect ratio.

SVGs are awesome :)


[![Demo](/public/img/image-filter-2.jpg)](https://stanko.github.io/react-image-filter/)
