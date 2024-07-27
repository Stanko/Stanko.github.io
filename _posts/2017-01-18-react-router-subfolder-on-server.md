---
layout: post
title: Deploying React (Router) app to the subfolder on server
category: [React]
tags: [react]
redirect_from: "/react-router-subfolder-on-server/"
---

* May 2018 - Updated to match React Router v4 API.
* September 2019 - Updated to match React Router v5 API, added React Create App part.

If you ever had to deploy React Router app to the subfolder on the server, you know what the problem is.
Routes will get messed up once you upload it to the server.
Here are two solutions I use in these cases.

## Easy way, just use `HashRouter`

The easiest way to achieve this is to use `HashRouter` instead of `BrowserRouter`.

```js
import { HashRouter, Route } from 'react-router-dom';

// Then in render
<HashRouter>
  <Route path='/' component={ Home } exact />
  <Route path='/about' component={ About } exact />
  {/*...*/}
</HashRouter>
```

This is the best approach if your subfolder name changes
(for example, if folder name is a build version).
But you'll have `/#/` included in the every URL.
If this bothers you, check the second solution.

<!--more-->

Example of the routes

* `http://yourserver.com/path/to/subfolder/`
* `http://yourserver.com/path/to/subfolder/#/about`
* `http://yourserver.com/path/to/subfolder/#/search`

## Hard way, setting base path by hand

If you want to keep browser history implementation, you'll need to change few things.
First, we need to update our routes to include full absolute path to the subfolder.

### Using React Router's `basename`

As Davis Cabral pointed out in the comments, instead of manually adding `publicPath`
to all routes, it can be achieved by using React Router's [basename](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md#basename-string) prop.

```js
import { BrowserRouter, Route } from 'react-router-dom';

// Then in render
<BrowserRouter basename='/path/to/subfolder/'>
  <Route path='/' component={ Home } exact />
  <Route path='/about' component={ About } exact />
  {/*...*/}
</BrowserRouter>
```

### Doing it by the hand

I define my routes something like this:

```javascript
const publicPath = '/path/to/subfolder/';

export const routeCodes = {
  HOME: publicPath,
  SEARCH: `${ publicPath }search`,
  ABOUT: `${ publicPath }about`,
};

// Then you can use them like this
// <Route exact path={ routeCodes.ABOUT } component={ About } />
```

### Setting up `.htaccess` file

Once uplodaded to the server any route (but root `/`) will return 404 error.
For example, if you try to open `http://yourserver.com/path/to/subfolder/about`,
server will look for file (or folder) named `about` in the app subfolder.
As it doesn't exist, it will fail with 404.

You'll need to add a simple `.htaccess` file,
in order to tell the server to fallback to our `index.html` file.
This is the same configuration we would use if the application was on the server root,
just with a different absolute path to our index file.

```
RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# Fallback all other routes to index.html
RewriteRule ^ /path/to/subfolder/index.html [L]
```

Now our example routes will look like this

* `http://yourserver.com/path/to/subfolder/`
* `http://yourserver.com/path/to/subfolder/about`
* `http://yourserver.com/path/to/subfolder/search`

### Notice about webpack's `output -> publicPath` configuration

If you are using `publicPath` in webpack's `output` object,
make sure you either remove it or update to match your server build path.
Removing it  is easier, as it will create relative links,
which should work with your new configuration.

```javascript
output: {
  publicPath: '/', // Remove, or update it
  path: './build',
  filename: 'app-[hash].js',
},
```

## Create React App

A lot of people are using Create React App. To deploy it in subfolder, you can set `homepage` in your `package.json`, for more details [check their documentation](https://create-react-app.dev/docs/deployment#building-for-relative-paths)

-----

I'm also interested if anyone has different/better ideas, cheers!
