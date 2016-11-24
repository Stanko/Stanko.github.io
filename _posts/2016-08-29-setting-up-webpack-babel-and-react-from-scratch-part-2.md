---
layout: post
title: Setting up Webpack, Babel and React from scratch - Part 2
category: [JavaScript, React]
---

## Part two

Update: Part two is pretty much done. Part three will cover redux and production builds.

Other parts:

* [Part 1](/setting-up-webpack-babel-and-react-from-scratch) - Webpack, Babel, React, Router, ESLint
* Part 2 - SASS, More ES6 goodness (Static props, decorators, deconstruction...)
* [Part 3](/setting-up-webpack-babel-and-react-from-scratch-part-3) - Where to go from here

## Adding SASS

We will use SASS loader for webpack, so let's install it together with node-sass compiler,
 css and style loaders

    npm install --save-dev style-loader css-loader sass-loader node-sass

Create `scss` folder in the `app` folder, and main `app.scss` file in it.
This file will include all of the other scss files.

Now we need to add a loader to webpack config file.

<!--more-->

```
...
{
  test: /\.scss$/,
  loader: 'style!css!sass'
}
...
```

This will handle importing SCSS files in our JavaScript code.
So we need to import `app.scss` manually in the JavaScript code.
You'll need to add only one line to your `app.js`.

    import '../scss/app.scss';

This includes your styles by calling loaders we defined in the webpack config.

Restart your webpack, and voala, now we have styles and hot reloading for them.
Try changing your styles to check it.

### Source maps

To enable source maps, we'll pass the `sourceMap` option to the sass and the css loaders.
Enable devtool, and update the loader

```
...
  devtool: 'inline-source-map', // or 'source-map'

  module: {
    loaders: [
      ...
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap',
      }
    ]
  }
...
```

If you want to read more, here's link to the
[official documentation](https://github.com/jtangelder/sass-loader)

### Autoprefixer

Always use autoprefixer - I can't stress this enough.

We'll need postcss loader, precss and autoprefixer

    npm install --save-dev postcss-loader precss autoprefixer


At the top of our webpack config, require precss and autoprefixer

```
const precss = require('precss');
const autoprefixer = require('autoprefixer');
```

Update our sass loader config and and postcss config

```
...
  module: {
    loaders: [
      ...
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap',
      }
    ]
  },

  postcss() {
    return [autoprefixer, precss];
  },
...
```

Restart webpack, and you should have autoprefixing in place.
Try adding `display: flex` to one of the elements to check if autoprefixer added
`-ms-display: flex` and `-webkit-display: flex`.

Again here's link to the [official documentation](https://github.com/postcss/postcss-loader)

## Method shorthand

Note that

<pre>
{
  ...
  postcss() {
    return [autoprefixer, precss];
  }
}
</pre>

is the same as

<pre>
{
  ...
  postcss: function () {
    return [autoprefixer, precss];
  }
}
</pre>

but only using [method shorthand](http://eslint.org/docs/rules/object-shorthand).
ES6 rules!

## More ES6 stuff

To be able to use deconstruction (`...object`), static class properties and decorators (`@connect`) we need to add
a couple of Babel plugins.

Install them using following command

    npm i --save-dev babel-plugin-syntax-decorators babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-preset-stage-0

Few links to read more about this plugins:

* [Synthax only for decorators](https://babeljs.io/docs/plugins/syntax-decorators/)
* [Decorators plugin](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
<small>
\- We are using a 3rd party plugin as "Decorators are disabled in Babel v6, pending a proposal update".
Read more on the first link.
</small>
* [Static properties](https://babeljs.io/docs/plugins/transform-class-properties/)
* [Stage 0 (plugin group)](https://babeljs.io/docs/plugins/preset-stage-0/)



Now we need to add it to our Babel configuration. Open your `.babelrc` file and add them.

Add these to the `"plugins"` array

    "syntax-decorators"
    "transform-decorators-legacy"
    "transform-class-properties"

And `"stage-0"` to the `"presets"` array

Your `.babelrc` should be looking something like this

    {
      "plugins": [
        "syntax-decorators",
        "transform-decorators-legacy",
        "transform-class-properties"
      ],
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ]
    }
