+++
title = "Draw <span>SVG rope</span> using JavaScript"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "svg", "drawing", "rope", "interactive"]

[extra]
intro = ""
image = "/img/rope/cover.png"

+++
<link rel="stylesheet" href="/posts/rope.css" />

<noscript>
<p>This is an interactive article. To fully experience it, you'll need to turn JavaScript on.</p>
</noscript>

Today, I'll take you through the process I came up with to transform an SVG path into a vector rope drawing.

We'll learn how to turn the path on the left into the rope on the right:
{{image(src="/img/rope/path-to-rope.png", alt="SVG path and a rope drawing created from it",size="lg")}}

The problem popped up on a project my colleagues were working on, and it stuck with me. I thought about it and started playing with it as soon as I got some free time. I had a lot of fun. Therefore I want to share the process with you.

Please note that this is not a coding tutorial but a detailed overview of each step. But don't worry, the code is fully available.

If you feel impatient, you can jump to the [interactive demo](#demo) or check the code [on CodePen](https://codepen.io/stanko/pen/vYaEMKX). But I heartily recommend you read the whole thing first.

## Idea

Looking at this close-up photo of a rope, we can see it consists of multiple strands twisted around each other. Visually, they split the rope into segments. Each segment's 2D projection resembles a curved polygon.

Our goal will be to create these polygons using JavaScript.

We'll start by generating simple rectangular polygons. Then we'll fine-tune them to make them look like actual rope segments.

![Close-up photo of a rope](/img/rope/close-up.jpg)


### How to approach problems like this

I think this is one of the problems a child can solve and draw on paper. But at the same time, breaking it down and turning it into code is hard.

I've seen many junior developers struggle with similar problems. Usually, it starts with them diving into coding right away. Then they entangle themselves in their code and get stuck. And that is why it is so important to
{{ sidenote(
  text="solve the problem first.",
  note="I bore my mentees to death by repeating that programming is problem-solving, while code is just a tool to implement those solutions."
)}}

I'm a visual thinker. For me drawing things on paper makes a problem easier to solve. I would suggest you try the same. Keep a pen and paper near your computer and reach out for them before you start typing code.

After doodling ropes for a while, I was satisfied with the image you can see in the bottom right on the left page:

{{image(src="/img/rope/notebook.jpg", alt="My notebook with sketches I draw while solving the problem",size="md")}}

It is not perfect, but it is straightforward and easy to code. That's why I selected it as a starting point, and only then I started coding.


## The process

<small>The image below will stay in the viewport and update as you scroll.</small>

<div class="steps-wrapper">

<div class="rope-steps image--md is-in-viewport">
  <svg class="rope-svg" viewBox="0 0 500 200"></svg>
</div>


<div class="step-section step-section--path">

  ### Start with an SVG path

  Our goal is to make a program that turns any SVG path into a rope. The program will have to support straight line segments (polylines) and bezier curves.

  Let's start with a simple curved path shown above.

  {{ spoiler(text='```html
<path
  d="M 50 150
     C 150 150, 150  50, 250  50
     C 350  50, 350 150, 450 150"
/>
  ```', show="Show path's code", hide="Hide path's code") }}

  <span id="path" class="step-title"></span>
</div>

<div class="step-section step-section--points">

  ### Split the path into equal parts

  If we split the path into parts, we can use each piece for one rope segment. To chop the path up, we'll have to go along it and calculate a point on every `n` pixels.

  To do so, we'll need a way to get the total length of the path so we know when to stop iterating, as well as the function to get the point at the specific length.

  Luckily, browsers natively provide us with the methods we need:

  * [getTotalLength](https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength) which returns the length of the path.
  * [getPointAtLength](https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength) which returns the point at a given distance along the path.

  The nice thing is that we don't need to render the path on the page. Both methods work with the path being in memory only.

  Below is the function I used to calculate these points:

  {{ spoiler(text='
```js
function getPathPoints(d, step = 10) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const length = path.getTotalLength();

  const count = length / step;

  const points = [];

  for (let i = 0; i < count + 1; i++) {
    const n = i * step;
    points.push(path.getPointAtLength(n));
  }

  return lines;
}
```
', show="Show code", hide="Hide code") }}

  You'll notice two extra points in the image above at the start and end. Those are not included in the code snippet above. Just ignore them for now, we'll use them later.

  **Note on server-side rendering**

  These methods don't work on the server. However, I checked a few server-side languages, and almost all of them have variations of these two methods. For NodeJS you could probably use [svg-path-properties](https://www.npmjs.com/package/svg-path-properties) library.

  <span id="points" class="step-title"></span>
</div>

<div class="step-section step-section--normals">

  ### Add some thickness

  Now that the path is split, we need to give each segment some thickness. We'll do it by drawing a normal line through each point.

  For our use case, normals don't have to be mathematically exact, approximation will do. There is an easy way to approximate a normal on a curve, and it requires three consecutive points.

  {{image(src="/img/rope/bisector.png", alt="Normal line is defined by the bisector of the angle between three points", size="sm")}}

  In the figure above, you can see the normal drawn through the point **P**. It is defined by the bisector of the angle **α** between points **Pp**, **P** and **Pn**. Points **Pp** and **Pn** are helper points. We are going to use the previous and next points as helper points.

  If you thought, "oh, that's why he added those extra points in the previous step", you are correct! Those are added to ensure the first and the last point also have neighbors on both sides.

  Lucky me, I already had code, as I solved the same problem for my [Vertigo](https://muffinman.io/vertigo/) project.

  <span id="normals" class="step-title"></span>
</div>

<div class="step-section step-section--polygons">

  ### Connect normals into segments

  Not much to say about this step. We just need to connect pairs of neighboring normals, which will give us blocky segments. Let's try rounding their corners to make them more interesting.

  <span id="polygons" class="step-title"></span>
</div>

<div class="step-section step-section--round-polygons">

  ### Rounding segment corners

  To round segments, we will use Chaikin's method, which is a recursive subdivision algorithm for curve generation. The algorithm takes each line of the polygon and finds two points at a defined ratio (0.25 usually works best) on both sides. Then it replaces the original point with two newly created ones. Finally, we repeat the whole process recursively until we are satisfied with the result.

  It sounds more complicated than it actually is, and I think the interactive example below will help things click into place:

  <div class="chaikin">
    <svg class="chaikin-svg" viewBox="0 0 200 200"></svg>
    <div class="chaikin-control">
      <label for="chaikin-iterations">Iterations</label>
      <span class="chaikin-iterations-value"></span>
      <input type="range" min="0" max="6" step="1" value="0" id="chaikin-iterations" class="chaikin-iterations" />
    </div>
    <div class="chaikin-control">
      <label for="chaikin-ratio">Ratio</label>
      <span class="chaikin-ratio-value"></span>
      <input type="range" min="0.1" max="0.3" step="0.05" value="0.25" id="chaikin-ratio" class="chaikin-ratio" />
    </div>
    <div class="chaikin-control">
      <label for="chaikin-show-points">
        Show points
      </label>
      <input id="chaikin-show-points" class="chaikin-show-points" type="checkbox" checked />
    </div>
  </div>

  This rounding method doesn't return bezier curves but a polyline. In many cases, that is good, as geometrical operations are easier to do with polylines than with bezier curves. With enough iterations, the human eye can't tell the difference anyway.

  <span id="round-polygons" class="step-title"></span>
</div>

<div class="step-section step-section--angle-polygons">

  ### Skew segments

  The physical rope is created by twisting multiple threads together. To mimic the twisting, we need to skew our segments. We can easily do that by rotating the bisector for a fixed angle.

  <span id="angle-polygons" class="step-title"></span>
</div>

<div class="step-section step-section--angle-polygons-thin">

  ### Call it a day?

  If we remove helper elements and make the whole thing thinner, it resembles a rope. Depending on your needs, you could stop right here.

  But if we look at the photo of a rope above, we can see that our polygons are not fully resembling it. They are almost regular, while in the photo, segments overlap and go under each other.

  So let's continue and try to make our segments look more like ones in a physical rope.

  <span id="angle-polygons-thin" class="step-title"></span>
</div>

<div class="step-section step-section--segments">

  ### Improve segments

  We need to go back to the sketch I showed you at the start. We'll un-skew segments, for now, to make things easier to see.

  {{image(src="/img/rope/notebook-close-up.jpg", alt="Sketch on my notebook", size="sm")}}

  We need to cut off two segment corners and add two tips defined by points 3 and 8 in the sketch.

  After implementing it, segments felt
  {{ sidenote(text="too blocky and mathematical", note="Sorry, but I didn't keep the code for it, so I don't have an example to show you.") }}, but I knew I was going in the right direction. Then I started fine- tuning it by moving points around. You can see the result in the image above, and I think segments now look a lot more natural and curvy.

  Before moving on, notice that the first and the last segments are slightly different as they are not sandwiched between two other segments. That's why they have different treatment in the code than all other segments.

  <span id="segments" class="step-title"></span>
</div>

<div class="step-section step-section--segments-rounded">

  ### Round segments again

  If we apply Chaikin's algorithm to new segments as a closed polyline, we will get this:

  ![Rounding applied to the segment polyline as a whole](/img/rope/full-chaikin.png)

  It is nice and round, but it feels weird, and takes away from the illusion of twisting. It would look better if we kept two sharp corners.

  To keep the corners, we'll split the segment line into two lines and then apply the rounding algorithm on each one separately. This will give us a better illusion of threads going behind each other.

  <span id="segments-rounded" class="step-title"></span>
</div>

<div class="step-section step-section--segments-rounded-fix-gaps">

  ### Fix gaps (optional)

  There is a minor issue that is noticeable after the rounding step. Small gaps appear because points are removed in the process.

  ![Small gaps that appear after using rounding polylines](/img/rope/gaps.png)

  I don't mind it, as it is only visible if the outlines are really thin. Thicker outlines will cover everything nicely.

  I did fix it, but only for the challenge of it. There is a hacky technique to save a point from removing when using Chaikin's algorithm - triple that point. That way, we are creating two edges with zero width. No matter how many times we do the recursive subdivision, any ratio of zero is still zero.

  However, this hack has a drawback. It will duplicate all three points in each iteration. So if you end up using this fix, you might want to clean up the duplicated points.

  As I already said, I don't mind, so I disabled the fix in the following steps.

  <span id="segments-rounded-fix-gaps" class="step-title"></span>
</div>

<div class="step-section step-section--angle-segments">

  ### Skew segments again

  Let's skew everything again. As in the step above, we'll just rotate the bisector by a fixed angle.

  <span id="angle-segments" class="step-title"></span>
</div>

<div class="step-section step-section--colors">

  ### Add some color

  Let's remove the helper elements and add some color. I would say that now it really looks like a rope! But we are not entirely done yet.

  <span id="colors" class="step-title"></span>
</div>

<div class="step-section step-section--animate">

  ### Animate it

  We can even animate our rope. Animating it can come in handy for charts. But honestly, I just wanted to have some fun with it.

  We'll keep it simple. We'll update the path in each frame, regenerate the whole rope and rerender it. To do that, we'll need an animation loop and a way to update the path. If you are unfamiliar with the animation loop, I already [wrote about it here](/blog/javascript-animation-loop/).

  To move the path, I wrote a function to update the `y` coordinate for each point on the path:

```js
function getStepPath() {
  const y = easing(t) * 100 + 50;
  const y1 = y;
  const y2 = 200 - y;

  return `M  50 ${y2}
          C 150 ${y2}, 150 ${y1}, 250 ${y1}
          C 350 ${y1}, 350 ${y2}, 450 ${y2}`;
}
```

  `t` is the value that bounces between 0 and 1 over time. Then we can apply easing to the `t` value and calculate all of the `y` values.

  To make our rope dance, we need to plug this logic into the animation loop.

  I won't go any deeper into the implementation here. I recommend you check the code and play with it.

  <span id="animate" class="step-title"></span>
</div>

<div class="step-section step-section--animate-thin">

  ### Call it a day!

  Finally, our rope is complete! Thank you very much for sticking with me. Grab a beverage of your choice; you earned it!

  <span id="animate-thin" class="step-title"></span>
</div>

</div>

## Final thoughts

This post took way longer to write than I expected, and I hope you enjoyed it cause I did. Making interactive examples is pretty time-consuming, but it is rewarding and fun to do.

Before you go, don't forget to:

  * play with [the interactive demo](#demo) below
  * check the code [on CodePen](https://codepen.io/stanko/pen/vYaEMKX)
  * dig around interactive examples [used on this page](/js/posts/rope.js) (the code is a little messy).

## Demo

<div class="demo">
  <svg class="demo-svg image--lg is-in-viewport" viewBox="0 0 500 200"></svg>

  <div class="demo-controls">
    <div class="demo-controls-column">
      <div class="demo-title">Options</div>
      <label class="demo-checkbox-label">
        <input class="demo-checkbox-animate" type="checkbox" checked />
        Animate
      </label>
      <div class="demo-control">
        <label for="demo-step">Segment width</label>
        <span class="demo-value"></span>
        <input data-key="step" type="range" min="3" max="50" step="1" value="20" id="demo-step" />
      </div>
      <div class="demo-control">
        <label for="demo-thickness">Rope thickness</label>
        <span class="demo-value"></span>
        <input data-key="thickness" type="range" min="3" max="50" step="1" value="40" id="demo-thickness" />
      </div>
      <div class="demo-control">
        <label for="demo-angle">Skew angle</label>
        <span class="demo-value"></span>
        <input data-key="angle" type="range" min="0" max="90" step="1" value="45" id="demo-angle" />
      </div>
    </div>
    <div class="demo-controls-column">
      <div class="demo-title">Render</div>
      <label class="demo-checkbox-label">
        <input data-key="path" class="demo-checkbox" type="checkbox" />Path
      </label>
      <label class="demo-checkbox-label">
        <input data-key="points" class="demo-checkbox" type="checkbox" />Points
      </label>
      <label class="demo-checkbox-label">
        <input data-key="normals" class="demo-checkbox" type="checkbox" />Normals
      </label>
      <label class="demo-checkbox-label">
        <input data-key="polygons" class="demo-checkbox" type="checkbox" />Square-ish segments
      </label>
      <label class="demo-checkbox-label">
        <input data-key="polygonsRounded" class="demo-checkbox" type="checkbox" />Rounded square-ish segments
      </label>
      <label class="demo-checkbox-label">
        <input data-key="segments" class="demo-checkbox" type="checkbox" />Segments
      </label>
      <label class="demo-checkbox-label">
        <input data-key="rope" class="demo-checkbox" type="checkbox" checked />Rounded segments
      </label>
    </div>
    <div class="demo-controls-column">
      <div class="demo-title">Colors</div>
      <label class="demo-radio-label">
        <input class="demo-radio" type="radio" name="demo-colors" value="transparent" />
        Transparent
      </label>
      <label class="demo-radio-label">
        <input class="demo-radio" type="radio" name="demo-colors" value="white" />
        White
      </label>
      <label class="demo-radio-label">
        <input class="demo-radio" type="radio" checked name="demo-colors" value="natural" />
        Natural
      </label>
      <label class="demo-radio-label">
        <input class="demo-radio" type="radio" name="demo-colors" value="rainbow" />
        Rainbow
      </label>
    </div>
  </div>
</div>

<script src="/js/posts/rope.js"></script>
