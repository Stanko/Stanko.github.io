+++
title = "Change to position fixed on iOS Safari while scrolling"
aliases = ["/ios-safari-scoll-position-fixed/", "/ios-safari-scroll-position-fixed/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["css"]

[extra]
comments = [
  "comments/ios-safari-scroll-position-fixed/1484060263840.toml",
  "comments/ios-safari-scroll-position-fixed/1484231650351.toml",
  "comments/ios-safari-scroll-position-fixed/1484232994859.toml",
  "comments/ios-safari-scroll-position-fixed/1487227717258.toml",
  "comments/ios-safari-scroll-position-fixed/1488539059014.toml",
  "comments/ios-safari-scroll-position-fixed/1490903470516.toml",
  "comments/ios-safari-scroll-position-fixed/1490962944859.toml",
  "comments/ios-safari-scroll-position-fixed/1493983011897.toml",
  "comments/ios-safari-scroll-position-fixed/1493983624087.toml",
  "comments/ios-safari-scroll-position-fixed/1493985070599.toml",
  "comments/ios-safari-scroll-position-fixed/1498690039461.toml",
  "comments/ios-safari-scroll-position-fixed/1498741888873.toml",
  "comments/ios-safari-scroll-position-fixed/1504195773734.toml",
  "comments/ios-safari-scroll-position-fixed/1508260465013.toml",
  "comments/ios-safari-scroll-position-fixed/1514925607596.toml",
  "comments/ios-safari-scroll-position-fixed/1526117240639.toml",
  "comments/ios-safari-scroll-position-fixed/1526117853941.toml",
  "comments/ios-safari-scroll-position-fixed/1531144614465.toml",
  "comments/ios-safari-scroll-position-fixed/1544027562182.toml",
  "comments/ios-safari-scroll-position-fixed/1556020972457.toml",
  "comments/ios-safari-scroll-position-fixed/1560884555546.toml",
  "comments/ios-safari-scroll-position-fixed/1560887402898.toml",
  "comments/ios-safari-scroll-position-fixed/1565249485963.toml",
  "comments/ios-safari-scroll-position-fixed/1567741037373.toml",
  "comments/ios-safari-scroll-position-fixed/1572009346332.toml",
  "comments/ios-safari-scroll-position-fixed/1580739310056.toml",
  "comments/ios-safari-scroll-position-fixed/1609838617732.toml"
]

+++

If you ever had to fix element on scroll, you probably had an issue on iOS Safari (and other mobile devices).
Element will usually flicker, and disappear until scrolling has stopped completely.

Just force GPU acceleration by adding `transform: translate3d(0,0,0);` to your element.

You will have something like this:

```css
.Element-header {
  transform: translate3d(0,0,0);
}

.Element-header--fixed {
  top: 0;
  position: fixed;
}
```

Enjoy `¯\_(ツ)_/¯`

### Update, if the element inside fixed one flickers

In the comments Matt made a great tip, so I'm adding it here as well:

If you are styling the element within fixed element,
you need to apply the `translate3d` hack to the nested element
in order for it to not flicker/disappear.

Thanks Matt!
