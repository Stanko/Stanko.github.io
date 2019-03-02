---
layout: post
title: Hiding body scrollbars using CSS
category: [JavaScript]
tags: [css,scroll]
---

Let me start with a little disclaimer. Just because you can, doesn't mean you should use it. Hiding scrollbars can be bad for accessibility and user experience.

But there are rare cases where it makes sense, usually when you have scrolling effects or when modal is opened. So use it wisely.

Check [the demo](/public/demos/hide-body-scrollbars/). And find the cross browser code below:

<!--more-->

```scss
html,
body {
  /* Firefox */
  scrollbar-width: none;
  /* IE 10+ */
  -ms-overflow-style: none;
}

/* WebKit - Safari, Chrome, Opera */
body::-webkit-scrollbar {
  width: 0;
  height: 0;
}
```

Don't forget you can style scrollbars in webkit based browsers. Also you can use this code on any other element, not just body. Happy coding.
