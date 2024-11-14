+++
title = "CSS fix to <span>prevent orphan icons</span> dropping to a new line"

[taxonomies]
category = ["Random"]
tags = ["css", "sass"]

[extra]
theme = "purple"
intro = "Kudos to whoever thought of including `text-wrap: balance` in the CSS specification."
+++

<link rel="stylesheet" href="/posts/text-wrap-balance.css" />

When an HTML element becomes too narrow, its content starts to wrap into multiple lines. This is intended behavior and works well in many cases. However, for short text, it doesn't look great when the last word or icon drops to the next line, becoming an *orphan*.

For example, you might see something like this:

<div class="demo-text demo-text-example">
Click here for more info<br/>
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="orphan-icon" aria-hidden="true" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>

It doesn't look great when the icon is left alone on its own row. Luckily, there's a simple CSS solution.

## Solution

Only thing we need to add is a single line of CSS:

```css
text-wrap: balance;
```

This property tells the browser to wrap the text in a way that best balances the number of characters on each line, enhancing layout quality and legibility. The browser will calculate this for us, preventing orphaned icons or words.

### text-wrap: pretty

There is also the [pretty](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap#pretty) value for text-wrap, which is even better. It works in a similar way, but the browser will use a slower algorithm that prioritizes better layout over speed.

Unfortunately, at the time of writing, `pretty` is not supported in Firefox nor Safari. However, you can define both values, and browsers that don't support `pretty` will fall back to `balance`.

```css
text-wrap: balance;
text-wrap: pretty; /* This will be ignored by browsers that don't support it. */
```

### Demo

Here's a simple demo. Use the handle on the right to resize the element and see how text breaks with and without the `balance` property applied.

<div class="demo">
<label>
<input type="radio" name="wrap" value="wrap" checked>
Default
</label>

<label>
<input type="radio" name="wrap" value="balance">
<code>text-wrap: <span>balance</span></code>
</label>

<label class="pretty-label">
<input type="radio" name="wrap" value="pretty">
<div>
<code>text-wrap: <span>pretty</span></code>
</div>
</label>

<div class="pretty-notice notice">
Unfortunately your browser doesn't support <code>text-wrap: pretty</code>.
</div>

<div class="demo-resize">
<div class="demo-resize-handle" title="Drag to resize"><span></span></div>

<div class="demo-text">
Click here for more info
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="orphan-icon" aria-hidden="true" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>

<div class="demo-text">
A somewhat longer text that will break into multiple lines
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="orphan-icon" aria-hidden="true" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
</div>
</div>
</div>


<script>
const radios = document.querySelectorAll('input[type=radio]');

const resizable = document.querySelector('.demo-resize');
const handle = resizable.querySelector('.demo-resize-handle');

radios.forEach((radio) => {
  radio.addEventListener('input', () => {
    if (radio.checked) {
      resizable.className = `demo-resize ${radio.value}`;
    }
  });
});

let startX;
let isDragging;
let resizeValue = 0;

function handleDragStart(e) {
  if (e.touches && e.touches.length > 1) {
    return;
  }

  if (e.clientX || (e.touches && e.touches[0])) {
    isDragging = true;
    document.body.classList.add('no-select');
    startX = e.clientX || e.touches[0].clientX;
  }
}

function handleDrag(e) {
  const isValid = e.clientX || (e.touches && e.touches[0]);

  if (isDragging && isValid) {
    let clientX = e.clientX || e.touches[0].clientX;
    const delta = clientX - startX;

    if (delta < 0 && resizable.clientWidth <= 100) {
      return;
    }

    resizeValue += delta;
    startX = clientX;

    resizable.style.width = `calc(100% + ${resizeValue}px)`;
  }
}

function handleDragEnd() {
  isDragging = false;
  document.body.classList.remove('no-select');
}

handle.addEventListener('mousedown', handleDragStart);
window.addEventListener('mousemove', handleDrag);
window.addEventListener('mouseup', handleDragEnd);

handle.addEventListener('touchstart', handleDragStart);
window.addEventListener('touchmove', handleDrag);
window.addEventListener('touchend', handleDragEnd);

</script>
