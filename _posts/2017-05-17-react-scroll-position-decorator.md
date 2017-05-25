---
layout: post
title: React scroll decorator
category: [React, JavaScript]
---

I love JavaScript decorators. One that I copy to every React project is scroll decorator.
It is fairly simple way of injecting scroll position to react components. This way you can handle scroll using react lifecycle.

This decorator is not listening to a scroll event, as that is the performance killer (especially when you push it to react lifecycle). Instead, it is using interval to check if scroll position has changed. To keep it performant, I'm using `requestAnimationFrame`. Interval is only there to throttle animation frame from triggering too often.

<!--more-->

Please note that it still may cause performance issues if you apply it to a large number of components. Personally, I never had to apply it to a more than three of four per page.

So here it is:

```javascript
import React, { Component } from 'react';

const withScroll = ComposedComponent => class ScrollDecorator extends Component {
  constructor() {
    super();

    // Initial scroll position
    this.state = {
      scrollPosition: this.getWindowScrollTop(),
    };

    // Bind handlers
    this.handleInterval = this.handleInterval.bind(this);
    this.handleRequestAnimationFrame = this.handleRequestAnimationFrame.bind(this);
  }

  componentWillMount() {
    // 50 times per second, change to your needs
    const INTERVAL = 20;
    this.intervalID = setInterval(this.handleInterval, INTERVAL);
  }

  componentWillUnmount() {
    // Remove and reset interval/animationFrame
    clearInterval(this.intervalID);
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.intervalID = null;
  }

  getWindowScrollTop() {
    // Get scroll position, with IE fallback
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  handleInterval() {
    // Interval is only used to throttle animation frame
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.handleRequestAnimationFrame);
  }

  handleRequestAnimationFrame() {
    const { scrollPosition } = this.state;
    const newScrollPosition = this.getWindowScrollTop();

    // Update the state only when scroll position is changed
    if (newScrollPosition !== scrollPosition) {
      this.setState({
        scrollPosition: newScrollPosition,
      });
    }
  }

  render() {
    const { scrollPosition } = this.state;

    return (
      <ComposedComponent
        { ...this.props }
        scrollPosition={ scrollPosition }
      />
    );
  }
};

export default withScroll;
```

### Usage

Import the decorator and apply it to your component, easy-peasy.

This will inject `scrollPosition` to it's props.

```javascript
import React, { Component } from 'react';
import withScroll from './scroll-decorator';

@withScroll
class CoolComponent extends Component {
  render() {
    const { scrollPosition } = this.props;

    return (
      <div>
        Current scroll position is: { scrollPosition }px.
      </div>
    );
  }
}
```

Enjoy!
