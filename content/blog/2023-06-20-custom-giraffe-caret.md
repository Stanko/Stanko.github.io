+++
title = "Custom <span>giraffe</span> caret"

[taxonomies]
category = ["JavaScript"]
tags = ["css", "svg", "input", "giraffe", "caret"]

[extra]
intro = "I had some fun customizing HTML input caret and ended up with a tiny animated giraffe."
image = "/img/giraffe/thumb.png"
theme = "orange"

+++

<link rel="stylesheet" href="/posts/giraffe.css" />

Recently, a colleague asked me if there is a way to customize an input caret using CSS. I knew you could change the color of it, but it got me thinking if we could completely replace it. The problem seemed interesting to solve.

But before we jump into the implementation, allow me to show you what I built in the end.

{{ codepen(
  id="vYVyZzO",
  title="Custom Giraffe Caret",
  height=310
) }}

## Disclaimer

Please be aware that this is something I hacked together for fun, and it probably isn't accessible. You shouldn't use it in production. But I do hope it will inspire you to explore creative ways to use CSS and JavaScript.

## Idea

Only the [caret's color](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color) can be customized using CSS, which means we need to replace it with an element rendered at the exact same position. To do so, we need a way to determine the caret's position.

Luckily, the input has [selectionstart](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#selectionstart) and [selectionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#selectionend) properties. They represent the start and end positions of the text selection. If they have the same value, that means the caret is right there.

But it's somewhat difficult to measure the exact pixel value of `selectionstart` because it depends on the text size. However, we can cheat a little.

Instead of trying to measure and position the caret absolutely, I decided to clone the text from the input and position the custom caret right after it. The clone needs to be updated every time the caret moves or when the text in the input has changed. Finally, we need to put the clone over the input, and hopefully, things will align.

It is not the first time I've overlapped text over an input like this. Just a few years ago, this was a common way to create input placeholders.

## Anatomy

If we have an input with the text `Hello Friends!` and the caret positioned right after the word `Hello`, our HTML structure should look something like this:

```html
<!-- Original input -->
<input value="Hello World" />

<!-- Clone of the input's content with the custom caret squeezed in -->
<div>
  <span>Hello</span>
  <span class="caret"><!-- Giraffe goes here --></span>
  <span> Friends!</span>
</div>
```

As the caret moves, we need to keep copying the text from the input to the clone. Text before the caret is copied to the first span, and text after is copied to the last span.

The caret element is squeezed between these two spans, which makes it move and mimic the real caret's movement.

Hopefully a demonstration will make it more obvious and easier to understand:

<div class="giraffe">
  <input
    placeholder="Start typing..."
    value="Hello Friends!"
    type="text"
    class="giraffe-input"
  />
  <div class="giraffe-clone" aria-hidden="true">
    <div class="giraffe-content">
      <span class="giraffe-before"></span><span class="giraffe-caret"><svg xmlns="http://www.w3.org/2000/svg" width="264" height="211" fill="none" viewBox="0 0 264 211">
<rect width="3.941" height="10.515" x="105.576" y="8" fill="#835A3C" rx="1.97" transform="rotate(14.18 105.576 8)"/>
<path fill="#835A3C" d="M92.353 16.341c4.696-3.558 6.184-6.66 3.685-13.02a1.84 1.84 0 0 0-2.758-.841c-5.49 3.76-6.522 7.063-3.74 13.158a1.854 1.854 0 0 0 2.813.703Z"/>
<path fill="#F5B953" d="M124.574 19.677 96.681 15.1c-6.793-1.115-13.02 3.99-13.26 10.868-.229 6.539 5.073 11.933 11.616 11.816l28.261-.506a8.86 8.86 0 0 0 1.276-17.602Z"/>
<path fill="#F5B953" d="m83.5 27-3 102h-34c-15 0-21.5 9.5-21.5 21v11l1.936 50h7.741L37 161h2l1.935 50h7.742L51 161h19l1.936 50h7.741L82 161h2l1.936 50h7.741L96 161v-32l-2.5-96.5-10-5.5Z" clip-rule="evenodd"/>
<path fill="#4D5D7A" d="m26.548 201 .388 10h7.741l.465-10h-8.594ZM40.548 201l.387 10h7.742l.465-10h-8.594ZM71.548 201l.388 10h7.741l.465-10h-8.594ZM85.548 201l.388 10h7.741l.465-10h-8.594Z" clip-rule="evenodd"/>
<path fill="#835A3C" d="M86.648 21.154c1.403-5.722.602-9.068-5.346-12.43A1.84 1.84 0 0 0 78.63 9.81c-1.892 6.38-.61 9.594 5.392 12.572a1.854 1.854 0 0 0 2.626-1.227Z"/>
<rect width="3.941" height="10.515" x="99.576" y="8" fill="#835A3C" rx="1.97" transform="rotate(14.18 99.576 8)"/>
<circle cx="94" cy="25" r="4" fill="#4D5D7A"/>
<path stroke="#F5B953" stroke-width="6" d="M8 163.135c0-17 5.5-28.135 27.123-28.135"/>
<path fill="#835A3C" d="m13.029 163.331-3.286-2.551a3 3 0 0 0-3.603-.056l-3.624 2.634a3 3 0 0 0-1.034 3.511l3.336 8.604c.979 2.526 4.54 2.563 5.571.057l3.575-8.687a3.001 3.001 0 0 0-.935-3.512Z"/>
<path fill="#AF7142" d="M95.256 100.267C91.092 101.275 88 105.026 88 109.5c0 4.644 3.332 8.51 7.737 9.337l-.481-18.57ZM96 153.062a8 8 0 1 0-.37 15.914L96 161v-7.938ZM67.747 161A10.456 10.456 0 0 0 70 154.5c0-5.799-4.701-10.5-10.5-10.5S49 148.701 49 154.5c0 2.454.842 4.712 2.253 6.5h16.494Zm-42.437 7.998.19.002c5.799 0 10.5-4.701 10.5-10.5S31.299 148 25.5 148c-.145 0-.29.003-.433.009-.045.656-.067 1.32-.067 1.991v11l.31 7.998ZM36.01 131c1.686 3.547 5.301 6 9.49 6 4.938 0 9.079-3.408 10.2-8h-9.2c-4.126 0-7.608.719-10.49 2Zm45.968-52.258a8 8 0 1 0 .459-15.59l-.459 15.59ZM78 146a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"/>
<rect width="3.941" height="10.515" x="237.576" y="22" fill="#835A3C" rx="1.97" transform="rotate(14.18 237.576 22)"/>
<path fill="#835A3C" d="M224.352 30.341c4.697-3.558 6.185-6.66 3.686-13.02a1.84 1.84 0 0 0-2.758-.841c-5.49 3.76-6.522 7.063-3.739 13.158a1.853 1.853 0 0 0 2.811.703Z"/>
<path fill="#F5B953" d="M256.574 33.677 228.681 29.1c-6.792-1.114-13.019 3.99-13.26 10.868-.229 6.539 5.073 11.933 11.616 11.816l28.261-.506a8.86 8.86 0 0 0 1.276-17.602Z"/>
<path fill="#F5B953" d="m212.5 143 3-102 10 5.5L228 143v29l2.5 15.5-4.823 23.5h-7.742l3.565-21.5-5-14.5v12.5l-4.823 23.5h-7.742l3.565-21.5-3.565-14.5H185.5v12.5l-4.823 23.5h-7.742l3.565-21.5-4-14.5h-1v12.5l-4.823 23.5h-7.742l3.565-21.5-4-14.5-1-4.5s-.5-2.465-.5-6.5c0-11.5 6.5-21 21.5-21h34Z" clip-rule="evenodd"/>
<path fill="#835A3C" d="M218.648 35.154c1.403-5.722.602-9.068-5.346-12.43a1.84 1.84 0 0 0-2.672 1.085c-1.892 6.38-.61 9.594 5.392 12.572a1.855 1.855 0 0 0 2.626-1.227Z"/>
<rect width="3.941" height="10.515" x="231.576" y="22" fill="#835A3C" rx="1.97" transform="rotate(14.18 231.576 22)"/>
<path stroke="#4D5D7A" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M223 39h6"/>
<path stroke="#F5B953" stroke-width="6" d="M140 177.135c0-17 5.5-28.135 27.123-28.135"/>
<path fill="#835A3C" d="m145.029 177.331-3.286-2.551a2.999 2.999 0 0 0-3.603-.056l-3.624 2.634a3 3 0 0 0-1.034 3.511l3.336 8.604c.979 2.526 4.54 2.563 5.571.057l3.575-8.687a3.002 3.002 0 0 0-.935-3.512Z"/>
<path fill="#4D5D7A" d="M168.73 201h-8.137l-1.658 10h7.742l2.053-10ZM182.73 201h-8.137l-1.658 10h7.742l2.053-10ZM213.73 201h-8.137l-1.658 10h7.742l2.053-10ZM227.73 201h-8.137l-1.658 10h7.742l2.053-10Z" clip-rule="evenodd"/>
<path fill="#AF7142" d="M168.01 145c2.882-1.281 6.364-2 10.49-2h9.201c-1.122 4.592-5.264 8-10.201 8a10.503 10.503 0 0 1-9.49-6Zm-7.43 37.541L158.5 175l-1-4.5s-.5-2.465-.5-6.5c0-.671.022-1.335.067-1.991.143-.006.288-.009.433-.009 5.799 0 10.5 4.701 10.5 10.5 0 4.727-3.124 8.725-7.42 10.041ZM199.747 175H185.5v2.118a10.488 10.488 0 0 1-4.5-8.618c0-5.799 4.701-10.5 10.5-10.5s10.5 4.701 10.5 10.5c0 2.454-.842 4.712-2.253 6.5ZM228 167.062V172l1.699 10.533A8 8 0 1 1 228 167.062Zm-.744-52.795.481 18.57c-4.404-.827-7.737-4.693-7.737-9.337 0-4.474 3.092-8.225 7.256-9.233Zm-13.278-21.525.459-15.59a8 8 0 1 1-.459 15.59ZM210 160a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd"/>
</svg></span><span class="giraffe-after"></span>
    </div>
    <div class="giraffe-padding"></div>
  </div>
</div>

<label class="giraffe-checkbox-label">
  <input type="checkbox" class="giraffe-checkbox giraffe-checkbox--overlap" /> Overlap
</label>

## Tracking caret movement

The only thing left is to find a way to update the clone as the real caret moves in the input.

Firefox has an experimental event called [selectionchange](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/selectionchange_event). It fires when caret is moved, which is exactly what we need. Unfortunately, no other browser supports it. Since I never intended to use this code in production, I piled up all the events I could think of.

To hide and show the custom caret, we'll have to add `focus` and `blur` events (even when `selectionchange` is supported).

The final code looks like this:

```js
if (isSelectionChangeSupported()) {
  input.addEventListener("selectionchange", update);
} else {
  input.addEventListener("keydown", update);
  input.addEventListener("keyup", update);
  input.addEventListener("change", update);
  input.addEventListener("click", update);
  input.addEventListener("touchend", update);
}

input.addEventListener("focus", update);
input.addEventListener("blur", () => {
  wrapper.classList.remove("giraffe--caret-visible");
});
```

None of these events are perfect, and there is a slight delay. Personally, I don't mind it since the whole thing was meant to be fun and goofy.

And that is how one can add a dancing giraffe to an input. The implementation had a couple more of small gotchas, and if you are interested in them, I advise you to play with the code on [CodePen](https://codepen.io/stanko/pen/vYVyZzO).

## Lion?

Another colleague had a brilliant idea that I never implemented:

> Okay, hear me out, add a lion that gets closer to the giraffe as you reach the character limit for the text field

If you ever implement something like this, please let me know.

## Giraffe illustration

I searched for a simple giraffe drawing and found a very cute one, but I needed one with a longer and thinner neck to fit better as a caret. I redrew it for my caret purposes, and here are the source SVG files. Feel free to download and use them in your projects.

Base image which might easier to customize:

![Base vector image of the giraffe, wireframe and colored version](/img/giraffe/base.svg)

Animation keyframes:

![Giraffe animation keyframes](/img/giraffe/keyframes.svg)

---

I must admit, it took me quite a while to finish this post, spanning over a month. When posts stretch out like this one did, I find myself hesitating to publish them at all.

However, I believe there is value in sharing shorter "code nuggets," and in the future, I'll aim to do that more instead of always striving for elaborate and polished essays.

In the end, I hope you had just as much fun reading this post as I did creating it.

<script src="/js/posts/giraffe.js"></script>


