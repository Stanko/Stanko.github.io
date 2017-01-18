---
layout: post
title: Deploying React (Router) app to the subfolder on server
category: [JavaScript, React]
---

If you ever had to deploy React Router app to the subfolder on the server, you know what the problem is.
Dev server will always launch app on the server root.
And routes will get messed up once you upload it to the server.
Here are two solutions I use in these cases.

## Easy way, just use `hashHistory`

The easiest way to achieve this is to use `hashHistory` instead of `browserHistory`.

```
import { Router hashHistory } from 'react-router';

<Router history={ hashHistory }>
  ...
</Router>
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

I define my routes something like this:

```javascript
const publicPath = '/path/to/subfolder/';

export const routeCodes = {
  HOME: publicPath,
  SEARCH: `${ publicPath }search`,
  ABOUT: `${ publicPath }about`,
};
```

Once uplodaded to the server any route but root one will return 404 error.
For example, in you try to open `http://yourserver.com/path/to/subfolder/about`,
server will look for file (or folder) named `about` in the app subfolder.
As it doesn't exist, it will just fail.

You'll need to add simple `.htaccess` file,
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

I'm also interested if anyone has different/better ideas, cheers!
