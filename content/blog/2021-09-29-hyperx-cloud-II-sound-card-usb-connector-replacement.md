+++
title = "HyperX Cloud II sound card USB connector replacement"

[taxonomies]
category = ["Random"]
tags = ["soldering", "diy", "hyperx", "usb", "headphones"]

[extra]
image = "/img/hyperx-cloud2/usb-sound-card.jpg"
+++

If you are only interested in the wiring diagram, jump directly to the [wiring](#wiring) section.

----

HyperX's Cloud II headphones come with a USB sound card, which looks like this:

![USB sound card that comes with Cloud II headphones](/img/hyperx-cloud2/usb-sound-card.jpg)

It is a convenient little dongle. I had it plugged in into the front USB port, and I bumped into it, bending the connector for ninety degrees. Naturally, it stopped working. Good thing about these headphones is that the sound card isn't mandatory for headphones to work, but the regular audio cable is pretty short.

After searching for the replacement, I realized I can't buy it where I live, and that it costs around 35-40$ which is more than the half of the price for a whole new pair. That is why I decided to try to repair it on my own.

The reason I'm writing this blog post is that I couldn't find **any** information on how to repair it, so hopefully it will help you fix the same problem.

<!-- more -->

## Wiring

The process is actually super simple. You'll need some soldering experience and a USB connector. Cut off the original connector and strip the wires.

Solder wires to a connector in a following order:

* <span style="color: black">Black</span>
* <span style="color: green">Green</span>
* <span style="color: darkgoldenrod">Copper</span>
* <span style="color: red">Red</span>

Some diagrams will show you different order with middle (data) wires switched, but that won't work. I tried soldering it like that initially, but nor Windows nor Mac would recognize the headphones. The HyperX logo would light up, but Windows gave me a *"Unknown USB Device (Device Descriptor Request Failed)"* message. That's how I figured out that power wires are connected properly, but the data ones are not.

![USB connector with wires soldered in the correct order](/img/hyperx-cloud2/wires.jpg)

Sorry for the blurry photo, but I didn't want to disassemble everything to get a better one.

----

I hope this will help you fix your headphones and motivate you to try to fix more things in the future, before just ordering a replacement.
