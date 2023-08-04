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

I came up with this idea when I was working on an autoplay feature for a carousel. I thought to  muself - CSS animations are kinda like timers - they have [animationstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event) and [animationend](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event) events and we can pause them. On top of that, we get interpolation and animation for free, which we would have to do manually in JavaScript.

## Minimal example

<div class="timer-demo">
  <div class="timer timer--linear">
    <div class="timer-progress"></div>
  </div>

  <button class="btn btn--sm btn--main timer-start-stop">Start / stop</button>

  <p class="timer-log small"></p>
</div>

```js
// HTML elements (with old school $ prefix)
const $timer = document.querySelector(".timer");
const $startStop = document.querySelector(".timer-start-stop");
const $log = document.querySelector(".timer-log");

const classNames = {
  RUNNING: "timer--running", // Adds animation
  PAUSED: "timer--paused", // Pauses animation
  DONE: "timer--done", // Sets timer to the end
};

$startStop.addEventListener("click", () => {
  if ($timer.classList.contains(classNames.RUNNING)) {
    // Already in the running state, toggle pause class
    $timer.classList.toggle(classNames.PAUSED);
  } else {
    // Start the timer
    $timer.classList.add(classNames.RUNNING);
  }
});

$timer.addEventListener("animationend", () => {
  // Update classes so the timer can be restarted
  $timer.classList.add(classNames.DONE);
  $timer.classList.remove(classNames.RUNNING);

  $log.innerHTML += `Timer finished: ${new Date().toLocaleTimeString()}<br/>`;
});
```

<div class="timer-demo red">
  <div class="timer timer--radial">
    <div class="timer-progress"></div>
  </div>

  <button class="btn btn--sm btn--main timer-start-stop">Start / stop</button>

  <p class="timer-log small"></p>
</div>

## TODO

- steps(10)


## Limitations

- ne moze da se dobije progres dokle je stigla animacija




<script src="/js/posts/css-timers.js"></script>

