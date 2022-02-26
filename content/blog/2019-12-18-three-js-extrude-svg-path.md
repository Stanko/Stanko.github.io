+++
title = "Three.js extrude SVG path"
aliases = ["/three-js-extrude-svg-path/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "threejs", "3d", "svg"]

[extra]
comments = [
  "comments/three-js-extrude-svg-path/1585509760335.toml",
  "comments/three-js-extrude-svg-path/1585512951827.toml",
  "comments/three-js-extrude-svg-path/1599565312731.toml",
  "comments/three-js-extrude-svg-path/1599566159579.toml"
]
image = "/img/extrude-svg/final.png"
+++

These days I'm playing with [three.js](https://threejs.org/) again. I'm not an expert but I enjoy playing with graphics.

Conveniently, a friend of mine sent me this [Dribble](https://dribbble.com/shots/8907229-Urban-Planners-Mobile-Animation), and I thought it would be a perfect exercise to try making it. I still haven't done it, but I did some exploration on how to built it.

<!-- more -->

My plan was to draw the parallaxing layers as vectors, import it in three.js and use `ExtrudeGeometry` to give them a third dimension. To three.js ninjas this might be funny, but it took me some time.

I haven't found well documented way, plus there are a couple of gotchas. And that is the reason I want to share this process with you.


## Before we start

I'll assume you have a basic understanding of three.js, and how to setup a scene. If you are just starting with it, I recommend going through their excellent [Getting Started](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) guide first.

If you just want to see the end result, feel free to jump to the [code](#code) or the [live demo](#live-demo).

## SVGLoader

Three.js provides us with [SVGLoader](https://threejs.org/docs/#examples/en/loaders/SVGLoader), but it is not the part of the main library. It is an extra, you have to include yourself.

If you are using three.js script file directly, make sure you include [this file](https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/SVGLoader.js) as well.

However if you are using `npm` module, you can import it like this:

```js
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
```

Like it's name suggest this class loads SVG from an URL and parses it into three.js entries. If you already have SVG markup as a string, it is easy to parse it, but it is also easy to miss how to do it in the documentation.

`SVGLoader` extends base `Loader` class, which contains `.parse()` method. That means we can do this:

```js
// Get SVG's markup
const svgMarkup = document.querySelector('svg').outerHTML;

const loader = new THREE.SVGLoader();
const svgData = loader.parse(svgMarkup);
```

Now when we know how to get SVG data to three.js, let's try to extrude it.

## Extrude

You'll need a SVG, I used my logo:

<svg width="202px" height="202px" viewBox="0 0 202 202" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="image">
  <path fill="none" d="M201,1 L201,201 L1,201 L1,1 L201,1 Z M53.27053,71 L37.6666667,71 L37.6666667,134.333333 L53.27053,134.333333 L53.27053,86.6038647 C59.2367133,86.879227 66.1207733,91.1014493 66.1207733,99.9130433 L66.1207733,134.333333 L80.4396133,134.333333 L80.4396133,99.9130433 C80.4396133,91.1014493 87.32367,86.879227 93.2898567,86.6038647 L93.2898567,134.333333 L110.63768,134.333333 L110.63768,86.6038647 C116.603863,86.879227 123.487923,91.1014493 123.487923,99.9130433 L123.487923,134.333333 L137.806763,134.333333 L137.806763,99.9130433 C137.806763,91.1014493 144.69082,86.879227 150.657003,86.6038647 L150.657003,134.333333 L166.26087,134.333333 L166.26087,71 L150.657003,71 C142.120773,71 133.859903,75.589372 130.647343,80.178744 C127.434783,75.589372 119.173913,71 110.63768,71 L93.2898567,71 C84.7536233,71 76.4927533,75.589372 73.2801933,80.178744 C70.0676333,75.589372 61.8067633,71 53.27053,71 Z" stroke="#979797"></path>
</svg>

To get to the shapes we can extrude, we need to parse the SVG. Get paths' data by calling `.paths()` method. It will return an array of [ShapePaths](https://threejs.org/docs/#api/en/extras/core/ShapePath). Each of these has `.toShapes(true)` method. Which will return another array,
{{ sidenote(text="which in our case will always include only one item.", note="
If you set second parameter `noHoles` to `true` it will return all holes as separate shapes. Read more in [toShapes documention](https://threejs.org/docs/#api/en/extras/core/ShapePath.toShapes).
") }}

Finally we got to the shapes
{{ sidenote(text="we can use `ExtrudeGeometry` on.", note="
You'll notice that every geometry in three.js has a "Buffer" version (e.g. `ExtrudeBufferGeometry`). Those are more optimized versions you should use on complex projects. If performance is not an issue (e.g. while learning), we can use more user friendly non-buffer versions.
") }}

```js
const svgMarkup = document.querySelector('svg').outerHTML;

const loader = new THREE.SVGLoader();
const svgData = loader.parse(svgMarkup);

// Group that will contain all of our paths
const svgGroup = new THREE.Group();

const material = new THREE.MeshNormalMaterial();

// Loop through all of the parsed paths
svgData.paths.forEach((path, i) => {
  const shapes = path.toShapes(true);

  // Each path has array of shapes
  shapes.forEach((shape, j) => {
    // Finally we can take each shape and extrude it
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 20,
      bevelEnabled: false
    });

    // Create a mesh and add it to the group
    const mesh = new THREE.Mesh(geometry, material);

    svgGroup.add(mesh);
  });
});

// Add our group to the scene (you'll need to create a scene)
scene.add(svgGroup);
```

![SVG path rendered in 3d space, but inverted](/img/extrude-svg/step-one.png)

Our progress will look something like this, and we got to our first gotcha:


## SVG paths are inverted on Y axis

Our image is rendered upside down! This happens in the process of mapping SVG's 2d to three.js' 3d coordinate system. SVG coordinate system has a center in the top left corner and positive values on Y axis are drawn downwards.

Three.js renderer draws paths using values from SVG paths. But in 3d space, positive Y values are drawn upwards and our image gets inverted.

We can fix this by simply inverting the group that contain our objects:

```js
svgGroup.scale.y *= -1;
```

![SVG path rendered in 3d space, this time in correct orientation](/img/extrude-svg/step-two.png)

## Every object has (0, 0, 0) position

Shapes we got from SVG are rendered in correct positions, but for some reason they all have position set to (0, 0, 0), meaning each object is relative to itself. If you log `mesh.position` you'll get:

```js
Vector3 { x: 0, y: 0, z: 0 }
```

What confuses me is that they are obviously not at position (0, 0, 0) in the scene. If you can explain this and how to get their actual position in the scene, please leave a comment.

## Rotating object around it's center

To show our object in it's full 3d glory let's add a rotation around Y axis. But it doesn't look good. It is rotating around its left edge (top left corner to be exact) instead of it's center.

![Our element rotates around it's corner and it's center](/img/extrude-svg/step-three.png)

**September 2020 update**: if you have only one path in the SVG you can use the tip from tuseroni's comment. Basically you just need to call `geometry.center()` before creating the mesg, to center it based on the bounding box. Unfortunately if you have multiple paths, this won't work.

----

Usual way of changing the rotation pivot is by offsetting the object's geometry. We can't do that, as `Group` class doesn't have geometry, but we can offset all of it's children. Now it comes handy that children are relative to themselves. We are just going to offset each child object for the half of the width and height of the whole group.

```js
// Meshes we got are all relative to themselves
// meaning they have position set to (0, 0, 0)
// which makes centering them in the group easy

// Get group's size
const box = new THREE.Box3().setFromObject(svgGroup);
const size = new THREE.Vector3();
box.getSize(size);

const yOffset = size.y / -2;
const xOffset = size.x / -2;

// Offset all of group's elements, to center them
svgGroup.children.forEach(item => {
  item.position.x = xOffset;
  item.position.y = yOffset;
});

```

Finally, we got what we wanted, so let's wrap things up.


![Our element now rotates around it's center](/img/extrude-svg/final.png)


## Putting it all together

This post ended up longer than I expected, and I hope it wasn't too slow of a write up.

### Code

Here is the code used, and beneath it you'll find the [live demo](#live-demo).

```js
// You'll need to create a three.js scene yourself

// Get SVG markup from DOM
const svgMarkup = document.querySelector('svg').outerHTML;

// SVG Loader is not a part of the main three.js bundle
// we need to load it by hand from:
// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/SVGLoader.js
const loader = new THREE.SVGLoader();
const svgData = loader.parse(svgMarkup);

// Group we'll use for all SVG paths
const svgGroup = new THREE.Group();
// When importing SVGs paths are inverted on Y axis
// it happens in the process of mapping from 2d to 3d coordinate system
svgGroup.scale.y *= -1;

const material = new THREE.MeshNormalMaterial();

// Loop through all of the parsed paths
svgData.paths.forEach((path, i) => {
  const shapes = path.toShapes(true);

  // Each path has array of shapes
  shapes.forEach((shape, j) => {
    // Finally we can take each shape and extrude it
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 20,
      bevelEnabled: false
    });

    // Create a mesh and add it to the group
    const mesh = new THREE.Mesh(geometry, material);

    svgGroup.add(mesh);
  });
});

// Meshes we got are all relative to themselves
// meaning they have position set to (0, 0, 0)
// which makes centering them in the group easy

// Get group's size
const box = new THREE.Box3().setFromObject(svgGroup);
const size = new THREE.Vector3();
box.getSize(size);

const yOffset = size.y / -2;
const xOffset = size.x / -2;

// Offset all of group's elements, to center them
svgGroup.children.forEach(item => {
  item.position.x = xOffset;
  item.position.y = yOffset;
});

// Finally we add svg group to the scene
scene.add(svgGroup);
```

### Live demo

<iframe
height='420px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/gObMepb/?height=500&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/gObMepb/'>three.js extrude SVG path</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
