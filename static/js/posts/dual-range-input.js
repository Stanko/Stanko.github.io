class DualRangeInput {
  constructor($min, $max, blank = false) {
    this.blank = blank;
    this.updateFloor = () => this.update("floor");
    this.updateCeil = () => this.update("ceil");
    this.$min = $min;
    this.$max = $max;
    this.$min.addEventListener("input", this.updateCeil);
    this.$max.addEventListener("input", this.updateFloor);
    this.$min.addEventListener("focus", this.updateCeil);
    this.$max.addEventListener("focus", this.updateFloor);
    this.update();
    this.$min.dataset.ready = "true";
    this.$max.dataset.ready = "true";
  }
  update(method = "floor") {
    const min = parseFloat(this.$min.min);
    const max = parseFloat(this.$max.max);
    const step = parseFloat(this.$min.step);
    const minValue = parseFloat(this.$min.value);
    const maxValue = parseFloat(this.$max.value);
    const midValue = (maxValue - minValue) / 2;
    const mid = minValue + Math[method](midValue / step) * step;
    const range = max - min;
    // Thumb width has to be set through the CSS --dri-thumb-width variable
    const thumbWidthVariable = this.blank
      ? "0px"
      : getComputedStyle(this.$min).getPropertyValue("--dri-thumb-width");

    const thumbWidth = parseFloat(thumbWidthVariable);
    const thumbWidthUnit = thumbWidthVariable.replace(/^[\d\.]+/, ""); // px, em, rem...
    const leftWidth = ((mid - min) / range) * 100;
    const rightWidth = ((max - mid) / range) * 100;
    this.$min.style.flexBasis = `calc(${leftWidth}% + ${thumbWidthVariable})`;
    this.$max.style.flexBasis = `calc(${rightWidth}% + ${thumbWidthVariable})`;
    this.$min.max = mid.toString();
    this.$max.min = mid.toString();
    const minFill = (minValue - min) / (mid - min) || 0;
    const maxFill = (maxValue - mid) / (max - mid) || 0;
    const minFillThumb = (0.5 - minFill) * thumbWidth;
    const maxFillThumb = (0.5 - maxFill) * thumbWidth;
    this.$min.style.setProperty(
      "--dri-gradient-position",
      `calc(${minFill * 100}% + ${minFillThumb}${thumbWidthUnit})`
    );
    this.$max.style.setProperty(
      "--dri-gradient-position",
      `calc(${maxFill * 100}% + ${maxFillThumb}${thumbWidthUnit})`
    );
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

  new DualRangeInput($min, $max, $demo.classList.contains("demo--blank"));

  addValues();
});

document.querySelectorAll(".toggle-debug").forEach(($toggleDebug) => {
  $toggleDebug.addEventListener("click", () => {
    document.body.classList.toggle("debug");
  });
});
