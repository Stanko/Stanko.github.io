---
layout: post
title: JSON.stringify removes undefined and how to keep it
category: [JavaScript]
tags: [js, json]
redirect_from: "/json-stringify-removes-undefined"
---

This is something I keep rediscovering, because I keep forgetting it. `JSON.stringify` will omit all object attributes that are `undefined`.

In most cases, it doesn't really matter, because if we parse that string back, and try to access that attribute - it will be `undefined` by design. Check the example below:

```js
const user = { name: 'Stanko', phone: undefined };
user.phone; // -> undefined

const stringifiedUser = JSON.stringify(user); // -> "{\"name\":\"Stanko\"}"

const parsedUser = JSON.parse(stringifiedUser) // -> { name: "Stanko" }

// At the end it behaves the same
parsedUser.phone; // -> undefined
```

<!--more-->

### Why should we care then?

In most scenarios you shouldn't. But for me, one case keeps popping up - sending http requests. Request body is a string, so we need to stringify our data.

In certain cases we want server to be aware that some data has been explicitly removed, so it can be removed from the database as well. This is where dropping `undefined` can cause problems.

Few days ago, one of my clients had a question about [React Final Form](https://github.com/final-form/react-final-form). Problem was that Final Form returns `undefined` for the values that have been removed by the user. As you can imagine, this was a problem, when they stringified form values `undefined` fields were omitted and server wasn't aware that the field was removed.

## Using `replacer` parameter

Luckily `JSON.stringify` accepts  `replacer` function as a
<label class="SideNote-trigger">second parameter</label>
<small class="SideNote">
Third one is `space`, number of spaces or a string to be used for indentation
</small>.
Function accepts two parameters, current `key` and `value` being stringified. This allows us to replace any value, in our case `undefined`.

We just need to check if the value is `undefined` and return `null`:

```js
const user = { name: 'Stanko', phone: undefined };

const replacer = (key, value) =>
  typeof value === 'undefined' ? null : value;

const stringified = JSON.stringify(user, replacer); // -> "{\"name\":\"Stanko\",\"phone\":null}"
```

This is one example where replacer comes in handy. It can also be practical when stringifying complex objects and getting `TypeError: Converting circular structure to JSON`. It this case, we need to write custom replacer which will take care of circular references.

-----

This post ended up being a bit longer than I planned, but I hope it was useful.
