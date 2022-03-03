+++
title = "JavaScript keyboard easter egg"
aliases = ["/javascript-keyboard-easter-egg/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", " svg", " keyboard"]

[extra]
image = "/img/keyboard.png"

+++


I love [easter eggs](https://en.wikipedia.org/wiki/Easter_egg_(media)#Software) in software.

You may have noticed the keyboard image in the background of my blog. This thing on the right side of the screen. Those with a keen eye figured out it highlights keys as you are typing. It has been here for some time now, and on my colleague's request, I'll explain how it works.

<!-- more -->

Let's break it down.

## Vector image

First I needed a vector (SVG) keyboard image. SVG images are easy to manipulate using JavaScript. I ended making [one](https://github.com/Stanko/Stanko.github.io/blob/master/_includes/svg/keyboard.svg) myself, by drawing over an image of the mac keyboard.

To target keys easily I added `id` to every key, and it looks something like this:

```html
<rect class="Key" id="Key--q" x="52" y="70" width="36" height="37" rx="6" />
<rect class="Key" id="Key--w" x="95" y="70" width="36" height="37" rx="6" />
<rect class="Key" id="Key--e" x="138" y="70" width="36" height="37" rx="6" />
<rect class="Key" id="Key--r" x="182" y="70" width="36" height="37" rx="6" />
<rect class="Key" id="Key--t" x="225" y="70" width="36" height="37" rx="6" />
<rect class="Key" id="Key--y" x="269" y="70" width="36" height="37" rx="6" />
```

## Key codes

You probably already know this, but `KeyboardEvent` has
{{ sidenote(text="[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) property.", note="
I just learned `keyCode` is deprecated in favor of [code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code). It is much better as it is not altered by keyboard layout or the state of the modifier keys. But it is not supported in Edge and IE, so I'll stick to `keyCode` in this post.
") }}
We are going to use this property to map physical key presses to keys in our image.

I found a detailed list of key codes, and created a large mapper based on it. Object keys are `keyCode` values and each one is mapped to the html `id` I set. For keys that exist on both side of the keyboard (shift, ctrl, cmd...) I added `checkSide` property. This property tells us to check which of the two is pressed, so we can highlight the correct one.


```js
const keyCodes = {
  8: {
    id: 'delete',
  },
  9: {
    id: 'tab',
  },
  13: {
    id: 'enter',
  },
  16: {
    id: 'shift',
    checkSide: true,
  },
  // ...
  // all the way to key code 255
};
```

## Logic

On both `keydown` and `keyup` we need to find the corresponding element on our vector keyboard, and add or remove the active class.

```js
document.addEventListener('keydown', function(e) {
  const keyElement = getKeyElement(e);

  // If element is found add the active class
  if (keyElement) {
    // I'm using setAttribute because IE doesn't support classList on SVG elements
    keyElement.setAttribute('class', 'Key Key--active');
  }
});

document.addEventListener('keyup', function(e) {
  const keyElement = getKeyElement(e);

  // If element is found remove the active class
  if (keyElement) {
    // I'm using setAttribute because IE doesn't support classList on SVG elements
    keyElement.setAttribute('class', 'Key');
  }
});
```

This is the function used for both events. It queries for the element based on the mapper and html `id`. It also takes in consideration `checkSide` flag to make sure key on the correct side is returned.

```js
function getKeyElement(e) {
  const key = keyCodes[e.keyCode];

  if (key && key.id) {
    let keySelector = `#Key--${ key.id }`;

    // Check which key is pressed if key exists on the both sides
    if (key.checkSide && KeyboardEvent) {
      if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        keySelector += 'Left';
      } else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        keySelector += 'Right';
      }
    }

    const keyElement = document.querySelector(keySelector);

    return keyElement;
  }
}
```

When window loses focus, keys would stay highlighted. To make sure that doesn't happen, on window blur we are going to remove all active classes from our keys.

```js
function removeActiveKeyClass() {
  const keyElements = document.querySelectorAll('.Key--active');

  for (let i = 0; i < keyElements.length; i++) {
    keyElements[i].setAttribute('class', 'Key');
  }
}

window.addEventListener('blur', removeActiveKeyClass);
```

Actual code used on this page is identical and you can find it [here](https://github.com/Stanko/Stanko.github.io/blob/master/js/keyboard.js
).

## Conclusion

When I initially decided to add an easter egg to my website, I was thinking of  using [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) or even creating a tiny video game. But in the end, I really loved the keyboard one, as it was easy to find and fun to play with.

And for the end, to see how everything fits together, I created a demo for you to play with:

<iframe
class='Block--lg'
height='450px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/KKwPJvL/?height=450&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/KKwPJvL/'>Keyboard easter egg</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
