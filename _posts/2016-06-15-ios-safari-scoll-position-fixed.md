---
layout: post
title: Change to position fixed on iOS Safari while scrolling
category: CSS
---

If you ever had to fix element on scroll, you probably had an issue on iOS Safari (and other mobile devices).
Element will usually flicker, and disappear until scrolling has stopped completely.

Just force GPU acceleration by adding `transform: translate3d(0,0,0);` to your element.

You will have something like this:

{% highlight css %}
.Element-header {
  transform: translate3d(0,0,0);
}

.Element-header--fixed {
  top: 0;
  position: fixed;
}
{% endhighlight %}

Enjoy `¯\_(ツ)_/¯`

### Update, if the element inside fixed one flickers

In the comments Matt made a great tip, so I'm adding it here as well:

If you are styling the element within fixed element,
you need to apply the `translate3d` hack to the nested element
in order for it to not flicker/disappear.

Thanks Matt!
