+++
title = "HTML <span>inert</span> property and React fallback"

[taxonomies]
category = ["React"]
tags = ["html", "react", "focus-trap", "javascript", "accessibility"]

[extra]
intro = "Relatively new HTML property which helps with creating focus traps."
image = "/img/inert.png"

+++

HTML [inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert) is a relatively new property, but it is supported in [all major browsers](https://caniuse.com/mdn-api_htmlelement_inert) since April this year.

When you set `inert` on an element, the browser will ignore all user events on it, including tabbing into elements. It will also hide it from screen readers. I like to think of it as a "reversed focus trap". But we can use it to create focus traps for modals by setting `inert` on the main content.

<div inert style="background: var(--neutral-50); color: var(--neutral-text); border-radius: 4px; padding: 20rem; padding-bottom: 25rem; font-size: 0.8em; border: 1px solid var(--neutral-100);">
  <p>
  This div has <code>inert</code> property set and if your browser supports it, you won't be able to interact with the button and link below.
  </p>
  <div>
    <button class="btn btn--sm btn--main">You can't click me</button>
    <a href="/" style="margin-left: 20px">Nor me!</a>
  </div>
</div>

## React fallback component


Before I learned about `inert`, I built a relatively simple component to achieve the same result.

Now I prefer to use the native solution, but on most projects, we still have to support older browsers. My approach is to handle it in the wrapper component, which finds all focusable elements and sets `tabindex="-1"`. After mounting, the mutation observer starts listening and re-sets the tabindex when content is changed.

The wrapper itself has `aria-hidden="true"`, which hides it from screen readers.

You can try it out on [CodePen](https://codepen.io/stanko/pen/VwRZeVN) and see the source code below:

{{spoiler(text='
```tsx
const focusableElementsSelector = [
  "a[href]",
  "input",
  "select",
  "textarea",
  "button",
  "audio[controls]",
  "video[controls]",
  "details > summary:first-of-type",
  "details",
  "[contenteditable]:not([contenteditable=\"false\"])",
  "[tabindex]:not([tabindex=\"-1\"])"
].join(", ");

const addTabIndex = ($wrapper) => {
  $wrapper.querySelectorAll(focusableElementsSelector).forEach(($element) => {
    $element.setAttribute("tabindex", -1);
  });
};
const removeTabIndex = ($wrapper) => {
  $wrapper.querySelectorAll(focusableElementsSelector).forEach(($element) => {
    $element.removeAttribute("tabindex");
  });
};

const Inert = ({ enabled, children, ...props }) => {
  const wrapperRef = useRef(null);

  const observerRef = useRef(
    new MutationObserver(() => addTabIndex(wrapper.current))
  );

  useEffect(() => {
    if (enabled) {
      if (wrapperRef.current) {
        // Add tabindex
        addTabIndex(wrapperRef.current);
        // Start observing
        observerRef.current.observe(wrapperRef.current, {
          childList: true,
          subtree: true
        });
      }
    } else {
      // Disconnect the mutation observer
      observerRef.current.disconnect();
      // And remove the attributes which we added
      removeTabIndex(wrapperRef.current);
    }
  }, [enabled, wrapperRef.current]);

  return (
    <div
      {...props}
      ref={wrapperRef}
      inert={enabled ? "" : null}
      tabindex={enabled ? -1 : null}
      aria-hidden={enabled}
      style={{
        pointerEvents: enabled ? "none" : null
      }}
    >
      {children}
    </div>
  );
};
```
', show="Show source code", hide="Hide source code")}}

### Drawbacks / edge cases

The component uses a pretty simple approach, and it doesn't handle some edge cases:

* The component doesn't check if elements already have the `tabindex` explicitly set.
* When the mutation observer triggers, it goes through all of the elements again.
* Depending on your needs, you might need to update `focusableElementsSelector`.

All of that is by design. I wanted to keep it simple to make maintenance easier. I think it is easier to alter specific details on a per-project basis.

For the same reasons, I won't publish it as a npm package. Releasing it as a package would require covering all of these cases and figuring out a flexible public API. I just don't think it is worth the effort. But I do hope you will it useful!
