+++
title = "Animate between two react components"
aliases = ["/animate-between-two-react-components/"]

[taxonomies]
category = ["React"]
tags = ["react", "animation"]

[extra]
comments = [
  "comments/animate-between-two-react-components/1509374148432.toml",
  "comments/animate-between-two-react-components/1509375270692.toml"
]

+++

Just a quick proof of concept I made for transitioning between two react components.
It animates height (of the parent) and fades components into each other.

{{ codepen(
  id="eGwNZd",
  title="React transition between two components",
  height=500
) }}

In `componentWillReceiveProps` it checks if `children` prop has changed.
When that happens, it will save currently rendered children and the height of the wrapper.

Then it will animate wrapper's height to a new component's height,
fade out previous component and fade in the new one.
Finally when animation is finished it will reset wrapper's height to `auto`.

I might release it as a standalone npm component, but it needs some polishing before I do so.
If you make use out of it, please share in the comments.
