+++
title = "<span>Internet Explorer 6</span> hacks, ten years after"
aliases = ["/ie6-hacks-ten-years-after/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["ie", "css", "microsoft"]

[extra]

+++

Exactly ten years ago, on my [my friend](http://rand.rs/)'s blog I published a blog post about Internet Explorer 6 CSS hacks. I remembered it recently, and thought it would be really cool if I republished that same post, on it's 10th anniversary.

I added comments about the hacks from today's perspective to give you some context. Cited parts are from the original post. Younger developers may find some things unbelievable, because browsers came a long way in the last ten years :)

So here it is.

<!-- more -->

## Calculating `width` and `height`

> All browsers (but IE) are calculating element's width (and height) using the following formula:
> ```
> width + padding + border-width
> ```
>
> While IE is using `width` and subtracts border width and padding from it. Which actually makes sense.
> There are lot of different solutions to normalize this, and this is the one I'm using:
>
> ```css
> .element {
>   border: 2px solid black;
>   padding: 8px;
>
>   /* this line will be read by all browsers */
>   width: 400px;
>   /* but this one, due to inline comments will be skipped by IE */
>   width/**/:/**/380px;
> }
> ```
>
> Internet Explorer will
> {{ sidenote(text="skip the last line", note="Note that my syntax highlighter didn't highlight `380px` as well.") }},
> and use `400px` while everyone else will use `380px`.

This was before `box-sizing` was supported, and only browser using `border-box` was IE while other browsers were using `content-box`.
Today, I think literally everyone are using `border-box` in their CSS reset.


## Disappearing text and images

> This is one of the weirdest IE bugs. I never found out why it is happening. Randomly content will disappear, poof, and it is gone. Luckily, just add `position: relative` to the unfortunate element.

To this day I don't know why this used to happen, and how `position: relative` fixes it.


## `min-height` and `min-width`

> IE doesn't support these attributes, but you can use this hacky quick fix:
>
> ```css
> .element {
>   min-height: 500px;
>   height: auto !important;
>   height: 500px;
> }
> ```

To be honest, I was looking at this one today, and I have no idea why and how this works.


## PNG Alpha transparency

To understand this hack you'll need to read about [.htc](https://stackoverflow.com/a/10767123) scripts.

> There are a bunch of scripts for this problem, and after trying a lot of them,
> I have been using
{{ sidenote(text="TwinHelix script", note="Page is [still online](https://www.twinhelix.com/css/iepngfix/) <3") }}
for quite some time.
>
> Now I'm using
{{ sidenote(text="this one", note="Unfortunately the link is dead.") }}
It is enough to include it on you page. Only drawback is that it doesn't support background images. SO you'll need to stick with jpegs and gifs for backgrounds.
>
> UPDATE: try [this solution](https://web.archive.org/web/20101021190007/http://labs.unitinteractive.com/unitpngfix.php) as well, it seems the best so far.

Back then alpha transparency wasn't working in
{{ sidenote(text="IE", note="Nor did CSS border radius, shadows, gradiends, transforms...") }}
.


## `:hover` problem

> [Here](https://peterned.home.xs4all.nl/csshover.html) you can find a script which solves this problem. You'll need to include it on the page, and add this to your CSS file:
> ```css
> body {
>   behavior: url("csshover3.htc");
> }
> ```
> If you can't find your way around it, the page has a detailed explanation.

IE6 did not support `:hover` behavior on all elements. But only on elements like links and buttons.


## Double margins

In some cases, you would just end up with double margins on elements, with no particular reason.

> When IE6 double your margins on an element, just apply `display: inline` to the element.

This is not the best hack, because it will influence your layout. But it was either that or having double margins.


Hopefully you enjoyed this little time travel with me. Although it was hard browser to develop for, reading my old post have put a smile on my face. It is a great reminder how lucky we are today - how much browsers evolved and how good today's frontend tooling is.
