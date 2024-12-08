class DualRangeInput {
  /**
   * @param {HTMLInputElement} $min - The range input element for the minimum value
   * @param {HTMLInputElement} $max - The range input element for the maximum value
   * @param {number} [precision=3] - The number of decimal places to round the mid value to, defaults to 3
   */
  constructor($min, $max, thumbWidth = "", precision = 3) {
    this.updateFloor = () => this.update("floor");
    this.updateCeil = () => this.update("ceil");
    this.$min = $min;
    this.$max = $max;
    this.precision = precision;
    this.thumbWidthVariable = thumbWidth;
    this.$min.addEventListener("input", this.updateCeil);
    this.$max.addEventListener("input", this.updateFloor);
    this.$min.addEventListener("focus", this.updateCeil);
    this.$max.addEventListener("focus", this.updateFloor);
    // Unfortunately Safari doesn't trigger focus on mousedown or touchstart
    // like other browsers do, so we have to listen for those events as well
    this.$min.addEventListener("mousedown", this.updateCeil);
    this.$max.addEventListener("mousedown", this.updateFloor);
    this.$min.addEventListener("touchstart", this.updateCeil);
    this.$max.addEventListener("touchstart", this.updateFloor);
    this.update();
    this.$min.dataset.ready = "true";
    this.$max.dataset.ready = "true";
  }
  update(method = "ceil") {
    const min = parseFloat(this.$min.min);
    const max = parseFloat(this.$max.max);
    const step = parseFloat(this.$min.step);
    const minValue = parseFloat(this.$min.value);
    const maxValue = parseFloat(this.$max.value);
    const midValue = (maxValue - minValue) / 2;
    const mid = minValue + Math[method](midValue / step) * step;
    const range = max - min;
    // If the thumb width wasn't passed in, get it from the CSS variable
    if (!this.thumbWidthVariable) {
      this.thumbWidthVariable = getComputedStyle(this.$min).getPropertyValue(
        "--dri-thumb-width"
      );
    }
    const thumbWidth = parseFloat(this.thumbWidthVariable);
    const thumbWidthUnit = this.thumbWidthVariable.replace(/^[\d\.]+/, ""); // px, em, rem...
    const leftWidth = ((mid - min) / range) * 100;
    const rightWidth = ((max - mid) / range) * 100;
    this.$min.style.flexBasis = `calc(${leftWidth}% + ${this.thumbWidthVariable})`;
    this.$max.style.flexBasis = `calc(${rightWidth}% + ${this.thumbWidthVariable})`;
    this.$min.max = mid.toFixed(this.precision);
    this.$max.min = mid.toFixed(this.precision);
    const minFill = (minValue - min) / (mid - min) || 0;
    const maxFill = (maxValue - mid) / (max - mid) || 0;
    const minFillThumb = ((0.5 - minFill) * thumbWidth).toFixed(this.precision);
    const maxFillThumb = ((0.5 - maxFill) * thumbWidth).toFixed(this.precision);
    this.$min.style.setProperty(
      "--dri-gradient-position",
      `calc(${(minFill * 100).toFixed(
        this.precision
      )}% + ${minFillThumb}${thumbWidthUnit})`
    );
    this.$max.style.setProperty(
      "--dri-gradient-position",
      `calc(${(maxFill * 100).toFixed(
        this.precision
      )}% + ${maxFillThumb}${thumbWidthUnit})`
    );
  }
  destroy() {
    this.$min.removeEventListener("input", this.updateFloor);
    this.$max.removeEventListener("input", this.updateCeil);
    this.$min.removeEventListener("focus", this.updateFloor);
    this.$max.removeEventListener("focus", this.updateCeil);
    this.$min.removeEventListener("mousedown", this.updateCeil);
    this.$max.removeEventListener("mousedown", this.updateFloor);
    this.$min.removeEventListener("touchstart", this.updateCeil);
    this.$max.removeEventListener("touchstart", this.updateFloor);
  }
}

const datalist = document.querySelector("#tickmarks");

for (let i = 0; i <= 100; i++) {
  const option = document.createElement("option");
  option.value = i.toString();
  datalist.appendChild(option);
}

document.querySelectorAll(".demo").forEach(($demo) => {
  const $min = $demo.querySelector("input:first-child");
  const $max = $demo.querySelector("input:last-child");

  const addValues = () => {
    $demo.querySelector(".values").innerHTML = `
    <span>${$min.min}</span>
    <span>${$min.value} - ${$max.value}</span>
    <span>${$max.max}</span>`;
  };

  $min.addEventListener("input", addValues);
  $max.addEventListener("input", addValues);

  new DualRangeInput($min, $max, $demo.dataset.thumbWidth || "");

  addValues();
});

document.querySelectorAll(".toggle-debug").forEach(($toggleDebug) => {
  $toggleDebug.addEventListener("click", () => {
    document.body.classList.toggle("debug");
  });
});
