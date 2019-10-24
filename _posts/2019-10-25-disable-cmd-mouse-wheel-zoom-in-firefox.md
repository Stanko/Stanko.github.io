---
layout: post
title: "Disable Cmd + Mouse Wheel (or Ctrl + Mouse Wheel) zoom in Firefox"
category: [Random]
tags: [firefox,browser,zoom]
image: /public/img/ff-about-config.png
---

Short Firefox tip to disable `Cmd + MouseWheel` zoom. There is a weird interaction with it. Therefore I decided to turn it off completely (I never used it anyway).

When I scroll a page using a trackpad and start switching tabs via `Cmd + Tab`, inertia scrolling would still be active, and the page I switched to gets zoomed in a lot (as I'm still holding `Cmd`). It really got on my nerves.

<!--more-->

To disable it, you'll need to type `about:config` in your address bar. A
<label class="SideNote-trigger">warning page</label>
<small class="SideNote">
This page will allow you to change hidden browser settings, so be careful with it.
</small>
may appear. Continue like the hacker you are, and search for `mousewheel.with_meta`. You should see something like this:

![Firefox about:config page](/public/img/ff-about-config.png)

We need to change `mousewheel.with_meta.action`, from `3` to `0`. To change it, click on the edit button (or just double click the value). And that is it!

For people who are not on Mac and want to disable `Control + Mouse Wheel`, follow the same procedure and change `mousewheel.with_control.action` from `3` to `0`.

If you ever want to switch it back on, find the same option, and change it back to `3`. Once you change a value, Firefox will give you a small reset button, just in case you forgot the default value.
