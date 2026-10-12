// ----- DOM ----- //
const el = (tag, className = '', attrs = {}) => {
  const { children, innerHTML, ...rest } = attrs;

  const element = document.createElement(tag);
  element.className = className;
  // Add children or innerHTML
  if (children) {
    children
      // Remove falsy children
      .filter(Boolean)
      .forEach((child) => {
        element.append(child);
      });
  } else if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  const attributes = Object.entries(rest).filter(Boolean);
  for (const [key, value] of attributes) {
    if (value === true) {
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  }
  return element;
};

// ----- API ----- //
export const dom = {
  div: (className = '', attrs = {}) => el('div', className, attrs),
  span: (className = '', attrs = {}) => el('span', className, attrs),
  input: (className = '', attrs = {}) => el('input', className, attrs),
  label: (className = '', attrs = {}) => el('label', className, attrs),
  button: (className = '', attrs = {}) => el('button', className, attrs),
  img: (className = '', attrs = {}) => el('img', className, attrs),
  figure: (className = '', attrs = {}) => el('figure', className, attrs),
  figcaption: (className = '', attrs = {}) =>
    el('figcaption', className, attrs),
};
