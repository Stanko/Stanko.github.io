---
layout: post
title: CSS only elastic hover effect
category: [CSS/SASS]
tags: [css]
redirect_from: "/elastic-hover-effect"
---

Some CSS fun. Lately I've stumbled upon couple of websites with elastic hover effect on buttons.
Each one was using SVG morphing, which is fine, but I was wondering how hard would it be to implement it in CSS.

It ended up up being pretty easy.

<iframe
height='500px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/VXPeoP/?height=500&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/VXPeoP/'>Elastic hover effect (CSS only)</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!--more-->

I created four
<label class="SideNote-trigger">
pseudo elements
</label>
<small class="SideNote">
Only two pseudo elements (`::before` and `::after`) can be created per element,
therefore each button has one additional div inside it.
</small>.
Each of these is ellipse, running along one edge of the button.
By default these are scaled to zero by relevant axis.
On hover, they scale back to their full size.

For effect, whole button zoom in a little bit.
Combine all of that with custom elastic bezier easing, and it looks quite convincing.
Wireframe version is included as well, to make it easier to see how it works.
