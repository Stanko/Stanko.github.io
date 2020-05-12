---
layout: post
title: Hack for iOS Safari to display the HTML video thumbnail
category: [Development]
tags: [html,video]
image: /public/img/ios-safari-video-thumbnail-hack.jpg
---

Mobile iOS Safari doesn't display preview thumbnail until you tap on the video. My go-to solution was to define a `poster` attribute and move on. But today I learned I could use something called [Media Fragments](https://www.w3.org/TR/media-frags/).

Media Fragments specify a way of sharing parts of audio and video files by simply adding url params. [Browser support](https://caniuse.com/#feat=media-fragments) varies, but fortunately support for what we need is pretty good.

<!--more-->

## Code

By simply adding `#t=0.001` at the end of the video file url, we are telling the browser to skip the first millisecond of the video. When you do this, even iOS Safari will preload and show that specific frame to the user.

So the code looks like this:

```html
<video>
  <source src="path-to-video.mp4#t=0.001" type="video/mp4" />
</video>
```

## Example

Please note that you need to check the example using iOS Safari to see the difference.

<div class="DualImage">
  <div>
    Without Media Fragments
    <video style="margin-top: 1rem; width: 100%" playsinline controls muted>
      <source src="/public/videos/video.mp4" type="video/mp4" />
    </video>
  </div>
  <div>
    With Media Fragments
    <video style="margin-top: 1rem; width: 100%" playsinline controls muted>
      <source src="/public/videos/video.mp4#t=0.001" type="video/mp4" />
    </video>
  </div>
</div>

It is a hacky solution, but I've tested it on desktop Firefox, Safari, Chrome, IE11 and Edge, as well as on iOS and Android phones and it works in all of those.
