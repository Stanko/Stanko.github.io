+++
title = "Letters from Sarajevo"
aliases = ["/letters-from-sarajevo/"]

[taxonomies]
category = ["Random"]
tags = ["book", "jekyll", "illustrations", "sarajevo"]

[extra]
comments = [
  "comments/letters-from-sarajevo/1595253580749.toml"
]
image = "/img/letters-from-sarajevo/book.jpg"
+++


Today. I have a very personal project to share with you all.

[Letters from Sarajevo](https://lettersfromsarajevo.com/) is a web adaptation of the book of the same name. My brother wrote the book using authentic letters our father sent us while being stuck in Sarajevo during the war in the nineties.

For more information about the book, please check [about page](https://lettersfromsarajevo.com/en/about/).


<!--{:.Image--md}-->
[![One of the images from the book, soldier lying on the cannon which is plugged with a cork](/img/letters-from-sarajevo/truce.png)](https://lettersfromsarajevo.com/)

<!-- more -->

## Illustrations

In the process of publishing the book, my father's original letters got lost. We were left with only low resolution scans. That's why I asked my friend [Ivan](https://www.instagram.com/sun_day_sign/), to redraw (and digitalize) all of the illustrations using scans as a reference.

Ivan did an amazing job, just check the comparison below:

{{ dual_image(
  src1="/img/letters-from-sarajevo/water-original.jpg",
  alt1="One of the original illustrations, low resolution scan",
  src2="/img/letters-from-sarajevo/water.png",
  alt2="Same illustration redrawn by Ivan"
) }}

## Tech

The website is open source and the code is available on [GitHub](https://github.com/Stanko/letters-from-sarajevo).

The site is powered by Jekyll, and follows a very similar setup to my blog. The build process is a little bit more complicated, because there are two different versions deployed on two different domains.

* {{ sidenote(text="[English version](https://lettersfromsarajevo.com/)", note="
Soon to become the international version with more translations.
") }}
* [Serbian version](https://pismaizsarajeva.com/)

There is almost no JavaScript at all, except [the fix for vh units](/blog/mobile-chrome-vh-units-fix/). I will probably sprinkle some JavaScript goodness, but only as a progressive enchainment. I don't want this to become a single page app.

Everything is deployed on Netlify's free plan.


## Contributing

If you want to contribute, help with translations or you just have a suggestion, please open an issue [here](https://github.com/Stanko/letters-from-sarajevo/issues) or leave a comment on this post. For translations, please note that each image has `alt` text as well.

I'm super happy to say, the website is already being translated to more languages. Special kudos to my colleague [Felipe](http://felipemedina.com.br/) who volunteered to provide Brazilian Portuguese translation.

Everything on the website, including the code, is under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license. I think the license is fair, as it allows people to share and adapt content as long the appropriate credit is given and it is for non-commercial purposes.

## Thank you

This project means a lot to my parents and myself. Please let us know if you enjoyed reading it and share it with your friends.
