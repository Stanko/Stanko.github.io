+++
title = "SASS random() and circle animation"
aliases = ["/sass-random-and-circle-animation/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["css"]

[extra]

+++

I decided to move my CSS playground to the CodePen, and this is the first one I made.

Idea came to me while I was riding on a bus, and I might use it on this blog,
as a part of it's redesign.

This is CSS only animation (I used JS to create 50 elements though).
And you can see the usage of SASS `random()` function.

<!-- more -->

{{ codepen(
  id="VKkaJB",
  title="Circle Logo Animation",
  height=400
) }}

`random()` will return random integer between 1 and `n`, where `n` is the number you pass to it.
Default param is 100.

Note that random does not return 0.

To get different random ranges just add or subtract your base.

This will return number between 11 and 20.

```scss
$random-number: random(10) + 10;
```

Same thing with negative numbers, this one covers the range between -10 and 10.

```scss
$random-number: random(21) - 11;
```

Something to have in mind, new random numbers will be generated on every SASS compilation.
But once generated, CSS will stay static, until the next compilation.
