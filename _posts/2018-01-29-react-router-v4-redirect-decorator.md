---
layout: post
title: React Router v4 redirect decorator
category: [React]
tags: [react,router]
redirect_from: "/react-router-v4-redirect-decorator"
---

React Router switched to component based routing starting with the version 4.
Redirects are now done by rendering a `Redirect` component,
<label class="SideNote-trigger">
like this:
</label>
<small class="SideNote">
Please note that you can use included [withRouter](https://reacttraining.com/react-router/web/api/withRouter)
decorator but it can cause update blocking and introduce side effects.
This is small subset of it.
</small>


```html
<Redirect to='/redirect-url-here' />
```

What I usually do is to keep `redirectTo` property in component's state.
To redirect, I set it to the URL I want to redirect to,
and render `Redirect` at the start of the `render` method:

<!--more-->

```js
render() {
  const { redirectTo } = this.state;

  if (redirectTo) {
    return <Redirect push to={ redirectTo } />;
  }

  return (
    <YourComponentHere />
  );
}
```

This approach works well, but I got tired of repeating the same code over and over again.
So I pulled the functionality to a decorator (higher order component if you prefer).


## Redirect decorator

I did exactly what I described above, and exposed `redirectTo` method
to a composed component.

```js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const withRedirect = ComposedComponent => class RedirectDecorator extends Component {
  state = {
    push: false,
    redirectUrl: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      redirectUrl,
    } = this.state;

    // If component is rendered on redirect page as well
    // (i.e. header or footer) it would cause redirect-loop
    // as "<Redirect />" is being rendered every time.
    // So we are resetting the state after redirect
    if (!prevState.redirectUrl && redirectUrl) {
      this.setState({
        push: false,
        redirectUrl: null,
      });
    }
  }

  redirectTo = (redirectUrl, push = false) => {
    this.setState({
      push,
      redirectUrl,
    });
  }

  render() {
    const {
      push,
      redirectUrl,
    } = this.state;

    if (redirectUrl) {
      return <Redirect push={ push } to={ redirectUrl } />;
    }

    return (
      <ComposedComponent
        { ...this.props }
        redirectTo={ this.redirectTo }
      />
    );
  }
};

export default withRedirect;
```

## Usage

Import newly added decorator and apply it to your component.
It will inject `redirectTo` to it's props,
and you can use it anywhere to redirect user to a new URL.

```js
import React, { Component } from 'react';
import withRedirect from 'path/to/redirect/decorator';

@withRedirect
export default class Example extends Component {
  handleClick = () => {
    const {
      redirectTo,
    } = this.props;

    redirectTo('/', true);
  }

  render() {
    return (
      <button onClick={ this.handleClick }>
        Take me home!
      </button>
    );
  }
}
```

First parameter is obviously a URL, and the second one is boolean `push`.
It is `false` by default and in that case redirect URL will replace the current URL
(user won't be able to get back to it by clicking browser back button).
When set to `true` it will push new URL to the history, leaving the old one as well.

Happy redirecting!
