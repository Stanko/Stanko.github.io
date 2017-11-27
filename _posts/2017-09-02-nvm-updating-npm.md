---
layout: post
title: How to update npm using nvm
category: [JavaScript]
tags: [js,node]
---

If you are JavaScript developer and not using [nvm](https://github.com/creationix/nvm) you might want to look at it.
Node Version Manager is easy way to install, manage and work with multiple node versions.

And I recently got npm update notification, that looks like this:

![npm update notification](/public/img/npm-update.png)

<small>This is image from the internet.</small>

nvm doesn't let you update only npm, but just a node+npm version. But there is a really easy way to do it:

```bash
# navigate to nvm's node lib folder
# (replace v8.4.0 with your version)
cd ~/.nvm/versions/node/v8.4.0/lib/

# update npm right there
npm install npm

# reopen your terminal
```

That's it. Great thing is that npm can update itself. And this works for any other global npm package.
