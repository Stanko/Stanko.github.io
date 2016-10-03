---
layout: post
title: Highlight variables in Atom, Babel template strings
category: [JavaScript, Development]
---

Atom [Babel](https://babeljs.io/) plugin doesn't highlight variables
in ES6 (ES2015) template strings.

You'll need to add this snippet to your Atom's `style.less`

{% highlight css %}
atom-text-editor::shadow .variable.js {
  color: #F8F8F2;
}
{% endhighlight %}

<img src="/public/img/template-string-vars.png" alt="ES6 template string with variable highlighted in Atom" class="margin-y-30">

In general, you can just inspect stuff in Atom, find out what classes
element are using, and then style it via CSS (LESS).
Just don't forget to add `atom-text-editor::shadow` before your rules.

If anyone is interested, I'm using [Monokai Seti](https://atom.io/themes/monokai-seti) theme.
