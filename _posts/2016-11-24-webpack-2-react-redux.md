---
layout: post
title: React and Redux, Webpack 2 boilerplate
category: [JavaScript, React]
---

Currently, I'm working on a relatively small pet project.
While setting it up, I decided to extract a webpack boilerplate from it.

As whole JS community is moving really fast, I found very hard to
set everything up using Webpack 1.x. One package would ask to update the other,
that would break the third one, then that one... and so on.

Luckily, I was able to set everything up using Webpack 2.
It is still in beta, but I had no problems so far.

You can find the [boilerplate on GitHub](https://github.com/Stanko/react-redux-webpack2-boilerplate).

<!--more-->

## Implemented Features

* React
* React router
* Redux
* Redux Thunk
* Immutable reducer data
* Webpack 2 (development and production config)
* Hot Module Replacement
* Babel - static props, decorators
* SASS with autoprefixing
* Webpack dashboard
* Linting
* Included `es6-promise` and `isomorphic-fetch`
* File imports relative to the app root

### Planned features

* Redux Dev Tools
* Generating icon font from SVGs
* Preview production build
* Git hooks - lint before commit (or push)

### Future features
Universal may be added at some point.

* Universal rendering
* Server async data

## About

This boilerplate is a complete, but minimal React application.
It includes reducers (redux), actions (sync and async), routing, SASS...
My goal was to be ready immediately after cloning the repo (and running `npm i`).

My plan is to reuse this as much as possible.

It will updated so make sure you follow the [documentation on GitHub](https://github.com/Stanko/react-redux-webpack2-boilerplate).
