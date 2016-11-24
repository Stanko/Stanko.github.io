---
layout: post
title: Setting up Webpack, Babel and React from scratch
category: [JavaScript, React]
---

## This is a living guide

This is the first part of the guide that will be changed over time.
For now it covers Webpack, Babel (for ES6) and React with React Router.

Next parts will contain more stuff - static properties, decorators, SASS,
development and production configs, immutables... Also redux part should be updated really soon.

So stay tuned!

Other parts:

* Part 1 - Webpack, Babel, React, Router, ESLint
* [Part 2](/setting-up-webpack-babel-and-react-from-scratch-part-2) - SASS, more ES6 goodness (Static props, decorators, deconstruction...)
* [Part 3](/setting-up-webpack-babel-and-react-from-scratch-part-3) - Where to go from here

### Before we start

I'll assume that you have a basic knowledge of the unix terminal,
and that you have read what Webpack, Babel and React are.

## Webpack

For a start, install `node` and `npm` from [https://nodejs.org/en/](https://nodejs.org/en/).

<!--more-->

Make a git repo (this is optional, but recommended),
or create an empty folder. Navigate to it in the terminal.

Initialize npm (`package.json`) by running

    npm init

Now we can start adding npm packages.
Install babel core and it's loader for webpack.

    npm install --save-dev webpack webpack-dev-server


Tip: you can use `npm i` instead of `npm install`.

Create `app/js/app.js` with a simple `console.log('hello world');`.
This will be the entry point for webpack.

Now we need to create a webpack config file `webpack.config.js`.

Tip: you can create files by using touch command - `touch FILENAME`

{% highlight javascript %}
module.exports = {
  context: __dirname + "/app",

  entry: "./js/app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  }
};
{% endhighlight %}

It is important to understand what is going on so far.
This tells webpack that our main application file (`app.js`) is the entry point,
and bundled application should be outputted to the `dist` folder.

`__dirname` is the name of the directory that the currently executing script resides in.

Now we can run

    node ./node_modules/webpack/bin/webpack.js

It will generate `dist/app.js`.
(Tip: to be able to run `webpack` globally, you'll need to install it using `npm i --global webpack`. Then you can run it by using only `webpack`.)

## Babel

Noew can add Babel transpiler goodness.

Install babel core and it's loader for webpack and presets for ES6 (aka ES2015) and React

    npm i --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

Create `.babelrc` and add presets

```
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

Add js/jsx loader to your webpack config, as well as extensions we want to resolve (More about this later).

```
...
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
...
```

Webpack accepts the array of the loaders. Loader has a test for the filenames,
in our case it matches all of the `.js` and `.jsx` files.
Then it applies babel loader to it. Basically this will transpile our
fancy ES6 to ES5 which can be understood by browsers
(some browsers can execute ES6 already, but most of them still can't).

If you re-run our webpack command, nothing will change, yet.

## React

Install react and react DOM

    npm i react react-dom --save

Your `app.js` should look something like this. For this example we are just rendering main menu.
Later we'll replace that with react router component.

```
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Global/Menu.jsx';

ReactDOM.render(
  <Menu />,
  document.getElementById('app')
);
```

Now we can start adding react components. Create `app/js/components/Global/Menu.jsx`

```
import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        Main Menu
      </div>
    );
  }
}
```

## Index Page

Create index page in the `app` folder.

```
<!DOCTYPE html>
<html>
<head>
  <title>Your app name</title>
  <meta charset="utf-8">
</head>
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>
</html>
```

We'll need file loader for it

    npm install file-loader --save-dev

Update webpack config to add entry

```
...
  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  }
...
```

and add loader

```
...
  {
    test: /\.html$/,
    loader: "file?name=[name].[ext]",
  }
...
```

Now when we run webpack again, we'll get `index.html` and `app.js` in dist folder.

## Dev server and hot reload

Install webpack development server, and run it

    npm install --save-dev webpack webpack-dev-server
    node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js

(Tip: Same as with webpack, you can install it globally `npm i --global webpack-dev-server` and run it using `webpack-dev-server`.)

Now open `http://localhost:8080/` in your browser of choice. You should see your app.
Development server will watch for your changes and rerun the bundler.
Still we need to manually refresh the browser.

So let's add hot reloading.

    npm install react-hot-loader --save-dev

Update webpack js/jsx loader to use hot reloading

```
...
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ["react-hot", "babel-loader"],
  }
...
```

Now we need to add two more options when running dev server `--hot` and `--inline`.
We will also add `--history-api-fallback` which will be useful when we add react router.
This option tells server to fallback to `index.html` which will handle routing (as we are building single page app).

    node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --inline

Not only the hot reload watches the changes and updates the browser, but it injects the code and keeps the application state.
Note that not all modules can be replaced.
The code in `app/js/app.js` cannot be reloaded and will cause a full page reload but changing the children components will trigger a hot module replacement.

To make things easier, we'll add our script to the `package.json` file.

```
...
  "scripts": {
    "dev": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --inline --history-api-fallback"
  }
...
```

Now we can run only `npm run dev`

## ESLint

We are going to use AirBNB's set of rules for linting, as their standards are really good.
Also, creating eslint by hand would take a long time.

Pro tip: **ALWAYS LINT**. No matter what people say - **always use linters**.
You will catch errors earlier, and enforce your (the best) standards.

[https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

    npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint

Now we need to create `.eslintrc` that only needs extends param,
but if you want to customize it, add your rules to the `rules` object.
Personally I like single quotes more, and spaces in the react curly synthax.

You might have to restart your editor for changes to take effect.
For beginners I would recommend [Atom](https://atom.io/) editor.

```
{
  "extends": "airbnb",
  "rules": {
    "jsx-quotes": [2, "prefer-single"],
    "react/jsx-curly-spacing": [2, "always"],
    "react/prefer-stateless-function": [0]
  }
}
```

## React Router

Install it from the NPM

    npm install --save react-router

What we'll do is pretty much the same thing from the official getting started guide.

[https://github.com/reactjs/react-router/blob/master/docs/Introduction.md](https://github.com/reactjs/react-router/blob/master/docs/Introduction.md)


Your `app.js` should look like this. You'll have to create `App`, `Home` and `About` views.

```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Home from './views/Home';
import About from './views/About';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app')
);
```

And your `views/App/index.jsx` should like this. It is just a simple wrapper around your views.
It has simple menu so we can test routing. `chilren` prop is every child component that is passed to it.
In our case, children will be route that is matched in our `app.js`.

```
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        { children }
      </div>
    );
  }
}
```

## Redux

* Note that this part will be updated soon with more details.

Install redux

    npm i redux react-redux --save

To learn what redux is, the best place to start are lessons taught by the redux's creator himself, Dan Abramov.

[https://egghead.io/series/getting-started-with-redux](https://egghead.io/series/getting-started-with-redux)

And to add it to your React app, for now follow official documentation (more info coming soon);

[http://redux.js.org/docs/basics/UsageWithReact.html](http://redux.js.org/docs/basics/UsageWithReact.html)

## Nice to have

This is everything you need, following the best practices for react and javascipt development in general.
Beside that there is couple of more things, that I usually add to my projects.
Check it yourself, and add it if you thing these are useful to you.

##### Absolute path resolving

To be able to include your files with absolute paths you need to set root path.
(Example: `components/views/App` instead of `../../views/App`.)
In your webpack config, under resolve add `root` param. Note that you have add `path` at the top of the file.

```
const path = require('path');

...
resolve: {
  extensions: ['', '.js', '.jsx', '.json'],
  root: path.resolve(__dirname, './app/js'),
},
...
```

Using this will probably still give you linting errors in the editor, so we need to add
Install eslint import resolver package

    npm install --save-dev eslint-import-resolver-webpack

And add settings to your `.eslintrc`

```
...
settings: {
  "import/resolver": "webpack"
}
...
```
