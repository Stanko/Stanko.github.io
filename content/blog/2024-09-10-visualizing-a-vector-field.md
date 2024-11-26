+++
title = "Visualizing a <span>vector field</span> streamlines"

draft = true

[taxonomies]
category = ["JavaScript"]
tags = ["vector", "js", "drawing", "generative", "vector-fields", "interactive"]

[extra]
theme = "blue"
intro = ""
# image = "/img/"

+++

<link rel="stylesheet" href="/posts/vector-field.css" />

## What is a vector field?

Vector fields are used in physics and engineering and it assigns a vector to every point in space. This might feel confusing, but I think it will be clearer when we draw one. If we display vectors as arrows we get this:

<div class="example example--what-is-vector-field">
<svg class="example__svg">
</svg>
<button class="btn btn--empty btn--xs example__regenerate-vectors">Regenerate field</button>
<button class="btn btn--empty btn--xs example__random-vectors">Random field</button>
</div>

If you think that it is looking like air or water flow, you are right. Among other things, vector fields are used for flow simulations.

<!-- Add note why we are using vector fields -->

## How to visualize a vector field

Technically we already saw one way of visualizing it. If we draw vectors in each point of the grid, it gives a pretty good idea of the flow direction and the speed.

## Drawing a single line

## Using random seed points
<!-- Allow overlaps -->

## Prevent overlaps

## Using normal points for seeds

<!-- Links -->

https://en.wikipedia.org/wiki/Vector_field

Streamlines
https://en.wikipedia.org/wiki/File:Cessna_182_model-wingtip-vortex.jpg


<!-- Bonus, not sure if I'm gonna make to this in this post -->

<script src="/js/posts/vector-field.js" type="module"></script>

