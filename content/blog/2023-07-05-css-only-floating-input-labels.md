+++
title = "CSS only <span>floating labels</span>"

[taxonomies]
category = ["SCSS/CSS"]
tags = ["css", "input", "placeholder", "clear"]

[extra]
intro = "We can detect if text input has value by using `:placeholder-shown` pseudo class. This little trick can then be used to create CSS only floating labels."
image = "/img/css-only-floating-label.png"

+++
<link rel="stylesheet" href="/posts/floating-labels.css" />

I recently learned about the pseudo CSS class [:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown). Obviously, it is a class that is added only when input placeholder is shown. But what that also means is that **the input is empty**:

```css
/* Input is empty */
input:placeholder-shown
```

By negating it with `:not()` we can detect if **the input has value**:

```css
/* Input has value */
input:not(:placeholder-shown)
```

I created a demo that uses these two CSS snippets to highlight input's current state. There is no JavaScript involved.

<div class="basic-demo">
  <input class="basic-input" placeholder="Placeholder" />
  <div class="basic-states">
    <div class="has-value">Input has value</div>
    <div class="is-empty">Input is empty</div>
    <div class="focused">Focused</div>
  </div>
</div>


## Real world use cases


I recently used this to conditionally display a clear button next to an input.
But it can also be used to create floating labels.

However, it's important to note that anything you want to style based on the input's state needs to be positioned after the input element.

#### Floating labels

For a floating label, the HTML structure should look something like this:

```html
<input />
<label>Floating label</label>
```

The floating label needs to be repositioned in two scenarios: when the input is focused and when it has a value.

```css
/* Input has value */
input:focus + label,
input:not(:placeholder-shown) + label {
  /* Move the label above the button and scale it down */
  transform: translateY(-100%) scale(0.75);
}
```

#### Clear button

Similarly, we'll put the clear button after the input:

```html
<input />
<button>Clear</button>
```

and hide it when input is empty:

```css
/* Input is empty */
input:placeholder-shown + button {
  /* Hide the clear button */
  display: none;
}
```

## Demo

Focus an input to make its label float, and type something to make the clear button appear.

<div class="input-wrapper">
  <input
    autocomplete="off"
    class="input"
    type="text"
    id="name"
    placeholder="Name"
  ></input>
  <label
    class="label"
    for="name"
  >
    Name
  </label>
  <button class="clear" aria-label="Clear input">
    <svg viewBox="0 0 16 16" width="12" height="12">
      <path d="M 1 1 L 15 15 M 1 15 L 15 1" fill="none" stroke-width="2" stroke="currentColor">
      </path>
    </svg>
  </button>
</div>

<div class="input-wrapper">
  <input
    autocomplete="off"
    class="input"
    type="email"
    id="email"
    placeholder="Email"
  ></input>
  <label
    class="label"
    for="email"
  >
    Email
  </label>
  <button class="clear" aria-label="Clear input">
    <svg viewBox="0 0 16 16" width="12" height="12">
      <path d="M 1 1 L 15 15 M 1 15 L 15 1" fill="none" stroke-width="2" stroke="currentColor">
      </path>
    </svg>
  </button>
</div>

You can also play with the code on [CodePen](https://codepen.io/stanko/pen/wvQoWdj?editors=1100).

## Safari gotcha

Be aware that in Safari the `:placeholder-shown` pseudo class will only be added if the input has the placeholder attribute explicitly defined.

Which means that we have to define it, but if we don't need the placeholder, we can easily hide it using CSS:

```css
input::placeholder {
  color: transparent;
}
```

<script>
  [...document.querySelectorAll('.clear')].forEach($clearButton => {
    const $searchInput = $clearButton.parentElement.querySelector('.input');

    $clearButton.addEventListener('click', () => {
      $searchInput.value = '';
      $searchInput.focus();
    });
  });
</script>


