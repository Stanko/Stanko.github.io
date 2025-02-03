+++
title = "Change font-weight based on the user's screen DPI"

[taxonomies]
category = ["CSS/SASS"]
tags = ["dpi", "font", "progressive enhancement"]

[extra]
intro = "How to use CSS queries to target hi-DPI screens to progressively enhance your website."
image = "/img/font-size-dpi/zoomed-in.png"
+++

A lot of us as developers have hi-DPI screens, and we can easily forget to test the websites we build on low-DPI screens. One common issue I noticed is that thin font weights can be hard to read on low-DPI screens. Since there are fewer pixels to render details, fine lines can appear blurry due to anti-aliasing.

Here is an example of the same text rendered on two screens with different device pixel ratios. At the top is a hi-DPI screen (with a pixel ratio of 2), and below is a low-DPI screen (with a pixel ratio of 1).

The font used is Inter, 24px tall, with a font weight of 100.

![Comparison of the same text rendered on two screens with different device pixel ratios](/img/font-size-dpi/zoomed-in.png)

This problem is a great example of how we can use progressive enhancement to improve the user experience. We'll set a default font weight that is readable on low-DPI screens, then use CSS media queries to target hi-DPI screens and apply thinner fonts.

Here is a code example:

```scss
// Default font weight for low-DPI screens
h1 {
  font-weight: 300;
}

// Progressive enhancement for hi-DPI screens
// Making font thinner and more elegant
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  h1 {
    font-weight: 100;
  }
}
```

This will set the font weight to 300 on low-DPI screens and 100 on hi-DPI screens. Feel free to adjust these values as needed.

## Additional applications

This is an example using font weight, but you can apply the same technique to other properties, such as font size or icon line width.

## Simulating low-DPI on Mac

This is a great tip from [StackOverflow](https://stackoverflow.com/a/57606611):

* Open System Settings > Accessibility > Zoom > Advanced > Uncheck "Smooth Images"
* Zoom out your browser to 50%
* Turn on the system Zoom (the default shortcut is `Option + ⌘ + 8`)

This should give you a good idea of how your website appears on a low DPI screen.

Sorry, Windows and Linux users! If you have a good solution for your system, please open a GitHub issue, and I'll add it here.
