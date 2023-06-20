// This is just me fooling around, don't try this at home :D

const wrapper = document.querySelector(".giraffe");
const input = document.querySelector(".giraffe-input");
const clone = document.querySelector(".giraffe-clone");
const before = document.querySelector(".giraffe-before");
const after = document.querySelector(".giraffe-after");

let position = null;
let visible = false;

function update() {
  visible = input.selectionStart === input.selectionEnd;
  position = visible ? input.selectionStart : null;

  if (position !== null) {
    const beforeText = input.value
      .substring(0, position)
      .replace(/ /g, "&nbsp");
    const afterText = input.value.substring(position).replace(/ /g, "&nbsp");

    before.innerHTML = beforeText;
    after.innerHTML = afterText;
  }

  if (visible && document.activeElement === input) {
    wrapper.classList.add("giraffe--caret-visible");
  } else {
    wrapper.classList.remove("giraffe--caret-visible");
  }

  clone.scrollLeft = input.scrollLeft;
}

function isSelectionChangeSupported() {
  const input = document.createElement("input");
  input.value = "test";
  let supported = false;
  input.addEventListener("selectionchange", () => {
    supported = true;
  });
  input.setSelectionRange(1, 1);
  return supported;
}

if (isSelectionChangeSupported()) {
  input.addEventListener("selectionchange", update);
} else {
  input.addEventListener("keydown", update);
  input.addEventListener("keyup", update);
  input.addEventListener("change", update);
  input.addEventListener("click", update);
  input.addEventListener("touchend", update);
}

input.addEventListener("focus", update);
input.addEventListener("blur", () => {
  wrapper.classList.remove("giraffe--caret-visible");
});

input.setSelectionRange(5, 5);
update();

const overlapCheckbox = document.querySelector(".giraffe-checkbox--overlap");
overlapCheckbox.checked = false;

let timeout;
overlapCheckbox.addEventListener("change", () => {
  if (overlapCheckbox.checked) {
    wrapper.classList.add("giraffe--overlap");
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      wrapper.classList.add("giraffe--no-helpers");
      input.focus();
    }, 750);
  } else {
    wrapper.classList.remove("giraffe--overlap");
    wrapper.classList.remove("giraffe--no-helpers");
  }
});
