const init = ($compare) => {
  // ----- INIT ----- //
  const $input = $compare.querySelector(".compare__input");

  $input.addEventListener("input", () => {
    $compare.style.setProperty("--slider-value", `${$input.value}%`);
  });

  $compare.style.setProperty("--slider-value", `${$input.value}%`);
};

[...document.querySelectorAll(".compare")].forEach(($element) => {
  init($element);
});

// ----- DEBUG ----- //

[...document.querySelectorAll(".toggle-debug")].forEach(($button) => {
  $button.addEventListener("click", () => {
    document.body.classList.toggle("debug");
  });
});

// ----- UNSTYLED ----- //

const $unstyled = document.querySelector(".unstyled");
const $unstyledInput = document.querySelector(".unstyled__input");
const $css = document.querySelector(".unstyled__css");

const updateUnstyled = () => {
  $unstyled.style.setProperty("--slider-value", `${$unstyledInput.value}%`);
  $css.innerHTML = [
    `<span class="z-constant">.comparison-slider</span> {`,
    `  <span class="z-keyword">--slider-value</span>: ${$unstyledInput.value}%;`,
    `}`,
    "",
    `<span class="z-constant">.image-wrapper</span> {`,
    `  width: var(<span class="z-keyword">--slider-value</span>);`,
    "}",
  ].join("\n");
};

$unstyledInput.addEventListener("input", () => {
  updateUnstyled();
});

updateUnstyled();
