---
layout: post
title: Components Showcase
category: [Random]
---


## Text

Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be... Quite possible. We live long and are celebrated poopers.

Okay, I like a challenge. Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff! Spare me your space age technobabble, Attila the Hun! Really?! Fry! Quit doing the right thing, you jerk!

## Lists

* Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
* Doomsday device? Ah, now the ball's in Farnsworth's court!
* Say it in Russian!

1. Five hours? Aw, man! Couldn't you just get me the death penalty?
1. Can I use the gun?
1. Bender, hurry! This fuel's expensive! Also, we're dying!

## Images

### Regular image

![](https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/futurama-bender-leela-fry-terrified-700x394.jpg)

### Large image

{:.Image.Image--lg}
![](http://digitalspyuk.cdnds.net/17/27/980x490/landscape-1499165191-futurama.jpg)

### Inline image

{:.Image.Image--inline}
![](http://digitalspyuk.cdnds.net/17/27/980x490/landscape-1499165191-futurama.jpg)

Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… Quite possible. We live long and are celebrated poopers.

## Block quote

Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… Quite possible. We live long and are celebrated poopers.


{:.Blockquote.Blockquote--sm}
> Why not indeed! Shut up and take my money! You guys go on without me! I'm going to go... look for more stuff to steal!

Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… Quite possible. We live long and are celebrated poopers.

{:.Blockquote.Blockquote--lg}
> That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing.

Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… Quite possible. We live long and are celebrated poopers.


## Side note

Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
Goodbye, cruel
<label class="SideNote-trigger">world</label>
<span class="SideNote">This is Bender talking</span>.
Quite possible. We live long and are celebrated poopers.

Goodbye, cruel lamp. Goodbye, cruel velvet drapes,
<label class="SideNote-trigger">lined with what would appear</label>
<span class="SideNote">Plus `paths` constant. I like to keep paths in the constant object, as it makes things easier to read.
</span> to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
Goodbye, cruel world.
Quite possible. We live long and are celebrated poopers.


## Code

### Small code block

{:.Code.Code--sm}
```js
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
};
```

### Large code block

{:.Code.Code--lg}
```js
// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
};
```
