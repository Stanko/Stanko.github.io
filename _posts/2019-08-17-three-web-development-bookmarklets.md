---
layout: post
title: Three web development bookmarklets
category: [Development]
tags: [js,css,bookmarklet]
redirect_from: "/three-web-development-bookmarklets"
---

Today I want to share three bookmarklets I love to use in development. You can add them to your browser, by creating a new bookmark and entering bookmarklet code instead of URL.
<label class="SideNote-trigger">Clicking on a bookmarklet</label>
<small class="SideNote">
I usually keep them in the bookmarks bar to make them easier to find.
</small>
, will run the code snippet on the page you are currently on.

For each bookmarklet I added a button to try it on this page.

<!--more-->

## Find elements causing horizontal scroll

I found this one long time ago, and I have been copy-pasting it to every new machine since. It is super practical and it will highlight and log all elements that are causing pesky horizontal page scroll.

```js
javascript:void(function () {
  var documentWidth = document.documentElement.offsetWidth;
  var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);

  while (treeWalker.nextNode()) {
    var rect = treeWalker.currentNode.getBoundingClientRect();

    if (rect.right > documentWidth || rect.left < 0) {
      treeWalker.currentNode.style.setProperty('outline', '1px dotted red', 'important');
      console.log(treeWalker.currentNode);
    }
  };
}());
```

One line version:

```js
javascript:void(function () { var documentWidth = document.documentElement.offsetWidth; var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT); while (treeWalker.nextNode()) { var rect = treeWalker.currentNode.getBoundingClientRect(); if (rect.right > documentWidth || rect.left < 0) { treeWalker.currentNode.style.setProperty('outline', '1px dotted red', 'important'); console.log(treeWalker.currentNode); } }; }());
```

<button class="CommentForm-sendButton" onClick="javascript:void(function () { var documentWidth = document.documentElement.offsetWidth; var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT); while (treeWalker.nextNode()) { var rect = treeWalker.currentNode.getBoundingClientRect(); if (rect.right > documentWidth || rect.left < 0) { treeWalker.currentNode.style.setProperty('outline', '1px dotted red', 'important'); console.log(treeWalker.currentNode); } }; }());">Horizontal scroll detection</button>

<small class="Small">Please note that my site has `overflow-x: hidden` on the content area.</small>

## Make page editable

This will set `contenteditable` to true, allowing you to edit any text on the page. You can do the same thing using developer tools, but this one is just a little bit faster (and easier for non-developers).

```js
javascript:void(function () {
  document.body.contentEditable = 'true';
  document.designMode = 'on';
}());
```

One line version:

```js
javascript:void(function () { document.body.contentEditable = 'true'; document.designMode = 'on'; }());
```

<button class="CommentForm-sendButton" onClick="javascript:void(function () { document.body.contentEditable = 'true'; document.designMode = 'on'; }());">Edit page</button>

## Toggle between RTL and LTR direction

Our QA team was doing this by hand when they wanted to test layouts for languages written from right to left. So I wrote them a tiny script to make it easier.

```js
javascript:void(function () {
  var html = document.querySelector('html');
  var dir = html.getAttribute('dir');

  if (!dir || dir == 'ltr') {
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('dir', 'ltr');
  }
}());
```

One line version:

```js
javascript:void(function () { var html = document.querySelector('html'); var dir = html.getAttribute('dir'); if (!dir || dir == 'ltr') { html.setAttribute('dir', 'rtl'); } else { html.setAttribute('dir', 'ltr'); } }());
```

<button class="CommentForm-sendButton" onClick="javascript:void(function () { var html = document.querySelector('html'); var dir = html.getAttribute('dir'); if (!dir || dir == 'ltr') { html.setAttribute('dir', 'rtl'); } else { html.setAttribute('dir', 'ltr'); } }());">Toggle between RTL and LTR</button>
