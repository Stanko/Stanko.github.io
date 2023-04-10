+++
title = "JavaScript animation loop"
aliases = ["/javascript-animation-loop/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "games", "animation"]

[extra]

+++

I've been really busy lately, doing both work and pet projects.
At the moment I'm playing with [three.js](https://threejs.org/) trying to
[clone old DOS game](https://codepen.io/stanko/full/jZROmX/) to JavaScript.
Games (and animations in general) need animation loop in which we are going to update the scene and re-render it.

Example animations are simplified and they just move a box 60px per second.
But the concepts applied are universal and can be used for more complicated real life cases.

<!-- more -->

## Timing problem

We all know that animating should be done using `requestAnimationFrame`.
My first attempt ended up being naive and it looked something like this:

```js
const box = document.querySelector('.Box');
// Initial position
let position = 0;

function animate() {
  // Updating scene logic
  // moving box for one pixel per frame
  // "requestAnimationFrame" is optimized for 60fps
  // so we should get smooth movement of 60px per second
  position += 1;

  // Render updated scene
  box.style.transform = `translateX(${ position }px)`;

  // Start next frame
  requestAnimationFrame(animate);
}

// Start animation
animate();
```

{{ codepen(
  id="GxjLmE",
  title="JavaScript animation loop - step 1",
  height=280
) }}


At the first glance this looks fine. But it has one major problem.
`requestAnimationFrame` is usually triggered 60 times per second, but often this is not the case.
For example, the most browsers will pause it if tab goes to background.
Busy (or low-end) CPU will also slow it down.

Imagine for some reason that is does get triggered only
{{ sidenote(text="
10 times per second.
", note="
In the example bellow I faked it by using 100ms `setTimeout`.
") }}
In that case our box will be moved by 1px every 100ms, ending up on 10px per second.

{{ codepen(
  id="ZxpZyZ",
  title="JavaScript animation loop - step 2",
  height=280
) }}

This means our animation speed is relative to how many times `requestAnimationFrame` is called per second.

That is the big timing problem we are trying to solve.
Our animation should calculate the right position based on time passed,
rather then just incrementing it by 1px each update.

## Delta time to the rescue

Now we know what to do - adjust the position based on time passed between two updates.
Every time we are doing the update, we are going to calculate how much time has passed
since the last update.

To get movement of 60px per second, we need to move our box by 1px every ~16.66ms
(single frame duration for 60fps).
Number of frames passed is calculated by dividing delta time by a frame duration.

If we apply it to the previous 100ms (10fps) example, we'll get delta time of 100ms.
Dividing it by 16.66 gives us delta frame of 6 (100ms / 16.66ms),
meaning that 6 frames has passed since we last updated the scene.

Only thing left to do is to adjust the position of our box,
by multiplying 1px by delta frame.
This will give us movement of 6px per 100ms,
which is the exactly what we are trying to achieve (60px per second).

```js
const FRAME_DURATION = 1000 / 60; // 60fps frame duration ~16.66ms
// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;

const box = document.querySelector('.Box');
// Initial position
let position = 0;
// Initial time
let lastUpdate = getTime();

function animate() {
  const now = getTime();
  // This is the main part
  // We are checking how much time has passed since the last update
  // and translating that to frames
  const delta = (now - lastUpdate) / FRAME_DURATION;

  // Updating scene logic
  // We want to move the box 1px per each 16.66ms (60fps)
  // so we are multipling 1px with the number of frames passed
  position += 1 * delta;

  // Render updated scene
  box.style.transform = `translateX(${ position }px)`;

  // Update last updated time
  lastUpdate = now;

  // Fake 10fps using "setTimeout"
  setTimeout(animate, 100);
}

animate();
```

{{ codepen(
  id="zWKXRY",
  title="JavaScript animation loop - step 3",
  height=280
) }}

We fixed the timing problem, and our box is moving 60px per second.
Now we can put back `requestAnimationFrame` instead of `setTimeout`,
and we will get smooth animation without timing problems.

Check all examples side by side comparison:

{{ codepen(
  id="pLEYEw",
  title="JavaScript animation loop - step 4 (all examples combined)",
  height=500
) }}

Hopefully you learned something reading this.
I'm going to write more posts about three.js and JavaScript game development.
