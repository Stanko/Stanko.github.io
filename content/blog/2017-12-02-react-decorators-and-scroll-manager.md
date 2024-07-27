+++
title = "React Window decorators"
aliases = ["/react-decorators-and-scroll-manager/"]

[taxonomies]
category = ["React"]
tags = ["react", "scroll"]

[extra]

+++

Two days ago I released two npm packages,
[window-scroll-manager](https://www.npmjs.com/package/window-scroll-manager) and
[react-window-decorators](https://www.npmjs.com/package/react-window-decorators).

## Scroll manager

{{ sidenote(text="Scroll manager", note="[Plx](https://muffinman.io/react-plx/) uses the
same scroll manager so I extracted it to the standalone package.") }}
 is just a simple wrapper around scroll event, that broadcasts custom
`window-scroll` event once per `requestAnimationFrame`.
Idea comes from [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/scroll#Example).

## React decorators

or higher order components are the bees knees,
as they bring easy way to track window scroll and resize events in React.
They will track and inject props directly into React components.
Check the [demo](https://muffinman.io/react-window-decorators/).

<!-- more -->

Two decorators included are:

### withScroll decorator

  tracks and injects window scroll position (by using scroll manager)

### withWindow decorator

  tracks and injects window size, orientation and
  {{ sidenote(text="breakpoint", note="User needs to pass breakpoints definition.") }}

### How do they work?

Both scroll and resize decorators are listening to custom events,
rather than the native ones. This is because both
{{ sidenote(text="`scroll` and `resize` events", note="Especially scroll event.") }}
are triggered a lot and can cause performance issues.

That's why I introduced custom `window-scroll` and `window-resize` events.
Plus, all updates are wrapped in `requestAnimationFrame` and resize event is
debounced (configurable, 250ms by default).

So the heavy lifting is done by scroll and window managers, which are both singletons,
while the React decorators are slim components that inject props to the wrapped component.

Please note that using `withScroll` on a lot of components
can introduce performance issues. Then again ten-ish should work just fine.
I used these on numerous projects, they are battle tested, but it took me
some time to put in the effort to release them as a standalone package.

## Check the code

Of course, both packages are available on GitHub:

* [Scroll manager](https://github.com/Stanko/window-scroll-manager)
* [React decorators](https://github.com/Stanko/react-window-decorators)
