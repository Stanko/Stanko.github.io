---
layout: post
title: '"has-tabbed" aka "Should I release small libraries?"'
category: [JavaScript]
tags: [npm,js,accessibility]
---

I just released tiny library called [has-tabbed](https://www.npmjs.com/package/has-tabbed).
Again, it is a small piece of code I regularly copy from project to project.
I always considered it too insignificant for releasing it as a standalone package.

When user presses tab key, it adds
<label class="SideNote-trigger">CSS class</label>
<span class="SideNote">
By default `--tabbed` is used, but it accepts custom class as parameter.
</span>
to `html` element.
Then, if user clicks anywhere on the page, it removes it. That's why I though it is too small.
But after giving it some thought, my answer to the question in the title is "YES".

> You should release small libraries no matter how small they are.

<!--more-->

It is ok if library does only
<label class="SideNote-trigger">one small thing</label>
<span class="SideNote">
It should do it right though.
</span>.
It will save you time as you don't have to copy it all the time,
and sharing will allow other people to use and improve it.

Now when we resolved that question, let's get back to `has-tabbed`.

## What is it for?

It is a small accessibility and UX improvement.
Web apps need focus states with "ugly" focus rings.
Most developers will just remove them.
This is something you shouldn't do, as it impacts accessibility and overall UX.
More people than you think are using keyboard to navigate through websites and apps.

`has-tabbed` allows you to have the best of both worlds.
It gives you a way yo differentiate if user is using keyboard or mouse to get around.
You can safely remove focus rings for people using a mouse,
but as soon as they start tabbing you can put them back in.
You'll understand what I'm talking about when you see [the demo](https://stanko.github.io/has-tabbed/).

{:.Image.Image--md}
!["has-tabbed" in action](/public/img/projects/has-tabbed.png)

On the left, you can see colorful buttons without focus state (with hover state on the first one).
As soon as user presses tab we can add focus state as shown on the right.

Of course it is open source and code is available [here](https://github.com/Stanko/has-tabbed).
Enjoy!
