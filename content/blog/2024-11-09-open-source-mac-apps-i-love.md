+++
title = "Open source mac apps I love"

[taxonomies]
category = ["Random"]
tags = ["mac", "apps", "bash", "dev"]

[extra]
theme = "blue"
intro = "A bunch of really nice open-source applications I use on a daily basis."
image = "/img/mac-open-source/itsycal.png"
+++

<style>
.content p code {
  display: block;
  padding: 5rem 12rem;
  margin-top: 10rem;
  border: 1px solid var(--neutral-100);
  background: var(--neutral-50);
  color: var(--neutral-600);
  border-radius: 2rem;
  width: fit-content;
  position: relative;
}

.copy-button {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 5rem 12rem;
  font-size: 0.9em;
  color: var(--neutral-800);
  transition: all 250ms;
  border-radius: 4px;
}

@media (hover: hover) {
  p:hover .copy-button {
    opacity: 1;
  }

  .copy-button {
    opacity: 0;
  }
}

.copy-button:hover {
  color: var(--theme-color);
}

.copy-button:focus {
  opacity: 1;
}

</style>

I want to share some really nice open-source applications I use on a daily basis. I did a [similar post](/blog/small-mac-apps-i-love/) about six years ago, so I felt there is a need for an updated one. I focused on the apps that I feel are really convenient but less known.

All of the applications listed are free and open source. For each app, I included a brew install command.

If you happen to like and use them, please consider donating to their respective authors.

Here are all of the apps in alphabetical order:

**GUI Applications**

* [Hidden Bar](#hidden-bar)
* [ImageOption](#imageoptim)
* [Itsycal](#itsycal)
* [Karabiner-Elements](#karabiner-elements)
* [Keeping You Awake](#keeping-you-awake)
* [Maccy](#maccy)
* [Maestral](#maestral)
* [OpenInTerminal](#openinterminal)
* [Pearcleaner](#pearcleaner)
* [Pika](#pika)
* [Rectangle](#rectangle)

**Bash programs**


* [dust](#dust)
* [ripgrep](#ripgrep)
* [tio](#tio)
* [zoxide](#zoxide)

## GUI Applications

### Hidden Bar
[GitHub](https://github.com/dwarvesf/hidden)
 `brew install hiddenbar`

Hidden Bar allows you to hide icons from the menu bar. It seems that every app nowadays wants to be in the menu bar, and this helps declutter it.

![Hidden Bar settings](/img/mac-open-source/hidden-bar.png)



### ImageOptim
[GitHub](https://github.com/ImageOptim/ImageOptim) | [Website](https://imageoptim.com/mac)
 `brew install imageoptim`

As its name suggests, ImageOptim optimizes images. It is a UI for a bunch of lossless image optimization tools. Just drop your images and it will compress them without losing any quality.

![ImageOptim main window](/img/mac-open-source/imageoptim.png)



### Itsycal
[GitHub](https://github.com/sfsam/Itsycal) | [Website](https://www.mowglii.com/itsycal/)
 `brew install itsycal`

A small calendar that lives in your menu bar. Why is this not built into the operating system?

![Istycal calendar](/img/mac-open-source/itsycal.png)




### Karabiner-Elements
[GitHub](https://github.com/pqrs-org/Karabiner-Elements) | [Website](https://pqrs.org/osx/karabiner/) `brew install karabiner-elements`

I just can't get used to Apple's international keyboard layout and the tilde being in the bottom left. Karabiner solves that. It's a keyboard customizer that allows you to remap keys and create complex modifications.

![Karabiner main window](/img/mac-open-source/karabiner.png)



### Keeping You Awake
[GitHub](https://github.com/newmarcel/KeepingYouAwake) | [Website](https://keepingyouawake.app/)
 `brew install keepingyouawake`

Prevents your Mac from going to sleep by clicking on its icon in the menu bar. I use it when I'm running my pen plotter to make sure the laptop doesn't go to sleep.

![Keeping You Awake](/img/mac-open-source/keeping-you-awake.png)



### Maccy
[GitHub](https://github.com/p0deje/Maccy) | [Website](https://maccy.app/)
 `brew install maccy`

A clipboard manager. It saves your clipboard history and allows you to quickly access it.

![Keeping You Awake](/img/mac-open-source/maccy.png)



### Maestral
[GitHub](https://github.com/samschott/maestral) | [Website](https://maestral.app/)
 `brew install maestral`

A lightweight Dropbox client. The official Dropbox app has become bloated over the years, and Maestral is a great alternative.

![Maestral](/img/mac-open-source/maestral.png)




### OpenInTerminal
[GitHub](https://github.com/Ji4n1ng/OpenInTerminal)
 `brew install openinterminal`

A Finder extension that allows you to open the current directory in a terminal or a code editor.

![OpenInTerminal Finder extension](/img/mac-open-source/open-in-terminal.png)


### Pearcleaner
[GitHub](https://github.com/alienator88/Pearcleaner) | [Website](https://itsalin.com/appInfo/?id=pearcleaner) `brew install pearcleaner`

An app remover that lets you select an app and finds all of its files, allowing you to remove it in a single click.

![Pearcleaner main window](/img/mac-open-source/pearcleaner.png)



### Pika
[GitHub](https://github.com/superhighfives/pika) | [Website](https://superhighfives.com/pika)
 `brew install pika`

A system-wide color picker. I'm *picky* when it comes to these, and Pika works in the way I expect a color picker to work.

![Pika window and eyedropper](/img/mac-open-source/pika.png)



### Rectangle
[GitHub](https://github.com/rxhanson/Rectangle) | [Website](https://rectangleapp.com/)
 `brew install rectangle`

A window tiling app and successor to Spectacle. Allows you to move and tile windows using keyboard shortcuts.

![Rectangle settings window](/img/mac-open-source/rectangle.png)



## Bash

You might also want to check out the [Modern Unix](https://github.com/ibraheemdev/modern-unix) repository, which contains modern alternatives to many traditional Unix commands.

### dust
[GitHub](https://github.com/bootandy/dust) `brew install dust`

A program that estimates file space usage in the current directory.

![dust running in terminal](/img/mac-open-source/dust.png)

### ripgrep
[GitHub](https://github.com/BurntSushi/ripgrep) `brew install ripgrep`

Ripgrep recursively searches the current folder using regular expressions. I don't use it often, but when I need it, I'm really thankful it exists.

### tio
[GitHub](https://github.com/tio/tio) `brew install tio`

A serial device I/O tool, a replacement for the screen command. I'm not using it's advanced features, but I loved the auto-reconnect feature while working on my [Retro Frame](https://github.com/stanko/retro-frame).

### zoxide
[GitHub](https://github.com/ajeetdsouza/zoxide) `brew install zoxide`

In my previous post, I mentioned that autojump is pure awesomeness. Well, zoxide is pretty much the same thing, but faster.

Both let you jump around the system using fuzzy search, and prioritize the directories you visit more often. If I didn't explain it well, just check the gif on it's [GitHub page](https://github.com/ajeetdsouza/zoxide).

---

I hope you found a few you like!

<script>
  if (navigator.clipboard) {
    document.querySelectorAll('.content code').forEach(code => {
      const text = code.innerText;
      const button = document.createElement('button');
      let timeout;
      button.addEventListener('click', () => {
        clearTimeout(timeout);
        navigator.clipboard.writeText(text).then(() => {
          button.innerText = 'Coppied';
        }, () => {
          button.innerText = 'Error, try again';
        }).finally(() => {
          timeout = setTimeout(() => {
            button.innerText = 'Copy';
          }, 3000);
        });
      });
      button.classList.add('copy-button')
      button.innerText = 'Copy';
      code.appendChild(button);
    });
  }
</script>
