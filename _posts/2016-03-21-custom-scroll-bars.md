---
layout: post
title: Custom scroll bars
category: [JavaScript, CSS]
---

Generally when comes to replacing native UI components, I'm strongly against it.
But, we've all been there, when the client insists on it.

You'll see how to style it via CSS (webkit only),
apply pure JavaScipt plugin with native scrolling or apply simple CSS hack.

Well, let's go :)

<!--more-->

-----

### CSS solution, but only for webkit

Webkit scrollbars can be styles via CSS. This is great, but still not cross browser.
CSS tricks has a [great article](https://css-tricks.com/custom-scrollbars-in-webkit/) on it.

You can use pseudo selectors, these ones are used in the demo:

{% highlight css %}
::-webkit-scrollbar {
  background: #CCF6ED;
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #21BB9A;
  border-radius: 4px;
}
{% endhighlight %}

Check jsfiddle demo with green-ish scrollbars <i>webkit only</i>.

<iframe
	width="100%"
	height="400"
	src="//jsfiddle.net/on9uho92/embedded/result,css/"
	allowfullscreen="allowfullscreen"
	frameborder="0"></iframe>

-----

### Custom JavaScript plugin, using native scroll

This one I wrote years ago, and it is fully supporting IE8. It needs some love,
as it should updated with I have learned since then.

Using browser native scroll so it is smooth as you can get.
Scrollbars are customizable via CSS.

<a href="http://stanko.github.io/rocketScroll/">
  <img src="/public/img/projects/rocket-scroll.png" alt="Demo - React slider with touch support">
</a>

Check the [demo](http://stanko.github.io/rocketScroll/).

Grab the code on [GitHub](https://github.com/Stanko/rocketScroll).

-----

### CSS solution, all browsers

* Idea - Show scrollbars only on mouse hover.
* Problem - content will be shrinked for the width of the scrollbar on hover, and jump.

We are going to exploit the fast that all of the browsers have sub 20px wide scrollbar.
This demo is using two divs, outer one which will be scrolled, and content wrapped in the inner one.
Just put `overflow: hidden` on the outer div, and on mouse hover, switch to `overflow: scroll`
Having inner div smaller for 20px, you will be able to create enough
space for the scroll bar, and content won't jump around.

You'll need to add modernizr, or some other way to detect touch devices.
That's why we are using `overflow-y: scroll` by default.
Scrolling on touch devices is already nice and smooth.

{% highlight css %}
.scroll-y {
  width: 300px;
  height: 300px;
  overflow-y: scroll; /* not to mess up scroll on touch devices */
}

.scroll-y-content {
  padding: 20px 0 20px 20px;
  width: 280px; /* 20px less than parent width */
}

/* no-touchevents class is added by modernizr
 * as we don't want to apply this on touch devices */
.no-touchevents .scroll-y {
    overflow-y: hidden;
}

.no-touchevents .scroll-y:hover {
    overflow-y: scroll;
}
{% endhighlight %}

Check jsfiddle demo.

<iframe
	width="100%"
	height="400"
	src="//jsfiddle.net/az220ayb/embedded/result,css,html/"
	allowfullscreen="allowfullscreen"
	frameborder="0"></iframe>
