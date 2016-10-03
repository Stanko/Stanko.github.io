---
layout: post
title: Always use &lt;button&gt; for clickable elements
category: [CSS, SASS]
---

Always try to use `<button>` when  **element is clickable, but it is not a link**.
Avoid `<a>`, `<span>`, `<div>` and other elements.

Note that `display: flex` works differently on buttons in different browsers,
but we have easy fix for that.

<!--more-->

## Why?

You will get multiple benefits - user can "tab" to it,
and then press enter to activate (it will trigger `click` event).
There is no need to `preventDefault` like when you are using `<a>`.
User can't open it in the new tab/window, using right or middle click.
Screen readers recognize it out of the box.

Long story short - it is way more accessible. And when you think about it,
it is actually really logical thing to do. Buttons are made to be clickable :)

## Gotchas

### Buttons in forms

If you need your clickable button to be in a form, remember to put `type='button'` to it,
as default button type is `submit`, and it will submit your form on click.
Again, you could use `preventDefault`, but I think this is a way cleaner approach.

### Button flex maddnes

For some reason `display: flex` on buttons is behaving really different across browsers.
It is crazy! If you don't believe me, just check the examples below.

The easiest fix is to add another div in (to wrap button content), and apply `display: flex` to it.
From there on, you should be fine. I made a CodePen with an example.
On the left side, you can see a button with flex applied directly to it,
and on the right, a button with inner div and flex applied to it.

I overcame my laziness and made a bunch of cross browser screenshots.
Original CodePen is included at the end.

At the moment, it seems only Chrome gets it right.

-----

#### Chrome

<img src="/public/img/button-flex/chrome.png" alt="Display flex on buttons, Chrome">

#### Firefox

<img src="/public/img/button-flex/firefox.png" alt="Display flex on buttons, Firefox">

#### Safari 8

<img src="/public/img/button-flex/safari8.png" alt="Display flex on buttons, Safari 8">

#### Safari 9

<img src="/public/img/button-flex/safari9.png" alt="Display flex on buttons, Safari 9">

#### IE10

<img src="/public/img/button-flex/ie10.png" alt="Display flex on buttons, IE10">

#### IE11

<img src="/public/img/button-flex/ie11.png" alt="Display flex on buttons, IE11">

#### CodePen

<iframe
height='300px'
scrolling='no'
src='//codepen.io/stanko/embed/ALjvYj/?height=300&theme-id=light&default-tab=result&embed-version=2' frameborder='no'
allowtransparency='true'
allowfullscreen='true'
style='width: 100%; margin-bottom: 1em; background: #f7f7f7'>
See the Pen <a href='http://codepen.io/stanko/pen/ALjvYj/'>Fix for button display:flex</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
