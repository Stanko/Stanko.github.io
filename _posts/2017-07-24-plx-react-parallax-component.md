---
layout: post
title: Plx - React parallax component
category: [React]
tags: [react]
---

I'm becoming predictable. Again, I haven't found component I like, so I wrote my own.

This time, I've build React component for parallax (on scroll) effects.
Check the [live demo](https://stanko.github.io/react-plx/). It is called `Plx`, it is open source and available on [GitHub](https://github.com/Stanko/react-plx) and [npm](https://www.npmjs.com/package/react-plx).

## What it does

So far in my career, I've built so many parallax components. Parallax is actually wrong term here<sup>1</sup>, but it got accepted by development community.

Designers love them and users are fascinated by fancy effects. Simply explained as you scroll the page down something is changed relative to the scroll position. For example, as you scroll down clock arms are rotating. Just check the [demo](https://stanko.github.io/react-plx/).

There is a lot of solutions out there, but IMHO they are usually bloated or not performant or complicated to use. And as I'm using React a lot, I decided to collect what I have learned about implementing on scroll effects in React and create standalone component. Most of the code in this component is pulled out from my existing projects and glued together.

<small>
<sup>1</sup> the effect whereby the position or direction of an object appears to differ when viewed from different positions, e.g. through the viewfinder and the lens of a camera.
</small>

<!--more-->

## Performance

Plx is really performant, thanks to a few optimizations.

First and the most important one - it is not listening to window scroll event.
It is using simple scroll manager, which checks if scroll has changed every 16ms (to get smooth 60fps).
When scroll changes it broadcasts custom event.
All of the Plx components are listening to this event and share the same scroll manager (it is singleton).
Singleton is created with the first component, and destroyed when last one unmounts.

Another optimization is that elements are not animated when not in viewport.
Actually, they are not animated if they are more than 50px outside of viewport.
So component "gets ready" 50px before it enters the viewport.
You can force animating element even outside of viewport by setting `animateWhenNotInViewport` prop to `true`.

Beside that, every update is done in `requestAnimationFrame`.

Still you need to avoid common "don't dos" when making a parallax page:

* Avoid `background-size: cover`
* Don’t animate massive images or dramatically resize them
* Avoid animating 100 things at once
* Only use properties that are cheap for browsers to animate - opacity and transform (scale, rotate, skew, scale)

Read this [great article](https://medium.com/@dhg/parallax-done-right-82ced812e61c) to find out more (that is where I got my initial inspiration).


## Supported effects / properties

Plx supports every CSS property that has numeric value (`opacity`, `height`, `padding`...<sup>2</sup>). I wrote a formula (this sounds way more sciency than it is) which calculates property value depending on the scroll position and given input values.

It also supports `transform`, and you can pass multiple transform functions (`translateX`, `rotate`, `skewZ`...).
You can even animate colors on scroll (background, text and border colors are supported)! Colors are broken down to their R/G/B/A values, and then same formula is applied to each one of them.

<small>
<sup>2</sup> The most performant properties to animate are `opactity` and `transform`. So stick to those two to keep your parallax effects performant. Of course you can animate something else here and there, but be careful and test it throughly.
</small>


## At the end

What are you waiting?! Get it from npm and start using it :)

```
$ npm install --save react-plx
```

Documentation is available on [GitHub](https://github.com/Stanko/react-plx).

```js
import React, { Component } from 'react';
import Plx from 'react-plx';

class Example extends Component {
  render() {
    return (
      <Plx
        className='MyAwesomeParallax'
        parallaxData={ ... } // your parallax effects, see documentation
      >
        /* Your content */
      </Plx>
    );
  }
}
```

Feel free to contribute, cheers!
