+++
title = "How to update npm using nvm"
aliases = ["/nvm-updating-npm/"]

[taxonomies]
category = ["JavaScript"]
tags = ["js", "node"]

[extra]
comments = [
  "comments/nvm-updating-npm/1529251757552.toml",
  "comments/nvm-updating-npm/1540311911394.toml",
  "comments/nvm-updating-npm/1540312849491.toml",
  "comments/nvm-updating-npm/1576356454844.toml",
  "comments/nvm-updating-npm/1579977059042.toml",
  "comments/nvm-updating-npm/1580234411734.toml",
  "comments/nvm-updating-npm/1604739535446.toml",
  "comments/nvm-updating-npm/1604741142664.toml"
]

+++

If you are JavaScript developer and not using [nvm](https://github.com/creationix/nvm) you might want to look at it.
Node Version Manager is easy way to install, manage and work with multiple node versions.

Recently I got npm update notification, that looks something like this:

![npm update notification](/img/npm-update.png)

For some reason, when I had node installed through nvm, `npm i -g npm` didn't work. However, when I was using a "system" node version, installed from Node.js website, it did. I can't remember the exact error, but it was probably something with my `PATH` configuration.

So I tried to find a path where global packages are installed when using nvm. Once I found it, it was super easy to update `npm` in that specific folder.

```bash
# navigate to nvm's node lib folder
# (replace v8.4.0 with your version)
cd ~/.nvm/versions/node/v8.4.0/lib/

# update npm right there
npm install npm

# reopen your terminal
```

That's it. Great thing is that npm can update itself. And this works for any other global npm package.

Or, as suggested in the comments, just use nvm's command:
```
nvm install-latest-npm
```
