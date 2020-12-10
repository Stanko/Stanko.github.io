---
layout: post
title: Add git version tag after publishing to npm
category: [JavaScript]
tags: [npm, js, git]
redirect_from: "/add-git-version-tag-after-publishing-to-npm/"
---

## TL;DR

If you just want to add git version tag after `npm publish` add this to your `package.json`:

```
"postpublish" : "PACKAGE_VERSION=$(cat package.json | grep \\\"version\\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags",
```

I advise you to read rest of the post to see what this code does. Because blindly coping code from the internet is probably not the smartest thing to do.

![Git tags are used as releases on GitHub](/public/img/tags-on-github.png)

<!--more-->

## Detailed explanation

I maintain couple of npm packages, and I wanted to add git tags for every version I publish to npm. It makes things easier to find, and GitHub lists all of them on "Releases" page.

First thing to solve was to extract current version from `package.json`. I found a snippet on the internet and modified it slightly.

This piece of bash code prints out
<label class="SideNote-trigger">version</label>
<small class="SideNote">
e.g. `1.0.0` or `0.1.15`
</small>
from `package.json`.
It looks complicated, but don't worry, I explained everything bellow.

```sh
PACKAGE_VERSION=$(cat package.json \
  | grep \"version\" \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo $PACKAGE_VERSION
```

I wasn't sure what certain lines do, so I did
<label class="SideNote-trigger">some research</label>
<small class="SideNote">
Again, I don't like blindly pasting code snippets I find on the internet. You should be careful with that.
</small>
and here is code explained.

```sh
# prints whole package json
cat package.json

# filters lines with "version" in them (can be multiple lines)
grep \"version\"

# pulls only the first line (leaves us with "version": "2.0.3",)
head -1

# splits string by ":" and prints the second part (leaves us with "2.0.3",)
awk -F: '{ print $2 }'

# removes " and , (leaves us with 2.0.3)
sed 's/[",]//g'

# removes any leftover spaces and new lines
tr -d '[[:space:]]'
```

## Add it to package.json

To automate this and add tag after every publish to npm, we'll use `postpublish` script. It is supported by npm, and it will be executed after every `npm publish`.

Only thing left to do is to add tag and push it to origin. I added letter `v` in front of version number (to make tag prettier).

```sh
git tag v$PACKAGE_VERSION
git push --tags
```

After we put everything to one line (and escape quotes) it looks like this:

```
"postpublish" : "PACKAGE_VERSION=$(cat package.json | grep \\\"version\\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags",
```

Add it to `"scripts"` in you your `package.json`. And that's it, every time you do `npm publish` this script will add version tag and push it to origin.
