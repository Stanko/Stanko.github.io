---
layout: post
title: Animate React component by calling 'setState' in 'componentDidMount'
category: [React]
tags: [react]
---

On the frontend, we do a lot of animations. Most of the simple animations I create by using CSS transitions.
Either I will change class or inline style of the element, and define transitions in CSS file.

Easiest way to do this in React is to render initial state, and then when it renders, change the state to apply class or style to animate. The easiest way to do it in React is to change state in `componentDidMount`.
Setting state in `componentDidMount` is considered to be anti-pattern, as it forces rerender and can lead to property/layout thrashing. But in our case, that is exactly what we want to do.

When we do that, we hit the wall - only second state is rendered and there is no transition between two states. It happens because of browsers optimization - **browsers are not rerendering stuff that changed in the same animation frame.** But they merge changes and render the end result.

The problem I just described is not React exclusive, but browser related.
Same will happen if we try something like this:

```javascript
const element = document.querySelector('.AnimateMe');
element.style.height = '50px';
element.style.height = '250px';
```

So let's start with example of the problem.

<!--more-->

## Animate component by changing state in `componentDidMount` doesn't work

The scenario I described above. Element height depends on `this.state.animation` property.
It is initially set to `false` and element height should be 50px.
In `componentDidMount` we'll change the value of `this.props.animation` to `true`
and element height should be 250px. As we added transition, it should animate.

But it doesn't as all of this happens really fast, and browser decides to merge changes
and render only the end result. This way our element immediately gets height of 250px.

```javascript
import React, { Component } from 'react';

export default class AnimateMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    this.setState({ animate: true });
  }

  render() {
    return (
      <div
        style={ {
          background: '#eee',
          border: '1px solid black',
          height: this.state.animate ? 250 : 50,
          margin: 20,
          padding: 20,
          transition: 'all 2s',
        } }
      >
        Animate my height
      </div>
    );
  }
}
```

<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/XgaNyq/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/XgaNyq/'>Rerender React component in componentDidMount - Step 1</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## Solution, add a short timeout

I've run multiple times into this problem, but I was lazy to dig deeper and find the real reason why it is happening. My solution was to add a timeout, first I tried immediate timeout (`setTimeout(fn, 0)`), but alas, it didn't work in some browsers (as it happened too fast again and browser did their optimizations). Then I increased it to the magical value 50 (`setTimeout(fn, 50)`), and it worked in every browser.

Now I get the reason why it works. Because 50ms is larger than animation frame (which is around 16ms to achieve 60fps).

<span class="Small">(I'll show you just the part of the code that is changed)</span>
```javascript
...
  componentDidMount() {
    // Added timeout
    const ANIMATION_TIMEOUT = 50;

    this.setTimeout(() => {
      this.setState({ animate: true });
    }, ANIMATION_TIMEOUT);
  }
...
```

<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/WOERrE/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/WOERrE/'>Rerender React component in componentDidMount - Step 2</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

So this is cross browser solution, but I always cringe a little when I'm forced to use timeouts like this. And I have been talking about animation frames a lot, so why don't we try that next?

## Using `requestAnimationFrame` instead on timeout

We'll just replace timeout with `requestAnimationFrame` and it should work.
But not in Firefox :( to make things worse, sometimes it does, and sometimes doesn't.
My guess that sometimes it gets squeezed in to the same animation frame.

### Update, October 2017

Hooray! Firefox fixed this one, in newer versions it works without two nested `requestAnimationFrame`.
But you might want to stick with it for some time, to make sure all of your users upgraded their browsers.

<span class="Small">(Again just the part of the code that is changed)</span>
```javascript
...
  componentDidMount() {
    // Added requestAnimationFrame
    requestAnimationFrame(() => {
      this.setState({ animate: true });
    });
  }
...
```

<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/JJyEoz/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/JJyEoz/'>Rerender React component in componentDidMount - Step 3</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

So now we need to make sure our two states belong to different animation frames each.

## Nested `requestAnimationFrame` to the rescue

Idea is to separate renders of two states to different animation frames.
As we are not going to wrap React's `render` method into animation frame,
we need to nest them instead in `componentDidMount`.

This way we guarantee first render won't be merged together with the second one.
Problem we had in Firefox is now gone.

This looks hacky, but I think it is a legit solution. Instead of trying to get a *magic*
value for timeout, just use native methods that browsers provide.

<span class="Small">(Again just the part of the code that is changed)</span>
```javascript
...
  componentDidMount() {
    // Added two nested requestAnimationFrames
    requestAnimationFrame(() => {
      // Firefox will sometimes merge changes that happened here
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }
...
```


<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/JJyEXq/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/JJyEXq/'>Rerender React component in componentDidMount - Step 4</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


## Finally, put it in a helper

To make things a bit cleaner, I extract this to a helper function and then use whenever I need it.
This can be used in our React examples but also with any other framework or vanilla JavaScript.

If you support browsers without `requestAnimationFrame` be sure to polyfill it. Paul Irish has a great one  [here](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/).

```javascript
// Start animation helper using nested requestAnimationFrames
function startAnimation(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
}
```


<span class="Small">(Our `componentDidMount` code using helper)</span>
```javascript
...
  componentDidMount() {
    // You'll need to import startAnimation at the top of the file
    startAnimation(() => {
      this.setState({ animate: true });
    });
  }
...
```

## At the end

Hope you learned something, and I'm interested to hear if somebody is using different approach to solve this problem. Cheers!
