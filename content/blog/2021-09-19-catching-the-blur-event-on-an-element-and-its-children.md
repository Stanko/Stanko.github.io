+++
title = "Catching the blur event on an element and its children"

[taxonomies]
category = ["JavaScript"]
tags = ["react", "event", "blur", "js"]

[extra]

+++


Recently I implemented a fly out menu in React, and stumbled on the following problem - I had to catch a blur event on the menu, but it had multiple focusable children. When user is tabbing between these menu items, blur event is triggered every time on the parent, followed by the focus event on the next item. As I wanted to close the menu on blur, this would close it before user was able to get to the next menu item.

<!-- more -->

Solution is fairly simple and it is not React exclusive - it can be used with any other framework or vanilla JavaScript. The flow goes something like this:

* Listen to a blur event on the parent element (in my case it was the menu). This will catch blur event on all of its children too.
* In the handler, give browser time to focus the next element (by using `requestAnimationFrame`).
* Check if the newly focused element is in our parent element.
* If it is, do nothing, as focus hasn’t exited the parent yet.
* If it is not, we left the parent element completely and it is safe to do our blur logic (in my case, it was closing the menu).

Code looks like this:

```js
const handleBlur = (e) => {
  const currentTarget = e.currentTarget;

  // Give browser time to focus the next element
  requestAnimationFrame(() => {
    // Check if the new focused element is a child of the original container
    if (!currentTarget.contains(document.activeElement)) {
      // Do blur logic here!
    }
  });
};
```

## React component

I pulled out the logic and created a small React component:

```tsx
const ChildrenBlur = ({ children, onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e) => {
      const currentTarget = e.currentTarget;

      // Give browser time to focus the next element
      requestAnimationFrame(() => {
        // Check if the new focused element is a child of the original container
        if (!currentTarget.contains(document.activeElement)) {
          onBlur();
        }
      });
    },
    [onBlur]
  );

  return (
    <div {...props} onBlur={handleBlur}>
      {children}
    </div>
  );
};
```

and usage is pretty straight forward:

```tsx
<ChildrenBlur
  onBlur={() => {
    doSomethingCoolOnBlur()
  }}
>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</ChildrenBlur>
```

## Demo

To see it live check the demo on Codepen:

{{ codepen(
  id="NWgvOXp",
  title="React, blur on an element and its children",
  height=380
) }}

-----

I really like this technique, and I found it useful in multiple places like tooltips and dropdowns, where it can replace “outside click” listeners.
