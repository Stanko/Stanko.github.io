+++
title = "Using <span>CSS animations</span> instead of JavaScript timers"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "css", "animation", "timer", "timeout"]

[extra]
intro = "Allow me to show you how to leverage CSS animations to create timers."
image = "/img/css-animations-as-timers.png"
+++

<link rel="stylesheet" href="/posts/css-timers.css" />

What if I told you that we can make a timer without using `setTimeout`, `setInterval` or `requestAnimationFrame`? JavaScript is still necessary, but we can create the timer just by toggling some CSS classes.


While I was working on an autoplay feature for a carousel, I thought to  myself - CSS animations are kinda like timers. They have [animationstart](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event) and [animationend](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event) events and an ability to pause them. On top of that, we get [the animation loop](/blog/javascript-animation-loop/) for free, which we would have to implement manually in JavaScript.

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

We'll **start** a timer by adding a `.timer--running` class. In the case that we are **restarting** it, we also need to remove the `.timer--done` class.

```js
// Start the timer
$timer.classList.add('timer--running'); // $timer is a reference to the timer's DOM element
$timer.classList.remove('timer--done');
```

To **pause** it we'll add `.timer--paused` class. **Resume** it by removing the class.

```js
// Toggle the pause class
$timer.classList.toggle('timer--pause');
```

Once `animationend` event is triggered, we know the animation is **done**, so we need to add `.timer--done` and to remove `.timer--running` class.

```js
// Update classes so the timer can be restarted
$timer.classList.add('timer--done');
$timer.classList.remove('timer--running');
```

When we put it all together, we get a minimal working example:

<div class="timer-demo">
  <div class="timer-wrapper timer-wrapper--linear">
    <div class="timer timer--linear"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

Code is also available on [CodePen](https://codepen.io/stanko/pen/rNoaBMo) for you to play with.

This timer works similarly to `setTimeout`, but it comes with it's own animation loop and an easy way to pause it.

### animationiteration

To get a behavior similar to `setInterval` we are going to switch to [animationiteration](https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event) instead of `animationend`.

For this demo, we'll change our CSS to create a small stopwatch:

<div class="timer-demo red">
  <div class="timer-wrapper timer-wrapper--radial">
    <div class="timer timer--radial"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

Again, code is available on [CodePen](https://codepen.io/stanko/pen/MWZYgpP).

## Chaining

If we need multiple timers, we can chain them. When a timer finishes, we need to trigger the next one:

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

The mandatory demo on [CodePen](https://codepen.io/stanko/pen/poqvzXY).

## Autoplaying carousel

The example above looks like a pagination for an autoplaying carousel, but we still need to add a way to jump to a certain timer/slide.

The main thing is that once we jump to a timer, we need to make sure that all of the previous timers in the pagination are set to the end state, while the next timers are set to the init state.

Once we do that, we get an autoplaying carousel:

{{ codepen(
  id="dyQrOeB",
  title="Autoplay carousel using CSS animations",
  height=370
) }}

This CodePen was my initial playground, so it may contain some leftovers and it might not be the cleanest code you have ever read. Sorry for that. I hope it is still fairly easy to follow.

## Limitations

It wasn't necessary for the carousel example, but the main limitation is the inability to precisely track the timer's progress.

In situations when we need the timers's progress, we can track it using [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). This API allows us to create and control animations in JavaScript. And it has a [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime) property for tracking animation progress.

But please be aware that some older browsers do not support Web Animations API. For example, Safari added support in 2020, so if you need to support older browsers using animations with CSS classes might be better as they are supported since IE10.


## Conclusion

There you have it, timers using CSS animations.

CSS animations weren't made for this use case, but if you ask me, it is a great little hack and for certain problems they offer a very elegant solution.

## Bonus, animation steps

We can even use `animation-timing-function: steps(n)` to add discrete steps to our timer:

<div class="timer-demo purple">
  <div class="timer-wrapper timer-wrapper--linear">
    <div class="timer timer--linear timer--steps"></div>
  </div>

  <button class="btn btn--sm btn--main timer-toggle">Start / stop</button>

  <p class="timer-log small"></p>
</div>

<script src="/js/posts/css-timers.js"></script>
