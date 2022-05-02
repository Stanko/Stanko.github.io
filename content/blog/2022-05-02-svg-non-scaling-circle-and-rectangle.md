+++
title = "SVG <span>non-scaling</span> circle and rectangle"

[taxonomies]
category = ["Development"]
tags = ["svg", "non-scaling", "vector", "stroke", "circle", "rectangle"]

[extra]
intro = "It is easy to apply non-scaling effect to strokes, but about simple shapes?"
image = "/img/non-scaling-shapes.png"

+++

While making a simple SVG chart, I realized I would like to have non-scaling circles for data points. Unfortunately, SVG doesn't support it out of the box.

If you are eager to see the result, jump to [the examples below](#examples) or play with the code on [Codepen](https://codepen.io/stanko/pen/wvyvZaB?editors=1100).

## Non-scaling stroke example

SVG does support non-scaling stroke width by setting [vector-effect](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect) to `non-scaling-stroke`. When you set it, strokes will stay the same width no matter the scale of the SVG image.

Try {{ sidenote(
text="resizing your window"
note="On desktop, you should be able to resize each image on it's own by dragging the bottom right corner"
) }}, and you'll see that the bottom line always stays 1px, while the upper one scales with the image:

<div class="resize">
  <svg
    aria-label="Example of vector-effect='non-scaling-stroke'"
    viewBox="0 0 200 30"
  >
    <path d="M 0 5 200 5" fill="none" stroke="black" />
    <path d="M 0 25 200 25" fill="none" stroke="black" vector-effect="non-scaling-stroke" />
  </svg>
</div>

## Stroke line cap

SVG also allows you to change how your line's ends look like, by using [stroke-linecap](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes#stroke) property. Available options are `butt`, `square` and `round`, and on the image below they are presented in that order.

<svg
  aria-label="Example of different stroke-linecap values"
  style="background: white; padding: 30rem;"
  viewBox="0 0 200 100" class="image"
>
<path d="M 10 10 l 180 0" stroke="black" stroke-linecap="butt" stroke-width="20" />
<path d="M 10 10 l 180 0" stroke="#e6a03c" />
<path d="M 10 50 l 180 0" stroke="black" stroke-linecap="square" stroke-width="20" />
<path d="M 10 50 l 180 0" stroke="#e6a03c" />
<path d="M 10 90 l 180 0" stroke="black" stroke-linecap="round" stroke-width="20" />
<path d="M 10 90 l 180 0" stroke="#e6a03c" />
</svg>

As you can see `square` and `round` line caps are sticking out of our line. You probably figured it out, but that is exactly what we are going to use to create non-scaling circles and rectangles.

## Putting it all together

Up to this point we know that we can have a non-scaling stroke and that we can change its caps to be round and square. If we use a line with no length, sticking parts will join and create a perfect circle (or rectangle). SVG doesn't support lines with length of zero pixels, so we'll set the length to something negligible.

The only thing left is to set a thick stroke width to create a shape.

### Circle

The code below will create a black circle with a radius of 50 and center at `{ x: 50, y: 50 }`.

```html
<path
  d="M 50 50 l 0.0001 0"
  vector-effect="non-scaling-stroke"
  stroke-width="100"
  stroke-linecap="round"
  stroke="black"
/>
```

<svg
  aria-label="Black circle with a radius of 50"
  viewBox="0 0 100 100"
  width="200"
  style="background: white"
>
<path
  d="M 50 50 l 0.0001 0"
  vector-effect="non-scaling-stroke"
  stroke-width="100"
  stroke-linecap="round"
  stroke="black"
/>
</svg>

Let me quickly break the code down:

* `d="M 50 50 l 0.0001 0"` - this creates a super short line. The first two coordinates (`M 50 50`) are the line's start and our circle's center. The rest of the code (`l 0.0001 0`) draws a horizontal
{{ sidenote(
text="line 0.0001px long"
note="Please be aware that going with a lower value might break it in some browsers"
) }}.
* `vector-effect="non-scaling-stroke"` - enables non-scaling stroke.
* `stroke-width="100"` - stroke width should be a diameter (`2 * radius`) of the circle.
* `stroke-linecap="round"` - finally set line caps to `round` and by sticking out they will create a circle.


### Rectangle

Code for the rectangle is almost the same, just set line caps to square.

```html
<path
  d="M 50 50 l 0.0001 0"
  vector-effect="non-scaling-stroke"
  stroke-width="100"
  stroke-linecap="square"
  stroke="black"
/>
```

## Examples

On the left are
{{ sidenote(text="standard scaling shapes", note="`<circle />` and `<rect />`" ) }}
, while on the right are non-scaling shapes created using the method I described above. Try resizing your window and you'll see that the shapes on the right always stay the same size, no matter the image size.


<div class="resize">
  <svg
    aria-label="Example of filled non-scaling circle next to the standard scaling one"
    viewBox="0 0 200 100"
  >
    <circle
      cx="50"
      cy="50"
      r="50"
      fill="#2980b9"
    />
    <path
      stroke="#2980b9"
      d="M 150 50 l 0.0001 0"
      stroke-linecap="round"
      stroke-width="100"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</div>

<div class="resize">
  <svg
    aria-label="Example of filled non-scaling rectangle next to the standard scaling one"
    viewBox="0 0 200 100"
  >
    <rect
      x="10"
      y="0"
      width="100"
      height="100"
      fill="#16a085"
    />
    <path
      stroke="#16a085"
      d="M 150 50 l 0.0001 0"
      vector-effect="non-scaling-stroke"
      stroke-linecap="square"
      stroke-width="100"
    />
  </svg>
</div>

## Outlined shapes

We can even add an outline, but we'll need two elements. One acts as the outline, and the smaller one as a fill. Because the stroke width is the diameter, just make sure the smaller element's stroke is smaller for two times the outline width.

To give you an example, if we want a circle with radius of 50px and outline of 1px, stroke widths need to be 100px and 98px.

Which gives us the following code:

```html
<path
  stroke="black"
  d="M 50 50 l 0.0001 0"
  vector-effect="non-scaling-stroke"
  stroke-linecap="round"
  stroke-width="100"
/>
<path
  stroke="white"
  d="M 50 50 l 0.0001 0"
  vector-effect="non-scaling-stroke"
  stroke-linecap="round"
  stroke-width="98"
/>
```

<div class="resize">
  <svg
    aria-label="Example of outlined non-scaling circle next to the standard scaling one"
    viewBox="0 0 200 100"
  >
    <circle
      cx="50"
      cy="50"
      r="50"
      vector-effect="non-scaling-stroke"
      stroke="black"
      fill="none"
    />
    <path
      stroke="black"
      d="M 150 50 l 0.0001 0"
      vector-effect="non-scaling-stroke"
      stroke-linecap="round"
      stroke-width="100"
    />
    <path
      stroke="white"
      d="M 150 50 l 0.0001 0"
      vector-effect="non-scaling-stroke"
      stroke-linecap="round"
      stroke-width="98"
    />
  </svg>
</div>

<div class="resize">
  <svg
    viewBox="0 0 200 100"
    aria-label="Example of outlined non-scaling rectangle next to the standard scaling one"
  >
    <rect
      x="10"
      y="0"
      width="100"
      height="100"
      vector-effect="non-scaling-stroke"
      stroke="black"
      fill="none"
    />
    <path
      stroke="black"
      d="M 150 50 l 0.0001 0"
      vector-effect="non-scaling-stroke"
      stroke-linecap="square"
      stroke-width="100"
    />
    <path
      stroke="white"
      d="M 150 50 l 0.0001 0"
      vector-effect="non-scaling-stroke"
      stroke-linecap="square"
      stroke-width="98"
    />
  </svg>
</div>

This method is practical for elements that should stay the same when image scales. I already mentioned data points on charts, but it is also useful for map markers.

It might even be possible to create more complex elements combining multiple paths, but I haven't really looked into it.

I hope you'll find it useful!
