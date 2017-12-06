---
layout: post
title: Simple JavaScript API wrapper
category: [JavaScript]
tags: [js]
---

For handling API calls I have a small snippet I'm copying from project to project.
I decided to clean it up, make more generic and share it.
It is intended to be a starting point, so you might want to customize it to your custom needs.

## What it does?

It is a simple wrapper around
<label class="SideNote-trigger">native `fetch`.</label>
<span class="SideNote">If you need a polyfill [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) is a great one.</span>

* For successful requests it will parse the response and return it.
* When
  <label class="SideNote-trigger">HTTP error occurs</label>
  <span class="SideNote">It detects errors based on request's HTTP status.</span>
  it will throw a custom error with status code, error message and
  response (parsed if it is a JSON).
* If request never gets resolved, same custom error will be thrown but
  response will be set to `null` and status code to `REQUEST_FAILED`.

Please note that function will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
so you need to handle how it resolves.

<!--more-->

## Code

It is written as a native ES2015 module, which means you may need to
transpile it depending on your browser support policy.

```js
// ------------------------------------------------------ //
// Simple JavaScript API wrapper
// https://stanko.github.io/simple-javascript-api-wrapper
// ------------------------------------------------------ //

// For demo purposes I'm using this awesome Star Wars API
const API_URL = 'https://swapi.co/api';

// Custom API error to throw
function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  // We are trying to parse response
  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  this.response = response;
  this.message = message;
  this.status = status;
  this.toString = function () {
    return `${ this.message }\nResponse:\n${ isObject ? JSON.stringify(this.response, null, 2) : this.response }`;
  };
}

// API wrapper function
const fetchResource = (path, userOptions = {}) => {
  // Define default options
  const defaultOptions = {};
  // Define default headers
  const defaultHeaders = {};

  const options = {
    // Merge options
    ...defaultOptions,
    ...userOptions,
    // Merge headers
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    },
  };

  // Build Url
  const url = `${ API_URL }/${ path }`;

  // Detect is we are uploading a file
  const isFile = options.body instanceof File;

  // Stringify JSON data
  // If body is not a file
  if (options.body && typeof options.body === 'object' && !isFile) {
    options.body = JSON.stringify(options.body);
  }

  // Variable which will be used for storing response
  let response = null;

  return fetch(url, options)
    .then(responseObject => {
      // Saving response for later use in lower scopes
      response = responseObject;

      // HTTP unauthorized
      if (response.status === 401) {
        // Handle unauthorized requests
        // Maybe redirect to login page?
      }

      // Check for error HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Get response as text
        return response.text();
      }

      // Get response as json
      return response.json();
    })
    // "parsedResponse" will be either text or javascript object depending if
    // "response.text()" or "response.json()" got called in the upper scope
    .then(parsedResponse => {
      // Check for HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Throw error
        throw parsedResponse;
      }

      // Request succeeded
      return parsedResponse;
    })
    .catch(error => {
      // Throw custom API error
      // If response exists it means HTTP error occured
      if (response) {
        throw new ApiError(`Request failed with status ${ response.status }.`, error, response.status);
      } else {
        throw new ApiError(error, null, 'REQUEST_FAILED');
      }
    });
};

export default fetchResource;
```

## Usage

`fetchResource` accepts two arguments, mandatory URL and optional options to be passed to the `fetch` request.
If you wrap each API request in a function with it's specific options it will be easier to maintain.

Few examples:

```js
// Simple get request
function getUsers() {
  return fetchResource('users');
}

// Post request with payload
function signIn(username, password) {
  return fetchResource('signin', {
    method: 'POST',
    body: {
      username,
      password,
    },
  });
}

// Put request, with file data and custom headers
function uploadAvatar(userId, file) {
  return fetchResource(`users/${ userId }/avatar/`, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });
}
```

Then you call newly created API functions,
they will return a Promise, so you need to define `then` (and `catch` for errors).

```js
getUsers()
  .then(userData => {
    // Do something with the "data"
  })
  .catch(error => {
    // Handle error
    // error.message (error text)
    // error.status (HTTTP status or 'REQUEST_FAILED')
    // error.response (text, object or null)
  })
```

### Demo

I've cooked a small demo to show it in practice, in which I used free [Star Wars API](https://swapi.co).

<iframe
height='400px'
scrolling='no'
src='//codepen.io/stanko/embed/preview/LOoPQp/?height=400&theme-id=light&default-tab=result' frameborder='no'
allowtransparency='true'
allowfullscreen='true'>
See the Pen <a href='http://codepen.io/stanko/pen/LOoPQp/'>Simple JavaScript API wrapper demo</a> by Stanko (<a href='http://codepen.io/stanko'>@stanko</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Feel free to play with it [on CodePen](https://codepen.io/stanko/pen/LOoPQp?editors=0110).
