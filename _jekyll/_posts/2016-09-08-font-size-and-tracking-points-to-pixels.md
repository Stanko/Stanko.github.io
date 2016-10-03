---
layout: post
title: Implementing PhotoShop font sizes and tracking in CSS, points to pixels conversion
category: [CSS, SASS]
---

We've all been there - trying to get right font sizes from PhotoShop to CSS.
Designers usually work with points, which are used in the print, but not common on the web.
They also use term *tracking* a lot, which is actually only a letter spacing with different units.

You can recalculate everything by hand and try to keep track of it.
But we can use the goodies of SCSS to make that process a bit easier.

Point to pixel ratio is `1pt = 1.333333px`. We'll create SASS function to do conversion for us.

And PhotoShop tracking works relative to the font size.
One point of tracking is 1/1000 of the font size.
For this one we'll create a mixin.

<!--more-->

{% highlight scss %}
// Converts pt to px
@function pt-to-px($size-in-points){
    @return #{ round($size-in-points / 1.333333) }px;
}

// Adds letter spacing to match photoshop tracking
@mixin tracking($ps-tracking){
    letter-spacing: #{ $ps-tracking / 1000 }em;
}

// Usage
.Component {
    @include tracking(-5);
    font-size: pt-to-px(20);
    line-height: pt-to-px(30);
}

{% endhighlight %}

This will generate following CSS:

{% highlight css %}
.Component {
    letter-spacing: -.005em;
    font-size: 15px;
    line-height: 23px;
}
{% endhighlight %}

Note that function and mixin can do pretty much the same job.
But it makes more sense to use mixins when including complete styles,
and functions to return values.
So conversion makes sense to be a function,
as we can use it for font size, line height or anything else.
Conversion of tracking to letter spacing is including a specific style,
so keep it in a mixin.
