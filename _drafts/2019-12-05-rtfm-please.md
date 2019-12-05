---
layout: post
title: RTFM, please
category: [Rants]
tags: [rants, dev, javascript]
---

We got spoiled.

For almost any problem, quick internet search will give us a quick win. But a lot of the times, it won't help us understand the real underlying issue. This is completely fine if you are missing tiny peace of the puzzle. But unfortunately this often leads to us reinventing the wheel or giving us fake self confidence.

Don't get me wrong, I'm
<label class="SideNote-trigger">guilty of this</label>
<span class="SideNote">
I reimplemented redux-form's [Field Array](https://redux-form.com/8.2.2/docs/api/fieldarray.md/), because I haven't payed close attention to it's docs.
</span>
as well.


## Create React App

I'll take [](https://create-react-app.dev)
<label class="SideNote-trigger">Create React App</label>
<span class="SideNote">
Initially this post was called "Please read CRA documentation", but I realized this goes much deeper.
</span>
as an example.
I'm both doing a lot of React myself and helping people around me with it. There are just too many questions regarding React app setup, which are already explained in their documentation. Plus, when you search for answers, some are outdated or plain wrong.

- Can I use [absolute imports?](https://create-react-app.dev/docs/adding-images-fonts-and-files#adding-svgs)
- Can I [import SVG as a component?](https://create-react-app.dev/docs/adding-images-fonts-and-files#adding-svgs)
- How to [setup TypeScript?](https://create-react-app.dev/docs/adding-typescript) - a lot of people are not aware it is a built in feature now
- Can I [pre-render HTML pages?](https://create-react-app.dev/docs/pre-rendering-into-static-html-files)
- How to add [title and meta tags?](https://create-react-app.dev/docs/title-and-meta-tags)

... and much more

##

Next time, when you are reading documentation, learning a new pattern or paradigm, please take your time. Learn things properly, before jumping into your editor to start coding.
