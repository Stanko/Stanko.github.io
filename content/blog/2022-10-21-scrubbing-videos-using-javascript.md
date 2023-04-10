+++
title = "Scrubbing videos using JavaScript"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "video", "ffmpeg"]

[extra]
intro = "It is all about setting those keyframes."
image = "/img/video-scrubbing/cover.jpg"

+++

JavaScript part is actually pretty easy, it is more about preparing the video file correctly. If you just want the code for converting videos using ffmpeg, jump to [the last section](#prepare-videos-by-adding-more-keyframes).

Otherwise, let's start scrolling down to see these two videos scrubbing:

<div
  id="sticky-videos"
  style="
  display:flex;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  top: 10rem;
  margin: 0 -10rem 20rem;
  border-radius: 8px;
  padding: 0rem 10rem 10rem;
  background: var(--bg-color);
  transition: opacity 250ms;
  "
>
  <div style="max-width: calc(50% - 10rem);">
    <div style="padding-bottom: 4rem"><small>Every 5 frames</small></div>
    <video
      style="border-radius: 4px; background: #f7f7f7;"
      id="line-video-5"
      playsinline="true"
      muted="muted"
    >
      <source src="/videos/line-5.webm#t=0.001"></source>
      <source src="/videos/line-5.mp4#t=0.001"></source>
    </video>
  </div>

  <div style="max-width: calc(50% - 10rem);">
    <div style="padding-bottom: 4rem"><small>Every 100 frames</small></div>
    <video
      style="border-radius: 4px; background: #f7f7f7;"
      id="line-video-100"
      playsinline="true"
      muted="muted"
    >
      <source src="/videos/line-100.webm#t=0.001"></source>
      <source src="/videos/line-100.mp4#t=0.001"></source>
    </video>
  </div>
</div>

<script id="example-code">
  var video5 = document.querySelector('#line-video-5');
  var video100 = document.querySelector('#line-video-100');
  var stickyVideosElement = document.querySelector('#sticky-videos');
  var DURATION = 5; // videos are 5 seconds long

  function scrubVideos() {
    var time = window.scrollY * 0.005;

    video5.currentTime = time;
    video100.currentTime = time;

    // Hide video when scrolled after it ended,
    // and after it was in the viewport some more time
    if (time > DURATION * 1.25) {
      stickyVideosElement.style.opacity = 0;
      stickyVideosElement.style.pointerEvents = 'none';
    } else {
      stickyVideosElement.style.opacity = 1;
      stickyVideosElement.style.pointerEvents = 'all';
    }
  }

scrubVideos();
  window.addEventListener('scroll', scrubVideos, { passive: true });
</script>


Code used looks like this, it just updates `currentTime` based on window scroll. But the left video should work smoother than the right one. Depending on your browser, it can be more or less noticeable. The answer why it happens is **keyframes**.

```js
const video = document.querySelector('#video');

window.addEventListener('scroll', function() {
  video.currentTime = window.scrollY * 0.01;
});
```

## Keyframes

In video encoding, the keyframe is the full frame of the image in a video. Frames that are in between these keyframes (aka delta frames), contain only the difference between the previous (or the next) frame.

Number of keyframes will vary depending on how the video was created and encoded. Having each frame encoded as a keyframe would be very inefficient and the video file would be huge.

To display delta frames, video players decode the information and piece them together. Some players only do this when video is playing, but not when you are scrubbing through it. Because of that, and because it has way less keyframes, the right video feels much choppier than the left one.

The video on the right contains a keyframe every one hundred frames, while the one on the left has one keyframe every five frames. That is twenty times more keyframes. Naturally, it reflects on the file size. For this specific video, it is about five times more.

```sh
line-100.mp4    146 Kb
line-5.mp4      845 Kb # ~5 times more
line-100.webm   195 Kb
line-5.webm    1038 Kb # ~5 times more
```

## Browser support

Browsers behave radically differently. But if you provide them a correct video format with enough keyframes, you should be pretty well covered. You'll have to provide the video in at least two formats - `mp4` and `webm`.

On desktop, Safari seems to have the best support, followed by Chrome and Firefox in third place. I guess Edge will behave the same as Chrome, but I haven't tested it. Safari even works great with a low number of keyframes. It seems like it recreates all of the delta frames on the fly.

The left video works slightly smoother in Chrome than in Firefox, but the right one is choppy in both. For Firefox you'll have to provide `webm` because `mp4` is choppy even with an increased number of keyframes.

On mobile, Safari again works the best and it recreates the delta frames, although the right video is not as smooth on my iPhone mini. Chrome on Android works as expected, but please bear in mind that older devices might struggle, not because of the number of keyframes, but because of lack of CPU power.

Because Firefox is choppy with `mp4` and iOS Safari doesn't like `webm` we need to provide both file types.

## Prepare videos by adding more keyframes

For anything video related I reach out to [FFmpeg](https://ffmpeg.org/). It is a swiss-knife for video converting, recording and streaming.

These are minimal commands that convert a video and set a specific number of keyframes (for both `mp4` and `webm` formats). The key is part highlighted in blue, which tells ffmpeg how often to create keyframes.

**.webm**
<pre style="color: #dcdfe4; border-radius: 4px;">
ffmpeg -i input-video.mp4 -vcodec libvpx-vp9 <span style="color: var(--theme-color)">-g 10</span> -acodec copy output-10.webm
</pre>

**.mp4**
<pre style="color: #dcdfe4; border-radius: 4px;">
ffmpeg -i input-video.mp4 -vcodec libx264 <span style="color: var(--theme-color)">-x264-params keyint=10:scenecut=0</span> -acodec copy output-10.mp4
</pre>

These examples create a keyframe every ten frames, but you can experiment and find the value which works the best for you, balancing smoothness and the file size.


## P.S.

Fun fact, the example video in this post was generated using JavaScript.

For this post, I needed a freely licensed video, haven't found one quickly and decided to generate my own. I used [Remotion](https://www.remotion.dev/), a library which allows you to render your React components as a video. Under the hood, it uses puppeteer and ffmpeg, while providing easy to use components and user interface.

My video is actually generative, and it uses simple math and simplex noise to create the movement of the line. Here are some stills for different random seeds:

{{ image(
  src="/img/video-scrubbing/stills.png",
  alt="Stills from unused generative videos",
  size="md"
) }}
