+++
title = "Libraries I use for generative art"

[taxonomies]
category = ["Generative"]
tags = ["js", "svg", "spiral"]

[extra]
image = "/img/js-libs/belgrade.jpg"
intro = "A list of fast JavaScript libraries that I find super useful for generative work."
shadow = true

+++

This is going to be a very straight forward post. Just a list of JavaScript libraries I use in creating my generative art. And I really mean I use (and abuse) them. All of them are used in multiple of my drawings. I'll include couple of photos under the respective libraries.

I finally settled with these libraries after trying several other alternatives for each. Performance was one of the key factors (especially as generative work can get brute-forcy sometimes).

Huge **thank you** to {{ sidenote(
  text="all people who created and shared these wonderful tools!"
  note="Also, as a rule of thumb, when you find a good library, you might want to check author's GitHub profile. In the most cases you are going to find more useful stuff there. That is exactly how I found some of these."
) }}


Categories:

* [Randomness and noise](#randomness-and-noise)
* [Geometry](#geometry)
* [Vector fields](#vector-fields)
* [3D vector line engines](#3d-vector-line-engines)
* [Spatial data structures](#spatial-data-structures)
* [Axidraw](#axidraw)
* [Other](#other)

<!-- more -->

### Randomness and noise

##### [seedrandom](https://github.com/davidbau/seedrandom)

In generative programming it is super important to be able to repeat the same output. As randomness is heavily involved, we need a way to repeat random values. That's where seedrandom steps in as an excellent seeded random number generator.

##### [random-words](https://github.com/apostrophecms/random-words)

For random number generator seeds, I like to use real words instead of randomly generated strings. This library is a simple dictionary of couple of thousands english words.

##### [asm-noise](https://github.com/WesleyClements/asm-noise)

Fast implementation of Open Simplex and Perlin noise.

##### [poisson-disk-sampling](https://github.com/kchapelier/poisson-disk-sampling)

When you need a random collections of points in space, Poisson sampling is a great tool. It gives us much more natural distribution than just using random values.


### Geometry

##### [js-angusj-clipper](https://github.com/xaviergonz/js-angusj-clipper)

This library is a lifesaver. For all your polygon clipping and offseting needs. And it is super fast as it is implemented in WebAssembly.

##### [voronoi](https://github.com/gorhill/Javascript-Voronoi)

Sometimes I think I use Voronoi diagrams too much in my work. Anyway, this library efficiently computes Voronoi diagrams.

{{ image(
  alt="Krypton"
  src="/img/js-libs/krypton.jpg"
  size="xs"
) }}

##### [robust-point-in-polygon](https://github.com/mikolalysenko/robust-point-in-polygon)

For figuring out if the point is inside of the polygon. I tried a couple of other libraries and all of them would return wrong results in certain edge cases. So far, `robust-point-in-polygon` didn't let me down.

##### [simplify-js](https://github.com/mourner/simplify-js)

Simplifies polyline. Very useful for pen plotting. Sometimes my programs would generate lines with way too many points. This library will reduce the number significantly and human eye often can't see the difference.

##### [isect](https://github.com/anvaka/isect)

Finds all intersections of a given set of line segments.

### Vector fields

##### [streamlines](https://github.com/anvaka/streamlines)

Calculates stream lines for a given vector field.

{{ image(
  alt="Black Holes"
  src="/img/js-libs/black-holes.jpg"
  size="sm"
) }}

When I was making [Neon](/blog/neon-generative-art-piece-made-using-2d-vector-field/) I stumbled on [this paper](https://web.cs.ucdavis.edu/~ma/SIGGRAPH02/course23/notes/papers/Jobard.pdf). Before even trying to implement it myself, I searched for a good soul who already did it. Luckily I found Andrei's repo.

### 3D vector line engines

##### [linea](https://github.com/Stanko/linea)

This is my port of [Michael Fogleman's ln](https://github.com/fogleman/ln) from Go to TypeScript. It was never fully finished, so you might want to check another port - [ln.js](https://github.com/aweary/ln.js). It is complete and has better documentation than my port. Personally, I still use mine as it is easier for me to hack around.

{{ image(
  alt="Belgrade"
  src="/img/js-libs/belgrade.jpg"
  size="sm"
  shadow=true
) }}

### Spatial data structures

When working with spatial data, something that is a trivial problem to a human to see, can be super hard to code. These two libraries make things like searching for nearby elements in space so much easier.

##### [kd-tree-javascript](https://github.com/ubilabs/kd-tree-javascript)

[K-dimensional tree](https://en.wikipedia.org/wiki/K-d_tree) implementation. It is space-partitioning data structure for organizing points in a k-dimensional space.

##### [rbush](https://github.com/mourner/rbush)

2D spatial indexing which uses [R-tree](https://en.wikipedia.org/wiki/R-tree).

### AxiDraw

##### [saxi](https://github.com/nornagon/saxi)

All of my work is plotted using [AxiDraw](https://www.axidraw.com/). Saxi is a great little program that lets you control AxiDraw. It comes with a great set of default values for options. Depending on the scenario, it can make plotting a much more pleasant experience than official Inkscape plugin.


### Other

##### [mem](https://github.com/sindresorhus/mem)

Memoization of functions. It means that consecutive function calls with identical input are cached instead of calculated again.

##### [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces)

<span aria-hidden="true">ʕ•ᴥ•ʔ</span> cause why not? Just kidding. To make navigation through the history easier, for each unique combination of parameters I generate a random color and ASCII face. Then my browser history looks like this:

{{ image(
  alt="Funky browser history"
  src="/img/js-libs/cool-faces.png"
  size="xs"
  shadow=true
) }}





