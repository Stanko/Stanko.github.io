---
layout: post
title: Setting up Webpack, Babel and React from scratch - Part 2
category: [javascript, react]
---

<!--
TODO
webpack
devtool: 'source-map'

## SASS

    npm install sass-loader node-sass webpack --save-dev
-->

## Part two

Still WIP!

Check the other parts as well.

* [Part 1](/setting-up-webpack-babel-and-react-from-scratch) - Webpack, Babel, React, Router, ESLint
* Part 2 - More ES6 goodness (Static props, decorators, deconstruction...)

## More ES6 stuff

To be able to use deconstruction (`...object`), static class properties and decorators (`@connect`) we need to add
a couple of Babel plugins.

<!--more-->

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
