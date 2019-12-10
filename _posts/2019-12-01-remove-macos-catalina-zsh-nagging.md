---
layout: post
title: Remove MacOS Catalina zsh nagging
category: [Rants]
tags: [rants, bash, zsh, mac]
image: /public/img/zsh-nagging.png
---

Yesterday I
<label class="SideNote-trigger">updated my work laptop to MacOS Catalina.</label>
<small class="SideNote">
To be able to [use AirPods Pro with it](https://support.apple.com/en-us/HT208718) :/
</small>,
Apple made a change and switched the default shell to zsh (instead of bash). From what I have read, the reason is [a licensing issue](https://thenextweb.com/dd/2019/06/04/why-does-macos-catalina-use-zsh-instead-of-bash-licensing/).

<!--more-->

Bash is not gone and everything will work like it used to. But every time you open a terminal, you will be greeted by this message:

![Every time I open a terminal MacOS Catalina is telling me to switch to zsh](/public/img/zsh-nagging.png)

If you are like me, and not ready to make the switch to zsh, you can silence this warning by putting this into your `.bash_profile` (or `.bashrc`).

```bash
export BASH_SILENCE_DEPRECATION_WARNING=1
```

## Why I don't want to switch?

Everything in my workflow is heavily customized and I'm really used to it. For example, I'm using [bash-it](https://github.com/Bash-it/bash-it) with a custom theme for years now. It is heavily inspired by [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh), similar zsh *framework*. Still, it will take me some time to migrate everything.

I will eventually switch to zsh, but at the moment it is not high on my list of priorities.
