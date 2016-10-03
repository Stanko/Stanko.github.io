---
layout: post
title: Jekyll and Gulp workflow
category: [Jekyll, Gulp]
---

As you probably know this blog is powered by [Jekyll](http://jekyllrb.com/).
It is a really nice platform, but it lacks a few things I'm used to during development.
First one is live reload on file changes (and injecting CSS), using SASS, autoprefixer, ES6...

<!--more-->

I tried to find a boilerplate, but everything I found didn't match my needs.
Usually people would run gulp tasks for SASS and JavaScript files, and on change
run `jekyll build`, which is insanely slow.
They would use [BrowserSync](https://www.browsersync.io/) to serve `_site` folder.

So I did what programmers do - written my own. I quickly made usual gulp tasks:

* `styles` - to compile SASS and autoprefix it
* `scripts` - to transpile ES6 goodness, and concatenate JavaScript files
* `serve` - to start local server, watch for changes and auto reload

First thing I did is that I was running `jekyll serve` in one terminal,
and `gulp serve` with BrowserSync in the other.
This was working decently, but I wanted to run only one command, and let the tasks do everything for me.

That is where node child process comes in.

{% highlight javascript %}
import childProcess from 'child_process';

const spawn = childProcess.spawn;

gulp.task('jekyll', function (){
  const jekyll = spawn('jekyll', ['serve'], {
    stdio: 'inherit'
  });
});
{% endhighlight %}

This task * spawns a child process from gulp.
Nice thing is that we can start it, and gulp will kill it on exit.
Now we have up and running Jekyll server, and proxy it to BrowserSync.

But darn, injecting CSS files didn't really work. Server was expeting CSS file
to come from `/public/css/style.css`, but `browserSync.stream` in gulp pipe would
inject it from the `_sass` folder. I solved this by copying css file to the `.tmp/public/css` and
adding `.tmp` to the `serveStatic` option of the BrowserSync.

One thing I should mention, that I keep my SASS files in the `_sass` folder, and
JavaScript in the `_js` one.

1. Gulp watches changes on SASS/JS, and compiles them into `public` folder.
2. Then `jekyll serve` takes them and moves them to `_site`. Jekyll also takes care of `.md` files.
3. Gulp watches changes on `_site` and reloads the browser if html/js is changed.

Complete code is available [here](https://github.com/Stanko/Stanko.github.io).

<small>
* Actual taks is a bit more complicated, check the whole
[gulpfile](https://github.com/Stanko/Stanko.github.io/blob/master/gulpfile.babel.js).
</small>

------

### TL;DR

To enable live reload, SASS and JS transpiling in your Jekyll development grab my
[gulpfile.babel.js](https://github.com/Stanko/Stanko.github.io/blob/master/gulpfile.babel.js),
[package.json](https://github.com/Stanko/Stanko.github.io/blob/master/package.json)

Add this to your `_config.yml`
<pre>
exclude: [
  'node_modules',
  'gulpfile.babel.js',
  'package.json',
  '_sass',
  '_js',
  '.sass-cache'
]
</pre>

Run `npm install` then `gulp` when it is finished and open `http://localhost:9000` in your browser.
Then write your posts and enjoy much smoother workflow.
