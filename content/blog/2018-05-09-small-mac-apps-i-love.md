+++
title = "Small Mac apps I love"
aliases = ["/small-mac-apps-i-love/"]

[taxonomies]
category = ["Random"]
tags = ["mac", "apps", "bash"]

[extra]
comments = [
  "comments/small-mac-apps-i-love/1535092268404.toml",
  "comments/small-mac-apps-i-love/1535092772226.toml"
]

+++

Recently I switched to a new laptop and had to set it up
{{ sidenote(text="
to my likings.
", note="
[This comic](https://xkcd.com/1806/) describes my setup pretty accurately.
") }}
My setup includes a bunch of small apps I found over the years.
It seems that most people are not aware of these,
so I decided to share a list.

All of them are free (with the exception of TotalFinder),
and if you like them, consider donating to authors.

<!-- more -->

So here they are in the alphabetical order:

### AppCleaner

[AppCleaner website](https://freemacsoft.net/appcleaner/)

> AppCleaner is a small application which allows you to thoroughly uninstall unwanted apps.

![AppCleaner window](/img/mac-utils/appcleaner.png)


### CopyClip

[CopyClip website](https://itunes.apple.com/us/app/copyclip-clipboard-history-manager/id595191960)

Simple clipboard manager, stores what you copied allowing you to quickly find it.

![CopyClip clipboard history](/img/mac-utils/copyclip.png)

### HapticKey

[HapticKey website](https://github.com/niw/HapticKey)

This is a weird one.
I already ranted about the touch bar, and this app makes it a little bit more bearable.
Tapping on touch bar will make your trackpad vibrate(?!) to give you haptic feedback.
Give it a try and decide for yourself.

![HapticKey](/img/mac-utils/haptickey.png)

### Itsycal

[Itsycal website](https://www.mowglii.com/itsycal/)

If you ever were annoyed by the fact Mac has no built-in calendar in the menu bar, you'll love Itsycal.
It is a tiny calendar with option to show your calendar events.

By default it displays small calendar icon, with current date in it.

![Itsycal with default date icon](/img/mac-utils/itsycal-icon.png)

Custom date formats are supported as well, allowing you replace Mac's clock completely.

![Itsycal using custom date format](/img/mac-utils/itsycal.png)


### Spectacle

[Spectacle website](https://www.spectacleapp.com/)

Simple window manager - move windows around, across workspaces, resize them.
All that by using using customizable global shortcuts.

![Spectacle main window](/img/mac-utils/spectacle.png)

### The Unarchiver

[The Unarchiver website](https://theunarchiver.com/)

Well, this is probably the
{{ sidenote(text="
most popular
", note="
I just realized Unarchiver was acquired by MacPaw,
hopefully they'll keep it free and simple.
") }}
on this list.
Unarchiver does exactly what it's name suggests.
It supports all of the archive formats you'll ever need.

### TotalFinder ($12.00)

[TotalFinder website](https://totalfinder.binaryage.com/)

I always felt Finder is missing a lot of features.
TotalFinder and XtraFinder both fix that to an extent,
by adding things like tabs, dual mode, cut and more.

![TotalFinder dual mode](/img/mac-utils/totalfinder.png)

There is a catch - both application require [system tweak](https://totalfinder.binaryage.com/sip)
to install. You need to disable System Integrity Protection
(don't worry, you can enable it once app is installed).

### XtraFinder

[XtraFinder website](https://www.trankynam.com/xtrafinder/)

Pretty similar to TotalFinder, but free. I had some problems with it long ago
(can't remember what it was) so I switched to TotalFinder.
Haven't used in a long time, but you may want to give it a try.

Requires same [system tweak](https://www.trankynam.com/xtrafinder/sip.html) as TotalFinder.

-----

## Bash

As a bonus here are my two favorite bash tools.

### Bash-it

[Bash-it website](https://github.com/Bash-it/bash-it)

This is a clone of oh-my-zsh for bash. Includes autocompletion, themes, aliases, custom functions and more.
I have been using for a few years now and migrating my config to every new machine I use.

### autojump

[autojump website](https://github.com/wting/autojump)

This is pure awesomeness.

> autojump is a faster way to navigate your filesystem. It works by maintaining a database of the directories you use the most from the command line.

Using provided `j` command, you can jump around filesystem using fuzzy search.
Autojump is smart, and it will favorize directories you visit more frequently.

For example `j stanko` will take me to my blog directory (`/Users/stanko/stanko.github.io`)
instead of my home folder (`/Users/stanko`) because I navigate to the prior one more often.

Note that directories must be visited first before they can be jumped to.

---

Hopefully some of these will make your daily workflow easier.
