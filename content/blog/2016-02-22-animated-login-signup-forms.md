+++
title = "Animated login and signup forms"
aliases = ["/animated-login-signup-forms/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["animation", "js", "css"]

[extra]

+++

Well I saw pretty nice mockup on [Dribbble](https://dribbble.com/shots/2311260-Day-1-Sign-Up-and-Login-Animated-Download-Template)
and decided to make it for fun. It didn't include mobile/responsive solution, so I came up with my own.

{{ image(
  src="/img/projects/animated-onboarding.png",
  alt="Animated onboarding demo",
  link="https://muffinman.io/animated-onboarding/",
  size="lg"
) }}

Check the [demo](https://muffinman.io/animated-onboarding/).

This is pure CSS solution - it uses `:target` selector for changing states.
Find more about `:target` on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:target).
This is neat, as it also can be bookmarked on both states, and browser button work too.

Grab the code on [GitHub](https://github.com/Stanko/animated-onboarding).
