+++
title = "Using <span>CSS animations</span> instead of JavaScript timers"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "css", "animation", "timer", "timeout"]

[extra]
intro = ""
# image = "/img/css-animations-as-timers.png"
# TODO remove
draft = true

+++

<link rel="stylesheet" href="/posts/css-timers.css" />

What if I told you that we can make a timer without using `setTimeout`, `setInterval` or `requestAnimationFrame`? Well, we'll still need JavaScript, but we can do it by just toggling some CSS classes.

I came up with this idea when I was working on an autoplay feature for a carousel. I thought to  myself - CSS animations are kinda like timers - they have [animationstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event) and [animationend](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event) events and an ability to pause them. On top of that, we get [the animation loop](/blog/javascript-animation-loop/) for free, which we would have to do manually in JavaScript.

## Implementation

To make the timer, we'll need {{ sidenote(
  text="four CSS classes",
  note="Please note that we could create a minimal example with only two classes (`.timer` and `.timer--running`), but it is pretty limiting and therefore we are going to skip it."
)}}:

* `.timer` - initial styles
* `.timer--running` - starts the animation
* `.timer--paused` - pauses the animation (can only be used in combination with `.timer--running`)
* `.timer--done` - final state of the animation

----

We'll **start** a timer by adding `.timer--running` class. In the case that we are **restarting** it, we also need to remove `.timer--done` class.

```js
// Start the timer
$timer.classList.add('timer--running');
$timer.classList.remove('timer--done');
```

To **pause** it we'll add `.timer--paused` class. **Resume** it by removing the class.

```js
// Toggle the pause class
$timer.classList.toggle('timer--pause');
```

Once animation is **done**, we need to add `.timer--done` and to remove `.timer--running` class.

```js
// Update classes so the timer can be restarted
$timer.classList.add(classNames.DONE);
$timer.classList.remove(classNames.RUNNING);
```

When we put it all together, we get a minimal working example (play with it on [CodePen](TODO CODEPEN)):

<div class="timer-demo">
  <div class="timer-wrapper timer-wrapper--linear">
    <div class="timer timer--linear"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

This timer works similarly to `setTimeout`, but it comes with it's own animation loop and we can even pause it.

### animationiteration

To get a behavior similar to `setInterval` we just need to use [animationiteration](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event) instead of `animationiteration`. Again, it comes with the animation loop and ability to pause it.

For this demo, we'll create a small stopwatch (play with it on [CodePen](TODO CODEPEN)):

<div class="timer-demo red">
  <div class="timer-wrapper timer-wrapper--radial">
    <div class="timer timer--radial"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>


## Chaining

<div class="timer-chaining-demo">
  <div class="timer-chaining-demo-timers">
    <div class="timer-wrapper timer-wrapper--linear">
      <div class="timer timer--linear timer--short"></div>
    </div>
    <div class="timer-wrapper timer-wrapper--linear">
      <div class="timer timer--linear timer--short"></div>
    </div>
    <div class="timer-wrapper timer-wrapper--linear">
      <div class="timer timer--linear timer--short"></div>
    </div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

### Siblings

## TODO

- steps(10)

<div class="timer-demo purple">
  <div class="timer-wrapper timer-wrapper--linear">
    <div class="timer timer--linear timer--steps"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

## Animation API

## Limitations

- ne moze da se dobije progres dokle je stigla animacija




<script src="/js/posts/css-timers.js"></script>


<!--
{{spoiler(text='
```js
// HTML elements (with old school $ prefix)
const $timer = document.querySelector(".timer");
const $toggle = document.querySelector(".timer-toggle");
const $log = document.querySelector(".timer-log");

const classNames = {
  RUNNING: "timer--running", // Adds animation
  PAUSED: "timer--paused", // Pauses animation
  DONE: "timer--done", // Sets timer to the end
};

$toggle.addEventListener("click", () => {
  if ($timer.classList.contains(classNames.RUNNING)) {
    // Already in the running state, toggle pause class
    $timer.classList.toggle(classNames.PAUSED);
  } else {
    // Start the timer
    $timer.classList.add(classNames.RUNNING);
    $timer.classList.remove(classNames.DONE);
  }
});

$timer.addEventListener("animationend", () => {
  // Update classes so the timer can be restarted
  $timer.classList.add(classNames.DONE);
  $timer.classList.remove(classNames.RUNNING);

  // Do something when timer is finished
  $log.innerHTML += `Timer finished: ${new Date().toLocaleTimeString()}<br/>`;
});
```
', show="Show code", hide="Hide code" )}}
-->
