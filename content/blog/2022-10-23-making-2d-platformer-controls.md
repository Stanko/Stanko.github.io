+++
title = "Making <span>2D platformer controls</span>"

draft = true

[taxonomies]
category = ["JavaScript"]
tags = ["js", "games", "animation", "2d", "platform", "controls"]

[extra]
intro = "Me trying to create 2D platform game controls from scratch."
image = "/img/2d-controls/cover.png"

+++

This is something I have written couple of months ago, expecting it to be a part of the series about making a 2D platformer. Unfortunately, I lost the motivation and never made a game, so the series never happened. But I found this draft, polished it a little bit and decided to publish it in the end.

## Summary

It started with [code challenges](/blog/weekly-code-challenge-spring-2021/) we have been doing in our office. One specific challenge was to make a game. Any game you want, in any technology you want.

Because I'm a big sucker for 2D platformers, I decided to make one completely from scratch. Game was never finished, but I ended up with a elementary implementation of 2D platforming controls.

Here is the demo of it:

{{ codepen(
  id="XWYrXvJ",
  title="Example of customizing webkit scrollbars using CSS",
  height=400
  htmlId="demo"
) }}


I feel like I have to add a disclaimer here - I have never built a real game myself. That's exactly why I decided to implement everything from scratch. Doing it that way, I'll have to go through the whole process. While this is a great way for me to learn, I may reinvent the wheel here and there, or do things in a non-standard way.

Here is a short list of topics we are going to cover in this post:

* Animation loop {{ sidenote(
  text="(aka game loop)"
  note="Don't get confused, as I keep using both of these terms interchangeably."
)}}
* Registering keyboard input
* Player movement on `x` axis
* Jumping
* Simple render method
* Movement trail (for debugging)

## Animation loop

First, we'll need an animation loop. I already covered it [in this post](/blog/javascript-animation-loop/), so I won't repeat myself, I'll just reuse that code.

Starting code looks like this. We need to implement two things missing - game state updates and rendering.

```tsx
// ----- Game loop
const FRAME_DURATION: number = 1000 / 60;

let lastUpdate: number = performance.now();

function gameLoop() {
  const now = performance.now();
  const delta = (now - lastUpdate) / FRAME_DURATION;

  // TODO Update game state

  // TODO Render

  // Update time
  lastUpdate = now;

  // Next frame
  requestAnimationFrame(gameLoop);
}

gameLoop();
```

Let's start updating our game state, by reacting to keyboard input.

## Keyboard input

// ------- TODO
Because we have a running animation loop, just listening to the `keydown` event doesn't really work.
it is not enough to listen `keydown` event. We need to create a simple data structure that will tell us which keys are pressed in each frame. It is a simple object, with keyboard key name as object keys and a boolean value. If it is true, key is pressed.

To maintain this state, we just need to set key's value to true on `keydown` and remove it's value on `keyup`.


```tsx
// ----- Keyboard input
const activeKeys: Record<string, boolean> = {};

window.addEventListener('keydown', (e) => {
  activeKeys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  delete activeKeys[e.key];
});
```

Now when we have our `activeKeys`, we can use them in our animation loop. To make sure I'm not making any typos when typing key names, I created a simple enum:

{{spoiler(text="
```tsx
const keys = {
  SPACE: ' ',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};
```
", show="Show enum", hide="Hide enum" )}}


## Game state

The bare minimum we need is player's position and velocity. Both of these values are two dimensional vectors.

```tsx
// ----- Types

type Vector = {
  x: number;
  y: number;
};

// ----- Game state

const velocity: Vector = {
  x: 0,
  y: 0,
};

const position: Vector = {
  x: 0,
  y: 0,
};
```

In order to move the player, we'll increase the velocity and add the velocity to it's current position. Let's define some constants for the maximum speed, acceleration and deceleration of the player.

```tsx
const acceleration: number = 1;
const deceleration: number = 2;
const maxSpeed: number = 5;
```

One of the aspects of the tight controls is high acceleration and speed, which gives the player the feeling of control, and makes the character more acrobatic and agile. Later on, we can spend some time to tweak these values.

I suggest you check [Mark Brown's video](https://www.youtube.com/watch?v=yorTG9at90g) on Celeste's controls, where he breaks down what it means for a game to have tight controls.

## Render

I know it is tempting, but let's keep things super simple at the start. For now, we'll just show the game state's values directly in HTML. A single `pre` element:

```html
<pre class="status"></pre>
```

Which we can update in the newly created render method:

```tsx
const statusElement = document.querySelector('.status') as HTMLPreElement;

function render() {
  // status
  statusElement.innerHTML = `position: ${JSON.stringify(position)}\n`;
  statusElement.innerHTML += `velocity: ${JSON.stringify(velocity)}`;
}
```

At the moment, nothing changes, but it will, as soon as we implement player movement.

## Update player's (horizontal) position

Now, let's use keyboard input to move our player. Again, we'll start simple and focus on horizontal movement only. It is a straightforward task, but there is a few things we need to care about:

* Player should accelerate only when left or right arrow is pressed.
* Velocity should be capped at defined maximum speed.
* When player is moving in one direction and key is not pressed anymore (or both arrows are pressed), it should decelerate and stop.
* When an arrow is pressed and player is already moving in the opposite direction, player should decelerate and start accelerating in the direction of the pressed arrow.

I'll create `updateHorizontalMovement` function and call it in the game loop. Param `delta` tells us how many frames have passed since the last update. If you are not sure what this means, please check [my animation loop post](/blog/javascript-animation-loop/).

I think code with comments will be clearer than me describing every little case we have to cover. Hope I'm right.

```tsx
function updateHorizontalMovement(delta: number) {
  const isLeftPressed = activeKeys[keys.LEFT];
  const isRightPressed = activeKeys[keys.RIGHT];

  const isExclusivelyLeft = isLeftPressed && !isRightPressed;
  const isExclusivelyRight = isRightPressed && !isLeftPressed;

  const isMovingRight = velocity.x > 0;
  const isMovingLeft = velocity.x < 0;

  if (isExclusivelyLeft) {
    // Only left arrow is pressed
    if (isMovingRight) {
      // Slow down if player is already moving right
      velocity.x -= deceleration * delta;
    } else {
      // If not, accelerate to the left
      velocity.x -= acceleration * delta;
    }
  } else if (isExclusivelyRight) {
    // Only right arrow is pressed
    if (isMovingLeft) {
      // Slow down if player is already moving left
      velocity.x += deceleration * delta;
    } else {
      // If not, accelerate to the right
      velocity.x += acceleration * delta;
    }
  } else {
    // Either both or no horizontal arrows are pressed
    // Decelerate to the stop

    if (isMovingRight) {
      // Player is moving right, decelerate
      velocity.x -= deceleration * delta;

      // When velocity starts going in the opposite direction, stop the player
      if (velocity.x < 0) {
        velocity.x = 0;
      }
    } else if (isMovingLeft) {
      // Player is moving left, decelerate
      velocity.x += deceleration * delta;

      // When velocity starts going in the opposite direction, stop the player
      if (velocity.x > 0) {
        velocity.x = 0;
      }
    }
  }

  // Cap at maximum speed
  if (velocity.x > maxSpeed) {
    velocity.x = maxSpeed;
  } else if (velocity.x < -maxSpeed) {
    velocity.x = -maxSpeed;
  }

  // Update player's position using new velocity value
  position.x += velocity.x * delta;
}
```

Now we have a small system for updating player's position and velocity. After adding it to the game loop, you should see our render method updating, something like this:

{{ image(
  src="/img/2d-controls/game-state.gif",
  alt="",
  size="xs"
) }}

## Render, again

While we should probably be using canvas, for now we'll keep things simple. Instead of introducing canvas at this point, let's just use a simple div element and CSS transforms.

Basic setup:

```html
<div class="game">
  <div class="player"></div>
</div>
```

```css
.game {
  height: 120px;
  position: relative;
}

.player {
  position: absolute;
  width: 20px;
  height: 30px;
  background: #3171f6;
  /* move our blocky player to the coordinate's system origin */
  bottom: 0;
  left: -10px;
}
```

And updated render method.

```tsx
// Render
const statusElement = document.querySelector('.status') as HTMLPreElement;
const playerElement = document.querySelector('.player') as HTMLDivElement;

function render() {
  // status
  statusElement.innerHTML = `position: ${JSON.stringify(position)}\n`;
  statusElement.innerHTML += `velocity: ${JSON.stringify(velocity)}`;

  // player
  playerElement.style.transform = `translate(${position.x}px, ${-position.y}px)`;
}
```

Note that I'm using a negative value for `y` axis, as in CSS `y` value increases downwards.

## Movement trail

// ------------ TODO
For easier debugging and figuring out what is going on, let's add a movement trail. We can save and render the history of player's positions and color code them. Horizontal acceleration is green and deceleration red. Trail immediately helped me to catch a few minor bugs I had with acceleration when player is already moving in the opposite direction.

I don't think the code is crucial or interesting, so I won't go through it in details, but you can check it below and on [CodePen](https://codepen.io/stanko/pen/XWYrXvJ?editors=0100).

{{spoiler(text="
```tsx
function updateTrail() {
  const last = trail[trail.length - 1];

  const hasMoved =
    position.x !== last?.position.x || position.y !== last?.position.y;

  if (hasMoved) {
    trail.push({
      color: trailColor,
      position: {
        ...position,
      },
    });

    if (trail.length > trailMaxLength) {
      trail.shift();
    }

    // For performance, trail is only rendered when it is changed
    renderTrail();
  }
}

const trailElement = document.querySelector('.trail') as HTMLDivElement;

function renderTrail() {
  let trailHTML: string = '';

  for (let i = 0; i < trail.length; i++) {
    const point = trail[i];
    const { x, y } = point.position;

    trailHTML += `<div
      class='trail-point'
      style='background: ${point.color}; transform: translate(${x}px, ${-y}px);'
    />`;
  }

  trailElement.innerHTML = trailHTML;
}
```
", show="Show trail related code", hide="Hide trail related code")}}

## Jumping

// ---------- TODO

// TODO ---------- Color code trail for vertical velocity

## What's next

There is still a lot to be done, but this is it for now.

We are already stretching what HTML should do, so the first thing would be to start rendering on canvas instead. Then we could continue to add more stuff like platforms, collisions, wall jumps, dash... Alas, like I mentioned at the start, I won't be covering anything more in this post.

