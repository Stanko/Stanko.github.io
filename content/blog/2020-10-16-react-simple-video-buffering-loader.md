+++
title = "Simple video buffering loader in React"
aliases = ["/react-simple-video-buffering-loader/"]

[taxonomies]
category = ["React"]
tags = ["react", "video", "buffering", "loader", "js"]

[extra]
image = "/img/video-buffering.jpg"
+++

For multiple projects, I had to add a simple video component with
{{ sidenote(text="play/pause button", note="
Always include at least basic video controls for accessibility
") }}
and a buffering loader. It is not hard to detect the buffering state, but it can be tricky to get everything right.

Therefore, I created a simple component which I now copy from project to project with slight style adjustments. Jump to [the code](#code) if you are not interested in how it's made.

<!-- more -->

## Demo

Here you can see the final version (it might be easier to see the functionality if you <a href="https://codepen.io/stanko/pen/WNxwreJ" target="_blank">open it in a separate tab</a>).

<iframe
height='550px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/WNxwreJ/?height=450&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/WNxwreJ/'>React - Simple video buffering loader</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## How it works

The solution is simple and relies on four video events:

* `waiting` - playback has stopped because of a temporary lack of data
* `pause` - playback has been paused
* `play` - playback has begun
* `playing` - playback is ready to start after having been paused or delayed due to lack of data

We are going to use `waiting` event to set our loading flag to `true` and all other events to set it to `false`.

If the video is already playing, and buffering happens, we'll get events fired in this order:
```
"waiting"
"playing"
```

This is all fine and dandy, but if the video is paused, and we play it things get a little messy.
Now, if buffering happens, we'll get these events fired:
```
"play"
"playing"
"waiting"
"playing"
```

All of these events are fired in a very quick succession and alter the state too fast leading to some bad UX. The secret is to add a short debounce time to avoid it. What I found to work best is 200ms for `waiting` event and 50ms for all others.

## Code

I'm using React with hooks, but the same thing can be easily ported to React class or vanilla JavaScript.

```tsx
import React, { useEffect, useState, useRef } from 'react';

const PLAYING_DEBOUNCE_TIME = 50;
const WAITING_DEBOUNCE_TIME = 200;

const Video = ({ src, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const isWaitingTimeout = useRef(null);
  const isPlayingTimeout = useRef(null);

  const videoElementRef = useRef();

  useEffect(() => {
    if (!videoElementRef.current) {
      return;
    }

    const waitingHandler = () => {
      clearTimeout(isWaitingTimeout.current);

      isWaitingTimeout.current = setTimeout(() => {
        setIsWaiting(true);
      }, WAITING_DEBOUNCE_TIME);
    };

    const playHandler = () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      isPlayingTimeout.current = setTimeout(() => {
        setIsPlaying(true);
        setIsWaiting(false);
      }, PLAYING_DEBOUNCE_TIME);
    };

    const pauseHandler = () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      isPlayingTimeout.current = setTimeout(() => {
        setIsPlaying(false);
        setIsWaiting(false);
      }, PLAYING_DEBOUNCE_TIME);
    };

    const element = videoElementRef.current;

    element.addEventListener("waiting", waitingHandler);
    element.addEventListener("play", playHandler);
    element.addEventListener("playing", playHandler);
    element.addEventListener("pause", pauseHandler);

    // clean up
    return () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      element.removeEventListener("waiting", waitingHandler);
      element.removeEventListener("play", playHandler);
      element.removeEventListener("playing", playHandler);
      element.removeEventListener("pause", pauseHandler);
    };
  }, [videoElementRef]);

  const handlePlayPauseClick = () => {
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
      } else {
        videoElementRef.current.play();
      }
    }
  };

  return (
    <div className="SimpleVideo">
      <video {...props} ref={videoElementRef} src={src} className="SimpleVideo-video" />

      <button onClick={handlePlayPauseClick} className="SimpleVideo-playPause">
        {isPlaying ? "Pause" : "Play"}
        {isWaiting && <span className="SimpleVideo-loader">Buffering</span>}
      </button>
    </div>
  );
};
```
