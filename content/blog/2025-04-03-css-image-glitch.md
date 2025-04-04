+++
title = "CSS-only <span>glitch effect</span>"

[taxonomies]
category = ["CSS/SASS"]
tags = ["glitch", "css", "filter"]

[extra]
intro = "Slice It, Move It, Hue-rotate It!"
image = "/img/bard/thumb.png"
+++

<link rel="stylesheet" href="/posts/glitch.css" />

Let me show you how I created a CSS-only image glitch effect. I was working on [the robot poet](https://muffinman.io/bard) and wanted my robotic bard to glitch - because it felt fitting given the quality of poetry it generates.


Here's the final result:

<div class="glitch">
<div class="strip" style="--glitch-x-1: -7em; --glitch-hue-1: 41deg; --glitch-x-2: 7em; --glitch-hue-2: 20deg; background-position: 0 -0em; height: 5em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 8em; --glitch-hue-1: 25deg; --glitch-x-2: -3em; --glitch-hue-2: 6deg; background-position: 0 -5em; height: 3em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: -14deg; --glitch-x-2: 6em; --glitch-hue-2: -34deg; background-position: 0 -8em; height: 4em; animation-name: glitch-6; animation-duration: 6000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: -27deg; --glitch-x-2: 9em; --glitch-hue-2: 48deg; background-position: 0 -12em; height: 3em; animation-name: glitch-7; animation-duration: 7000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 7em; --glitch-hue-1: 9deg; --glitch-x-2: 2em; --glitch-hue-2: -20deg; background-position: 0 -15em; height: 3em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -7em; --glitch-hue-1: -11deg; --glitch-x-2: 3em; --glitch-hue-2: 39deg; background-position: 0 -18em; height: 2em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: 25deg; --glitch-x-2: 10em; --glitch-hue-2: 44deg; background-position: 0 -20em; height: 6em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: 48deg; --glitch-x-2: 0em; --glitch-hue-2: -47deg; background-position: 0 -26em; height: 4em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: 20deg; --glitch-x-2: -2em; --glitch-hue-2: -40deg; background-position: 0 -30em; height: 4em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -5em; --glitch-hue-1: 12deg; --glitch-x-2: -9em; --glitch-hue-2: 44deg; background-position: 0 -34em; height: 3em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: -3em; --glitch-hue-1: -15deg; --glitch-x-2: -9em; --glitch-hue-2: -12deg; background-position: 0 -37em; height: 5em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: 2em; --glitch-hue-1: -33deg; --glitch-x-2: 2em; --glitch-hue-2: -33deg; background-position: 0 -42em; height: 1em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 1em; --glitch-hue-1: -28deg; --glitch-x-2: 2em; --glitch-hue-2: -42deg; background-position: 0 -43em; height: 2em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: -6em; --glitch-hue-1: 12deg; --glitch-x-2: 9em; --glitch-hue-2: 44deg; background-position: 0 -45em; height: 5em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: 5em; --glitch-hue-1: -37deg; --glitch-x-2: -8em; --glitch-hue-2: 25deg; background-position: 0 -50em; height: 1em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 7em; --glitch-hue-1: -24deg; --glitch-x-2: -2em; --glitch-hue-2: -11deg; background-position: 0 -51em; height: 3em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 3em; --glitch-hue-1: -31deg; --glitch-x-2: 5em; --glitch-hue-2: -9deg; background-position: 0 -54em; height: 2em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 3em; --glitch-hue-1: -23deg; --glitch-x-2: -1em; --glitch-hue-2: -22deg; background-position: 0 -56em; height: 2em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -1em; --glitch-hue-1: -35deg; --glitch-x-2: -5em; --glitch-hue-2: 43deg; background-position: 0 -58em; height: 3em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: 25deg; --glitch-x-2: 1em; --glitch-hue-2: -20deg; background-position: 0 -61em; height: 1em; animation-name: glitch-7; animation-duration: 7000ms; animation-delay: 2s;"></div>
</div>

The effect involves quite a bit of HTML and CSS but no JavaScript. I did use JavaScript to generate the HTML and CSS, but it is not used in the final version.

To be clear, there's nothing wrong with using JavaScript for this kind of thing. I just saw it as a fun challenge to make a pure CSS version.

## The idea

In the words of Daft Punk:

**Slice It**<br/>
**Move It**<br/>
**Hue-Rotate It**

We'll have to slice the image into strips and randomly displace them while altering colors at the same time.

## Slice it

I wanted to use a single image without having to slice it manually.

To achieve that, we need to create a bunch of divs. Each div represents one strip and has the image set as a background, but the image is shifted vertically. When stacked on top of each other, the divs look the same as the original image. To make the glitch effect more believable, we'll use a random height for each strip.

We could do this by hand, but that would be tedious, so let's use code:


{{spoiler(
  show='Show code',
  hide='Hide code',
text='
```ts
const getStripHTML = (
  top: number,
  stripHeight: number
): string => {
  const duration = random(5, 10);
  const name = `glitch-${duration}`;

  return `
    <div
      class="strip"
      style="height: ${stripHeight}px; background-position: 0 -${top}px;"
    ></div>`;
};

const getGlitchHTML = (height: number): string[] => {
  let i = 0;
  const html: string[] = [];

  while (1) {
    const stripHeight = random(1, 6);

    if (i + stripHeight < height) {
      const strip = getStripHTML(i, stripHeight);
      html.push(strip);
    } else {
      // Last strip
      const strip = getStripHTML(i, height - i);
      html.push(strip);
      break;
    }

    i = i + stripHeight;
  }

  return html;
};
```
') }}


This gives us a list of divs with the image inside. When we render them all, we get the original image in a bunch of HTML elements we can manipulate individually.

<div class="show-strips">
  <div class="glitch glitch--show-strips">
    <div class="strip" style="background-position: 0 -0em; height: 5em;"></div>
    <div class="strip" style="background-position: 0 -5em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -8em; height: 4em;"></div>
    <div class="strip" style="background-position: 0 -12em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -15em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -18em; height: 2em;"></div>
    <div class="strip" style="background-position: 0 -20em; height: 6em;"></div>
    <div class="strip" style="background-position: 0 -26em; height: 4em;"></div>
    <div class="strip" style="background-position: 0 -30em; height: 4em;"></div>
    <div class="strip" style="background-position: 0 -34em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -37em; height: 5em;"></div>
    <div class="strip" style="background-position: 0 -42em; height: 1em;"></div>
    <div class="strip" style="background-position: 0 -43em; height: 2em;"></div>
    <div class="strip" style="background-position: 0 -45em; height: 5em;"></div>
    <div class="strip" style="background-position: 0 -50em; height: 1em;"></div>
    <div class="strip" style="background-position: 0 -51em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -54em; height: 2em;"></div>
    <div class="strip" style="background-position: 0 -56em; height: 2em;"></div>
    <div class="strip" style="background-position: 0 -58em; height: 3em;"></div>
    <div class="strip" style="background-position: 0 -61em; height: 1em;"></div>
  </div>
  <button class="toggle-gap btn btn--xs btn--empty">Toggle gap</button>
</div>

Now that we have our strips, let's try moving them around.

## Move it

CSS animations,
{{sidenote(text="interpolate values smoothly", note="I'm aware of [steps](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function#stepsinteger_step-position) timing function, but it doesn't work in this case as it takes interpolated values at each step.") }}. And a smooth animation wouldn't feel glitchy - it needs to snap between frames instead. The quick, erratic movement will help it be convincing.

### Default easing

Let's start with a simple example of a smooth animation. We'll move a div horizontally for 100 pixels, keep it there for a short time, and then move it back to the starting position.

```css
@keyframes move {
  33%,
  66% {
    transform: translateX(100px);
  }
}
```

<div class="example">
<div class="glitch">
  <div class="strip" style="background-position: 0 -0em; height: 30em;"></div>
  <div class="strip animation animation--smooth"
    style="background-position: 0 -30em; height: 8em;"></div>
  <div class="strip" style="background-position: 0 -38em; height: 38em;"></div>
</div>
<button class="btn btn--xs btn--empty">Play</button>
<div class="animation-monorail"></div>
</div>

<small>Try dragging the timeline, {{ sidenote(text="all graphs are interactive.", note="Instead of making a few static images, I got sidetracked, and wrote a whole library that generates these interactive SVG timelines. I named it *Monorail*, and plan to release it soon.") }}</small>

This kind of works, but it is not the intended effect. To achieve instant movement, we need to add more keyframes. The closer the keyframes are to each other, the snappier the movement will be. If we put them really close, the movement will be super short - shorter than it takes to render a single frame. This will give us the sudden movement we are after using only CSS.

Let's try doing that.

### Super short keyframes

Now we'll add keyframes really close to the ones from the previous example. Notice how it created the almost vertical jump between two states, compared to the smooth line we had before. The line will never be truly vertical, but if the keyframes are really close, the movement will happen in a single frame, achieving our desired effect.

```css
@keyframes move {
  0%,
  32.9%,
  66.1%,
  100% {
    transform: translateX(0);
  }
  33%,
  66% {
    transform: translateX(100px);
  }
}
```

<div class="example">
<div class="glitch">
  <div class="strip" style="background-position: 0 -0em; height: 30em;"></div>
  <div class="strip animation animation--quick"
    style="background-position: 0 -30em; height: 8em;"></div>
  <div class="strip" style="background-position: 0 -38em; height: 38em;"></div>
</div>
<button class="btn btn--xs btn--empty">Play</button>
<div class="animation-monorail"></div>
</div>

<small>Again, try playing with the timeline to see how the animation has changed.</small>

One thing to keep in mind: keyframes are defined in percentage values, so their duration depends on the total animation duration. If we define a keyframe of 0.1% and the animation lasts for 5 seconds, the keyframe is going to last for 5 milliseconds. That is shorter than even a 120fps refresh rate, so I think we are pretty safe. Even if the movement lasts for a few frames, our eyes can't really notice it (at least mine can't).

Now let's mess up some colors.

## Hue-rotate it

If you imagine the color wheel, hue-rotation shifts all the colors by the same amount. Applying a random value creates a distorted look. My plan was to combine this effect with movement to make the distortion feel even stronger.

Implementing it was supposed to be the easiest part. Add [hue-rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) to the animation and call it a day. But alas, in Safari, property worked on its own, but not when animated. I'll spare you the details of everything I tried, but finally I found that changing the initial state from `none` to `hue-rotate(0)` instead of `none` solved the issue.

This works:

```css
@keyframes hue {
  0%,
  5% {
    filter: hue-rotate(0);
  }

  10% {
    filter: hue-rotate(20deg);
  }
}
```

And this doesn't:

```css
@keyframes hue {
  0%,
  5% {
    filter: none;
  }

  10% {
    filter: hue-rotate(20deg);
  }
}
```

Once I solved it, I didn't bother to dig deeper. I've seen people get angry about browser issues, but honestly, I don't blame Safari developers. Imagine building and maintaining a browser - it is like an operating system inside of an operating system. A bug like this slipping through the cracks is completely understandable.

Anyway, back to our glitch effect - let's try to combine transform and filter in a single animation.

## Stripe animation

Now we need to apply everything we learned to our strips. I decided to have two jumps for each strip, along with the hue-rotate effect. Let's see how a single strip looks like fully animated.

<div class="example">
<div class="glitch">
  <div class="strip" style="background-position: 0 -0em; height: 30em;"></div>
  <div class="strip animation animation--both"
    style="background-position: 0 -30em; height: 8em;"></div>
  <div class="strip" style="background-position: 0 -38em; height: 38em;"></div>
</div>
<button class="btn btn--xs btn--empty">Play</button>
<div class="animation-monorail"></div>
</div>

Now to add some randomness, otherwise the effect will be too predictable and boring.

## Randomness


CSS doesn't support random values on its own. To introduce randomness into our glitch effect, we'll use JavaScript to generate multiple variations of the CSS keyframes animations.

Here's how it works:

* We use JavaScript to generate several animations, each using different keyframe values, but using the same CSS variables (`--glitch-x-1`, `--glitch-x-2`, `--glitch-hue-1` and `--glitch-hue-2`).
* When we generate strips HTML, we randomly assign values to these CSS variables, as well as animation properties (like duration and delay)

This combination of dynamically generated animations, CSS variables and inline styles gives each strip a unique glitch animation, resulting in the randomized effect we were aiming for.

For example, one of the generated CSS animations will look like this:

```css
@keyframes glitch-5 {
  0.00%,
  33.33%,
  43.33%,
  66.67%,
  76.67%,
  100.00% {
    transform: none;
    filter: hue-rotate(0);
  }

  33.43%,
  43.23% {
    transform: translateX(var(--glitch-x-1));
    filter: hue-rotate(var(--glitch-hue-1)) drop-shadow(2px 3px 0 rgb(0 0 255 / 0.1));
  }

  66.77%,
  76.57% {
    transform: translateX(var(--glitch-x-2));
    filter: hue-rotate(var(--glitch-hue-2)) drop-shadow(-3px 0px 0 rgb(0 0 255 / 0.1));
  }
}
```

And after generating random values and inlining them, this is how HTML for a single strip looks like:

```html
<div
  class="strip"
  style="
    --glitch-x-1: 10px;
    --glitch-hue-1: 16deg;
    --glitch-x-2: -24px;
    --glitch-hue-2: -18deg;

    background-position: 0 -14px;
    height: 8px;
    animation-name: glitch-9;
    animation-duration: 9000ms;
    animation-delay: 2s;
  "
></div>
```

Once HTML and CSS code is generated, we can use it on its own, without any JavaScript.

## Chromatic aberration

You might have noticed that in the final version, I sneaked in subtle blue and red shadows to give impression of color separation, like on a corrupted screen. I had no idea what this effect was called, but a friend who proofread this post said:

> You can add something about [chromatic aberration](https://en.wikipedia.org/wiki/Chromatic_aberration).

Well, if you want to learn more about it, now you know what to search for.

## There you have it

Is this the best glitch effect you've seen? Probably not. But it is mine, and it  runs entirely on CSS, no JavaScript at all. Another cool thing is that this effect works on any content, not just images. As long as you prepare your styles correctly, you can use it on any HTML content.

You can see the code and play with the final version [on CodePen](https://codepen.io/stanko/pen/emYEpvP).


<div class="glitch">
<div class="strip" style="--glitch-x-1: -7em; --glitch-hue-1: 41deg; --glitch-x-2: 7em; --glitch-hue-2: 20deg; background-position: 0 -0em; height: 5em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 8em; --glitch-hue-1: 25deg; --glitch-x-2: -3em; --glitch-hue-2: 6deg; background-position: 0 -5em; height: 3em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: -14deg; --glitch-x-2: 6em; --glitch-hue-2: -34deg; background-position: 0 -8em; height: 4em; animation-name: glitch-6; animation-duration: 6000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: -27deg; --glitch-x-2: 9em; --glitch-hue-2: 48deg; background-position: 0 -12em; height: 3em; animation-name: glitch-7; animation-duration: 7000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 7em; --glitch-hue-1: 9deg; --glitch-x-2: 2em; --glitch-hue-2: -20deg; background-position: 0 -15em; height: 3em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -7em; --glitch-hue-1: -11deg; --glitch-x-2: 3em; --glitch-hue-2: 39deg; background-position: 0 -18em; height: 2em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: 25deg; --glitch-x-2: 10em; --glitch-hue-2: 44deg; background-position: 0 -20em; height: 6em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: 48deg; --glitch-x-2: 0em; --glitch-hue-2: -47deg; background-position: 0 -26em; height: 4em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: -4em; --glitch-hue-1: 20deg; --glitch-x-2: -2em; --glitch-hue-2: -40deg; background-position: 0 -30em; height: 4em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -5em; --glitch-hue-1: 12deg; --glitch-x-2: -9em; --glitch-hue-2: 44deg; background-position: 0 -34em; height: 3em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: -3em; --glitch-hue-1: -15deg; --glitch-x-2: -9em; --glitch-hue-2: -12deg; background-position: 0 -37em; height: 5em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: 2em; --glitch-hue-1: -33deg; --glitch-x-2: 2em; --glitch-hue-2: -33deg; background-position: 0 -42em; height: 1em; animation-name: glitch-5; animation-duration: 5000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 1em; --glitch-hue-1: -28deg; --glitch-x-2: 2em; --glitch-hue-2: -42deg; background-position: 0 -43em; height: 2em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: -6em; --glitch-hue-1: 12deg; --glitch-x-2: 9em; --glitch-hue-2: 44deg; background-position: 0 -45em; height: 5em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 0s;"></div>
<div class="strip" style="--glitch-x-1: 5em; --glitch-hue-1: -37deg; --glitch-x-2: -8em; --glitch-hue-2: 25deg; background-position: 0 -50em; height: 1em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 7em; --glitch-hue-1: -24deg; --glitch-x-2: -2em; --glitch-hue-2: -11deg; background-position: 0 -51em; height: 3em; animation-name: glitch-8; animation-duration: 8000ms; animation-delay: 2s;"></div>
<div class="strip" style="--glitch-x-1: 3em; --glitch-hue-1: -31deg; --glitch-x-2: 5em; --glitch-hue-2: -9deg; background-position: 0 -54em; height: 2em; animation-name: glitch-10; animation-duration: 10000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 3em; --glitch-hue-1: -23deg; --glitch-x-2: -1em; --glitch-hue-2: -22deg; background-position: 0 -56em; height: 2em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: -1em; --glitch-hue-1: -35deg; --glitch-x-2: -5em; --glitch-hue-2: 43deg; background-position: 0 -58em; height: 3em; animation-name: glitch-9; animation-duration: 9000ms; animation-delay: 1s;"></div>
<div class="strip" style="--glitch-x-1: 4em; --glitch-hue-1: 25deg; --glitch-x-2: 1em; --glitch-hue-2: -20deg; background-position: 0 -61em; height: 1em; animation-name: glitch-7; animation-duration: 7000ms; animation-delay: 2s;"></div>
</div>


If you end up using this effect or the discrete animation hack, please let me know - I'd love to see it in action.

And before you go, here are other two examples of glitching effects I found to be particularly interesting:

* [Cyberpunk-Style Glitch Walkthrough](https://codepen.io/mattgrosswork/pen/VwprebG)
* [Glitch Clock](https://codepen.io/fearOfCode/pen/PoMyKQ)

Thank you for reading and happy glitching!



<script src="/js/posts/glitch/index.js" type="module"></script>


