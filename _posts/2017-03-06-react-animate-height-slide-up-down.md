---
layout: post
title: React animate height (slide up/down) component
category: [React]
tags: [react,animation]
---

Most JavaScript developers used jQuery's `.slideUp()` and `.slideDown()` methods,
and got used to them. As component based frameworks usually do not include such functionality,
the first logic choice is to turn to CSS. But alas, CSS transitions do not work with `height: auto`.
(Transitions can do a tween only between two numeric values.)

As we use this a lot in our company, I tried to find React component that does it.
Found a couple, didn't like them, as most of them rely on a tone of dependencies.
Again, I decided to write my own - small, fast and with no dependencies.

## Demo

You can see it live [here](https://stanko.github.io/react-animate-height/).
Same page has the documentation and links to the npm and GitHub.

Component can animate from (and to) `0` (collapsed), `auto` (expanded),
and to any specific value in pixels.

<!--more-->

## Usage

Install it from npm

```
npm install --save react-animate-height
```

import it in your React project,
and wrap the content you want to animate in it.

```
import AnimateHeight from 'react-animate-height';

<AnimateHeight
  duration={ 500 }
  height={ 'auto' }>
  <h1>Your content goes here</h1>
  <p>Put as many React or HTML components here.</p>
</AnimateHeight>
```

For more detailed documentation and all props explained,
check the [GitHub repo](https://github.com/Stanko/react-animate-height),

## How it works

Component is using CSS transitions, but with a small trick to make it work.
We mentioned that transitions only work between two numeric values.
We'll replace `auto` with numeric value just before transition happens.

There are three possible cases:

* **Specific height to the other specific height**

  This is the easiest one. Element will have `overflow: hidden` and translate from
  one height value to the other. Piece of cake.

* **Specific height (0 included) to auto**

  This one is a bit more interesting. As we can't transition to `auto`,
  component will take the content height, apply it to the element, and transition will happen.
  But important thing is that after the transition is complete,
  component will reset `height` to `auto` and `overflow` to `visible`

  This is important if you add more content to the component, it will natively grow.
  As well for the potential absolute elements that you want to go outside of the container.
  Note that when specific height is applied element will always have `overflow: hidden`.

* **Auto to specific height (0 included)**
  Similar to the previous case but reversed. Component will grab the expanded height and
  apply it to the element. Then with a timeout of 0, apply specific height.
  (Check [this](/talks-i-like/#what-the-heck-is-the-event-loop-anyway-brsmallphilip-roberts-2014small) if you are confused about the timeout of 0.) Again, transition will work as it goes between two numeric values.

## Conclusion

I guess everyone took slide up/down for granted, but in the end there is a little
logic that needs to be put in to make it work properly.
On the other hand some people are solving it by pilling up the 3rd party code.
Please, when you are open sourcing a library, keep it small and simple!

Hope you'll use it!
