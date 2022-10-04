## Must have

* use images from art, when displaying pieces in posts
* real breadcrumbs (instead of "back to art"), add on blog as well
* gallery - fix horizontal scrollbars for desktops

## Maybe / nice to have

* article tag for posts - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
* more categories?
* mention #debug in post
* spoiler and sidenote reveal animation
* mini game
* parallax
* clean up gallery/art-single SCSS (tall/wide)
* custom icons for photoswipe

## ffmpeg commands

```sh
# convert
ffmpeg -i video.mov -vcodec h264 -acodec copy video.mp4

# crop
ffmpeg -i video.mp4 -filter:v "crop=out_w:out_h:x:y" video-cropped.mp4

# levels
ffmpeg -i video.mp4 -vf pp=al video-levels.mp4
```

## Zola notes

### Debug `page` variable

```html
<pre style="padding: 20px; background: #f4f4f4; color: #111; font-size: 14px; overflow: auto; max-width: 100%">
  {{page | json_encode(pretty=true) | safe }}
</pre>
```
