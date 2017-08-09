---
layout: post
title: localStorage and sessionStorage in Safari's private mode
category: [JavaScript]
---

If you didn't know, in Safari's private mode both `localStorage` and `sessionStorage` are not working.
To be exact, Safari sets storage's limit to 0, so you can't write anything to it.
I keep forgetting this, until QA people report it at some point.

So I quickly wrote a small facade for it, which fails silently in this case.
That means it still doesn't work but it won't throw an error and break your application.

This is the version for `localStorage`, just replace it with `sessionStorage` if you need it.

```js
const LS_TEST_KEY = 'givewith-ls-test';
let isLocalStorageSupported = typeof localStorage === 'object';

// Try to
try {
  localStorage.setItem(LS_TEST_KEY, 'test');
  localStorage.removeItem(LS_TEST_KEY);
} catch (e) {
  isLocalStorageSupported = false;

  // If we get error that we exceeded storage's quota
  // but storage is still empty we are in private mode
  if (e.code === DOMException.QUOTA_EXCEEDED_ERR && localStorage.length === 0) {
    // Private mode
  } else {
    throw e;
  }
}

const LocalStorage = {
  getItem: (key) => {
    if (isLocalStorageSupported) {
      return localStorage.getItem(key);
    }

    return null;
  },

  setItem: (key, value) => {
    if (isLocalStorageSupported) {
      localStorage.setItem(key, value);
    }
  },

  removeItem: (key) => {
    if (isLocalStorageSupported) {
      localStorage.removeItem(key);
    }
  },
};


export default LocalStorage;
```
