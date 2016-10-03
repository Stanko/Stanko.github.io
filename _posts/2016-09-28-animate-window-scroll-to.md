---
layout: post
title: Plain JavaScript animated window scroll function
category: [JavaScript]
---

Before modern frameworks, I always used jQuery's `scrollTo` method.
At some point, not every project included jQuery, so I wrote simple function
to animate window scroll.

I have kept copying that function from project to project.
Finally I took some time, cleaned it up and published it on the npm
(this is the first npm package I published).

Demo and documentation is available [here](https://stanko.github.io/animated-scroll-to/).

<!--more-->

Find it on [Github](https://github.com/Stanko/animated-scroll-to)
and [npm](https://www.npmjs.com/package/animated-scroll-to)

### Installation

```
npm install animated-scroll-to
```

### Usage

{% highlight javascript %}
import animateScrollTo from 'animated-scroll-to';

// desiredOffset - page offset to scroll
// options - object with options

// default options
const options = {
  // duration of the scroll per 1000px, default 500
  speed: 500,

  // minimum duration of the scroll
  minDuration: 250,

  // maximum duration of the scroll
  maxDuration: 3000,

  // should animated scroll be canceled on user scroll/keypress
  // if set to "false" user input will be disabled until animated scroll is complete
  cancelOnUserAction: true
};

animateScrollTo(desiredOffset, options);
{% endhighlight %}
