+++
title = "Fix for Chrome not rendering 1px borders"
aliases = ["/fix-for-chrome-not-rendering-borders/"]

[taxonomies]
category = ["CSS/SASS"]
tags = ["css", " chrome"]

[extra]
comments = [
  "comments/fix-for-chrome-not-rendering-borders/1581244038436.toml",
  "comments/fix-for-chrome-not-rendering-borders/1581712268030.toml",
  "comments/fix-for-chrome-not-rendering-borders/1584106800453.toml",
  "comments/fix-for-chrome-not-rendering-borders/1595182482181.toml"
]

+++

This happened to me couple of times - borders would just randomly disappear in Chrome. All other browsers render them normally, but they just vanish in Chrome, on some screen sizes. Resizing helps sometimes, but I never was able to catch real pattern for reproducing.

If this ever happens to you, there is a (hacky) solution.
Change border width from `1px` to `thin`.

```css
border: 1px solid #000;
/* change it to: */
border: thin solid #000;
```

Although I don't like it, as it is a hacky workaround and I don't really understand why it works, it does solve the issue.

It seems that I'm not the only one having [this problem](https://productforums.google.com/forum/#!topic/chrome/r1neUxqo5Gc).
