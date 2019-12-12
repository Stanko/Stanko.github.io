---
layout: post
title: Small Mac apps I love
category: [Random]
tags: [mac,apps,bash]
---

Recently I switched to a new laptop and had to set it up
<label class="SideNote-trigger">
to my likings.
</label>
<small class="SideNote">
[This comic](https://xkcd.com/1806/) describes my setup pretty accurately.
</small>
My setup includes a bunch of small apps I found over the years.
It seems that most people are not aware of these,
so I decided to share a list.

All of them are free (with the exception of TotalFinder),
and if you like them, consider donating to authors.

<!--more-->

So here they are in the alphabetical order:

### AppCleaner <span class="Small">[link](https://freemacsoft.net/appcleaner/)</span>

> AppCleaner is a small application which allows you to thoroughly uninstall unwanted apps.

{:.Image}
![AppCleaner window](/public/img/mac-utils/appcleaner.png)


### CopyClip <span class="Small">[link](https://itunes.apple.com/us/app/copyclip-clipboard-history-manager/id595191960)</span>

Simple clipboard manager, stores what you copied allowing you to quickly find it.

{:.Image.Image--md}
![CopyClip clipboard history](/public/img/mac-utils/copyclip.png)

### HapticKey <span class="Small">[link](https://github.com/niw/HapticKey)</span>

This is a weird one.
I already ranted about the touch bar, and this app makes it a little bit more bearable.
Tapping on touch bar will make your trackpad vibrate(?!) to give you haptic feedback.
Give it a try and decide for yourself.

{:.Image.Image--md}
![HapticKey](/public/img/mac-utils/haptickey.png)

### Itsycal <span class="Small">[link](https://www.mowglii.com/itsycal/)</span>

If you ever were annoyed by the fact Mac has no built-in calendar in the menu bar, you'll love Itsycal.
It is a tiny calendar with option to show your calendar events.

By default it displays small calendar icon, with current date in it.

{:.Image.Image--md}
![Itsycal with default date icon](/public/img/mac-utils/itsycal-icon.png)

Custom date formats are supported as well, allowing you replace Mac's clock completely.

{:.Image.Image--md}
![Itsycal using custom date format](/public/img/mac-utils/itsycal.png)


### Spectacle <span class="Small">[link](https://www.spectacleapp.com/)</span>

Simple window manager - move windows around, across workspaces, resize them.
All that by using using customizable global shortcuts.

{:.Image}
![Spectacle main window](/public/img/mac-utils/spectacle.png)

### The Unarchiver <span class="Small">[link](https://theunarchiver.com/)</span>

Well, this is probably the
<label class="SideNote-trigger">
most popular
</label>
<small class="SideNote">
I just realized Unarchiver was acquired by MacPaw,
hopefully they'll keep it free and simple.
</small>
on this list.
Unarchiver does exactly what it's name suggests.
It supports all of the archive formats you'll ever need.

### TotalFinder ($12.00) <span class="Small">[link](https://totalfinder.binaryage.com/)</span>

I always felt Finder is missing a lot of features.
TotalFinder and XtraFinder both fix that to an extent,
by adding things like tabs, dual mode, cut and more.

{:.Image}
![TotalFinder dual mode](/public/img/mac-utils/totalfinder.png)

There is a catch - both application require [system tweak](https://totalfinder.binaryage.com/sip)
to install. You need to disable System Integrity Protection
(don't worry, you can enable it once app is installed).

### XtraFinder <span class="Small">[link](https://www.trankynam.com/xtrafinder/)</span>

Pretty similar to TotalFinder, but free. I had some problems with it long ago
(can't remember what it was) so I switched to TotalFinder.
Haven't used in a long time, but you may want to give it a try.

Requires same [system tweak](https://www.trankynam.com/xtrafinder/sip.html) as TotalFinder.

---

## Bash

As a bonus here are my two favorite bash tools.

### Bash-it <span class="Small">[link](https://github.com/Bash-it/bash-it)</span>

This is a clone of oh-my-zsh for bash. Includes autocompletion, themes, aliases, custom functions and more.
I have been using for a few years now and migrating my config to every new machine I use.

### autojump <span class="Small">[link](https://github.com/wting/autojump)</span>

This is pure awesomeness.

> autojump is a faster way to navigate your filesystem. It works by maintaining a database of the directories you use the most from the command line.

Using provided `j` command, you can jump around filesystem using fuzzy search.
Autojump is smart, and it will favorize directories you visit more frequently.

For example `j stanko` will take me to my blog directory (`/Users/stanko/stanko.github.io`)
instead of my home folder (`/Users/stanko`) because I navigate to the prior one more often.

Note that directories must be visited first before they can be jumped to.

---

Hopefully some of these will make your daily workflow easier.
