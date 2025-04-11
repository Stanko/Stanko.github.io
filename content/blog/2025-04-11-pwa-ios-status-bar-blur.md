+++
title = "Apply blur to <span>iOS status bar</span> in PWA"

[taxonomies]
category = ["CSS/SASS"]
tags = ["css", "ios", "blur", "pwa"]

[extra]
intro = "When using the \"black-translucent\" status bar style on iOS, content can blend into the status bar while scrolling beneath it. This simple CSS solution adds an overlay and applies a blur effect to prevent that."
image = "/img/ios-blur.png"
+++

<!--
import iosBlur from "./img/ios-blur.png";
import iosNoBlur from "./img/ios-no-blur.png";

<Img src={iosBlur} alt="Blurred iOS status bar after applying the technique in this post" />
<Img src={iosNoBlur} alt="Default, fully transparent iOS status bar" />
-->

On my current project, I'm making a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) (PWA) and I was really annoyed that the status bar on iOS was {{ sidenote(text="completely transparent", note="Although the option is called `black-translucent`") }}. When the content scrolls behind it, it blends with the status bar elements, and it doesn't look great.

I couldn't find a native solution, so I tried using CSS instead. To my surprise, my idea worked on the first try.

Here is my solution next to the default iOS status bar:

<div style="display: flex; gap: 16px;">

<div>

![Blurred iOS status bar after applying the CSS solution in this post](/img/ios-blur.png)
<small class="small">After applying the CSS solution</small>
</div>

![Default, fully transparent iOS status bar](/img/ios-no-blur.png)
<small class="small">Default</small>
</div>
<div>
</div>

If you are impatient, feel free to jump to [the demo](#demo).

## The solution

I think the solution is pretty simple - a fixed `div` that covers the status bar area and applies a blur effect to the background. But there's a catch, the `div` needs to be positioned outside of the viewport.


Here is the code, HTML first:

```html
<div class="statusbar"></div>
```

and the CSS:

```css
body {
  --bg-color: 186 230 253;
  background-color: rgb(var(--bg-color));
}

.statusbar {
  position: fixed;
  left: 0;
  right: 0;
  top: -60px;
  height: 60px;
  overflow: hidden;
  z-index: 100;
}

.statusbar::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 150%;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background-color: rgb(var(--bg-color) / 0.6);
}
```


The CSS can be even simpler - we can remove the ::before element and just apply the blur to the `.statusbar` element itself. But this gives a nicer, more natural blur effect - check Josh Comeau's  [blog post](https://www.joshwcomeau.com/css/backdrop-filter/) in which he explains it in detail.

## Demo

You can check [the live demo](https://muffinman.io/ios-statusbar-blur), just remember that you'll need an iOS device to see the effect. Not just that - for the effect to be visible, you'll need to add the app to your home screen.

If you don't want to bother, I recorded a video of the effect in action:

<video src="/img/ios-blur-demo-cropped.mp4#t=0.001" controls loop muted playsinline style="width: 100%; max-width: 375px; border-radius: 48px 48px 0 0; border: 1px solid var(--neutral-200)"></video>

Personally, I love that I was able to implement background color selector using CSS only, thanks to `:has` selector and CSS variables. But that is a topic for another post. If you are interested, you can see the code on [GitHub](https://github.com/Stanko/ios-statusbar-blur).

## Caveats

First, you'll have to use a solid color for native status bar background. Image background or gradient won't work.

Second, the statusbar overlay we added needs to be the same color as the background. Technically, it doesn't have to be, but here is what happens:

<video src="/img/ios-blur-mask.mp4#t=0.001" controls loop muted playsinline style="width: 100%; max-width: 375px; border-radius: 48px 48px 0 0; border: 1px solid var(--neutral-300)"></video>

The element is positioned outside of the viewport, right below the status bar. But it isn't visible until you start scrolling. Only then does iOS begin rendering the element, but only the part that overlaps with the page's content becomes visible.

It is somewhat hard to explain, it's like the content itself is masking the overlay, revealing it only as it scrolls underneath. Because the status bar picks up the body color, you are going to see the overlay unmasking as you scroll. This is only visible when the overlay is a different color than the body background.

When you read the paragraph above, watch the video one more time - I hope then everything will click together.

Last but not the least, we also want to apply some transparency to the overlay, otherwise the blur effect won't be visible. Play with opacity and blur values to find the one you like best.

I want to note that the method works well in both light and dark mode. iOS will automatically adjust the color of the status bar elements (like time and battery) to be visible on the background.

---

This ended up being a longer post than I expected. It is a very niche problem, but I hope it will help someone out there.
