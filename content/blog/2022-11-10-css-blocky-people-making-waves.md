+++
title = "CSS <span>blocky people</span> making waves"

[taxonomies]
category = ["CSS/SASS"]
tags = ["css", "sass", "3d", "waves", "blocky", "animation"]

[extra]
intro = "Stadium waves in CSS, just in time for the World Cup!"
image = "/img/blocky-people.png"

+++
<link rel="stylesheet" href="/posts/blocky-people.css" />

It all started with [the code challenge](/blog/weekly-code-challenge-spring-2021/) in our office. The weekly theme was **waves**, and I tried to think outside of the box. After dropping a few ideas, I remembered {{sidenote(
text="the waves people do on stadiums",
note="According to [Wikipedia](https://en.wikipedia.org/wiki/Wave_(audience)) these are known as Mexican or stadium waves"
)}}.

So I made waves using CSS only (code is available on [CodePen](https://codepen.io/stanko/pen/JjZKaWX)):

<div class="people-wrapper is-in-viewport">
  <div class="row">
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
  </div>
</div>

I started without a real idea on how to do it. Obviously, I needed to create some people and animate them. 3D people would be nice, but as this was a weekly code challenge, I had to keep it simple. Blocky people, similar to characters in Minecraft, seemed like a good idea. Making them using Three.js felt too obvious, as I wanted something a little bit more unconventional and fun.

CSS was definitely not made for something like this, which is why I wanted to try it out.

## Box

Blocky people are obviously made of blocks, so I needed to build some 3D boxes in CSS. There are many tutorials on creating a 3D box in CSS, so I'll try to keep this short.

We'll need six elements to use as sides of the box. Each side needs to be appropriately sized, rotated and translated into its place.

{{spoiler(text='
```html
<div class="box">
  <div class="front"></div>
  <div class="back"></div>
  <div class="right"></div>
  <div class="left"></div>
  <div class="bottom"></div>
  <div class="top"></div>
</div>
```
', show="Show HTML", hide="Hide HTML")}}

Here you can see the three steps in creating a CSS box:

* Size the sides appropriately
* Translate them into position
* Rotate them

<div class="boxes-wrapper is-in-viewport">
  <css-box class="box no-transform"></css-box>
  <css-box class="box no-rotation"></css-box>
  <css-box class="box"></css-box>
</div>

The box wrapper element is outlined in <span style="color: #e53f73">red</span> and sides are outlined in <span style="color: #356cde">blue</span>.

If you want to play with it, I created [a standalone CodePen](https://codepen.io/stanko/pen/BaWzLoE). As a bonus, here is [a three-sided prism](https://codepen.io/stanko/pen/gOmWLNE) as well.

## WebComponents

Each box consists of seven HTML elements (a wrapper and six sides). And each person ended up being built from twelve boxes and some additional wrappers. That means that each person requires a lot of HTML to be written.

To simplify things, we can use [WebComponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Web components are a pretty powerful tool, but in this case, we will only use their template capability.

To do so, we need to extend `HTMLElement` and set its `innerHTML` to include our box boilerplate code:

```js
// Box WebComponent
class Box extends HTMLElement {
  constructor() {
    super();

    this.innerHTML =
      `<div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="bottom"></div>
      <div class="top"></div>`;
  }
}

// Register out web component so we can use it as a <css-box> tag
window.customElements.define("css-box", Box);
```

Once we create our web component, we can simply use it like this:

```html
<css-box class="head"></css-box>
```

Very nifty, ain't it? If you inspect it, you'll see it contains six div elements we created.

## Person

Now we can finally build our first person! I already mentioned that it would consist of twelve boxes and some wrapper elements. The boxes are:

* Head
* Torso
* Arms, two segments each x2
* Legs, two segments each x2
* Feet x2

As with the box, we'll create `<css-person>` web component to reduce the HTML boilerplate.

{{spoiler(text='
```js
class Person extends HTMLElement {
  constructor() {
    super();

    this.innerHTML =
      `<div class="person-top">
        <div class="head-wrapper">
          <css-box class="head"></css-box>
        </div>
        <div class="arm">
          <css-box class="arm-top"></css-box>
          <css-box class="arm-bottom"></css-box>
        </div>
        <css-box class="torso"></css-box>
        <div class="arm arm-right">
          <css-box class="arm-top"></css-box>
          <css-box class="arm-bottom"></css-box>
        </div>
      </div>
      <div class="legs">
        <div class="leg leg-left">
          <css-box class="leg-top"></css-box>
          <css-box class="leg-bottom"></css-box>
          <css-box class="leg-shoe"></css-box>
        </div>
        <div class="leg leg-right">
          <css-box class="leg-top"></css-box>
          <css-box class="leg-bottom"></css-box>
          <css-box class="leg-shoe"></css-box>
        </div>
      </div>`;
  }
}

window.customElements.define("css-person", Person);
```
', show="Show css-person web component", hide="Hide css-person web component") }}

After rotating and putting all of the boxes in place, we end up with a sitting person:

<div class="people-wrapper people-wrapper-single">
  <css-person class="no-animation no-colors"></css-person>
</div>
<div class="rotation">
  <label for="r1">Rotation:</label>
  <input id="r1" value="60" min="0" max="360" type="range" class="rotation-input">
</div>

## Colors

I wanted to automate coloring instead of manually choosing colors for each person. For that, I reached out for SASS' `random` function. The function will return an integer between zero and the limit given.

We can use it to get a random index from an array like this:

```scss
// A list of colors
$colors: red, blue, yellow, green;

// Pick a random index between 0 and 3
$random-index: random(length($colors));
```

But that gives us an index and not the color. To pick a color value, we'll use `nth` function, which returns the nth item from the array. Putting it all together, it looks like this:

```scss
// A list of colors
$colors: red, blue, yellow, green;

// Picking one random color from the list
$color: nth($colors, random(length($colors)));
```

Actual code used looks like this:

{{spoiler(text='
```scss
$tshirt-colors: #9b59b7, #1abc9d, #e74c3c, #f1c40f, #3498db, #e67e22, #34495e;
$shoes-colors: #2b071f, #ffe600, #345, #ecf0f1, #0abde3, #6c5ce7;
$pants-colors: #1e3799, #198066, #510b6d, #2c3e50, #d35400, #95a5a6;
$skin-colors: #d8b997, #bb9472, #866946, #473a30;

@for $i from 1 through 10 {
  css-person:nth-child(#{$i}) {
    // For each person we select a random set of colors:
    $tshirt-color: nth($tshirt-colors, random(length($tshirt-colors)));
    $shoes-color: nth($shoes-colors, random(length($shoes-colors)));
    $pants-color: nth($pants-colors, random(length($pants-colors)));
    $skin-color: nth($skin-colors, random(length($skin-colors)));
  }
}
```
', show="Show SCSS", hide="Hide SCSS")}}

Unfortunately, SASS is not dynamic and all the randomness is executed once on the build time. When we refresh the page, the colors will stay the same. But if we compile SASS again, we will get a new set of color combinations. That's why I'm using a `@for` loop to generate a bunch of different color combinations.

You can see the result and loop through the generated combinations below:

<div class="people-wrapper people-wrapper-single">
  <css-person class="no-animation color-person person-1"></css-person>
</div>
<div class="rotation">
  <label for="r2">Rotation:</label>
  <input id="r2" value="60" min="0" max="360" type="range" class="rotation-input">
</div>
<button class="btn btn--sm btn--empty next-color" style="margin-top: 10rem">Next color combination</button>

## Animation

To figure out the moves, I looked at a video of people doing stadium waves.

At first glance, it might not look so, but animation code is reasonably simple. It is just a bunch of CSS transforms. To give you an idea, here is how arm segments are animated:

```scss
@keyframes arm-top {
  0% {
    transform: rotateX(-40deg);
  }
  50% {
    transform: rotateX(0deg);
  }
}

@keyframes arm-bottom {
  0% {
    transform: rotateX(40deg);
  }
  50% {
    transform: rotateX(0deg) translateZ(0em);
  }
}
```

All of the animations last for the same time, and they are looping indefinitely:

<div class="people-wrapper people-wrapper-single is-in-viewport">
  <css-person></css-person>
</div>
<div class="rotation">
  <label for="r3">Rotation:</label>
  <input id="r3" value="60" min="0" max="360" type="range" class="rotation-input">
</div>

## Putting it all together

We created a 3D box, assembled a person from a bunch of them, colored them and animated everything. All that is left to do is add more people and create wave delay animations for each subsequent person.

And here they are, behold the CSS people making waves:

<div class="people-wrapper is-in-viewport">
  <div class="row">
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
    <css-person></css-person>
  </div>
</div>
<div class="rotation">
  <label for="r4">Rotation:</label>
  <input id="r4" value="60" min="0" max="360" type="range" class="rotation-input">
</div>

### Bonus for the World Cup

This idea comes from a colleague of mine. When I shared it with him, he responded with this:

> Awesome!!<br/>
> This is great for the upcoming world cup!!<br/>
> You could integrate a live score and have two sides of fans - the one in the lead does the wave 😂

I didn't go that far with the live score, but I did some color theming to create international fans:

<div class="people-wrapper is-in-viewport">
  <div class="row">
    <css-person class="fan serbia"></css-person>
    <css-person class="fan serbia"></css-person>
    <css-person class="fan serbia"></css-person>
    <css-person class="fan serbia"></css-person>
    <css-person class="fan serbia"></css-person>
    <css-person class="fan serbia"></css-person>
  </div>
</div>

<div class="country-select">
  <div>Select a country to root for:</div>
  <label>
    <input type="radio" name="country" value="brazil"> Brazil
  </label>
  <label>
    <input type="radio" name="country" value="denmark"> Denmark
  </label>
  <label>
    <input type="radio" name="country" value="netherlands"> Netherlands
  </label>
  <label>
    <input type="radio" name="country" value="serbia" checked> Serbia
  </label>
  <label>
    <input type="radio" name="country" value="usa"> USA
  </label>
</div>

## Final thoughts

One note of performance - I limited demos to six people because if more are added, animations can get very choppy on older hardware and some browsers. Safari behaves the best, and it can handle the most people. That's why on the CodePen, I check for it and add more people on Safari for a better effect. Also, in the post, animations are paused when not in the viewport.

I made it year and a half ago and kind of forgot about it. So I owe big thanks to my colleague Stefan who inspired me to do the World Cup version and write this blog post.

It was super fun to make waves and write this blog post. This is the first time I tried making a more interactive article with multiple demos and controls. I really hope you like it!

<script>
class Box extends HTMLElement {
  constructor() {
    super();

    this.innerHTML =
      `<div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="bottom"></div>
      <div class="top"></div>`;
  }
}

window.customElements.define("css-box", Box);

class Person extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<div class="person-top">
      <div class="head-wrapper">
        <css-box class="head"></css-box>
      </div>
      <div class="arm">
        <css-box class="arm-top"></css-box>
        <css-box class="arm-bottom"></css-box>
      </div>
      <css-box class="torso"></css-box>
      <div class="arm arm-right">
        <css-box class="arm-top"></css-box>
        <css-box class="arm-bottom"></css-box>
      </div>
    </div>
    <div class="legs">
      <div class="leg leg-left">
        <css-box class="leg-top"></css-box>
        <css-box class="leg-bottom"></css-box>
        <css-box class="leg-shoe"></css-box>
      </div>
      <div class="leg leg-right">
        <css-box class="leg-top"></css-box>
        <css-box class="leg-bottom"></css-box>
        <css-box class="leg-shoe"></css-box>
      </div>
    </div>`;
  }
}

window.customElements.define("css-person", Person);

document.querySelectorAll(".rotation-input").forEach(function (input) {
  var peopleWrapper = input.parentElement.previousSibling;
  peopleWrapper.style.transform = `rotateY(${input.value}deg) rotateX(5deg)`;
  input.addEventListener("input", () => {
    peopleWrapper.style.transform = `rotateY(${input.value}deg) rotateX(5deg)`;
  });
});

var colorSetIndex = 1;
var colorPerson = document.querySelector('.color-person');
var colorButton = document.querySelector('.next-color');

colorButton.addEventListener('click', function() {
  colorPerson.classList.remove('person-' + colorSetIndex);
  colorSetIndex++;
  if (colorSetIndex === 11) {
    colorSetIndex = 1;
  }
  colorPerson.classList.add('person-' + colorSetIndex);
});

var fans = document.querySelectorAll('.fan');
var countryInputs = document.querySelectorAll('input[name=country]');
var selectedCountry = document.querySelector('input[name=country]:checked').value;

fans.forEach(function (fan) {
  fan.className = selectedCountry;
});

countryInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    fans.forEach(function (fan) {
      fan.className = e.target.value;
    });
  });
});

</script>

