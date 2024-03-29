+++
title = "CSS only elastic hover effect"
aliases = ["/elastic-hover-effect/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["css"]

[extra]

+++

Some CSS fun. Lately I've stumbled upon couple of websites with elastic hover effect on buttons.
Each one was using SVG morphing, which is fine, but I was wondering how hard would it be to implement it in CSS.

It ended up up being pretty easy.

{{ codepen(
  id="VXPeoP",
  title="Elastic hover effect (CSS only)",
  height=500
) }}

<!-- more -->

I created four
{{ sidenote(text="
pseudo elements
", note="
Only two pseudo elements (`::before` and `::after`) can be created per element,
therefore each button has one additional div inside it.
") }}.
Each of these is ellipse, running along one edge of the button.
By default these are scaled to zero by relevant axis.
On hover, they scale back to their full size.

For effect, whole button zoom in a little bit.
Combine all of that with custom elastic bezier easing, and it looks quite convincing.
Wireframe version is included as well, to make it easier to see how it works.
