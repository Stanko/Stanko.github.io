class Box extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="bottom"></div>
      <div class="top"></div>`;
  }
}

window.customElements.define("css-box", Box);

class Person extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<div class="person-top">
      <div class="head-wrapper">
        <css-box class="head"></css-box>
      </div>
      <div class="arm">
        <css-box class="arm-top"></css-box>
        <css-box class="arm-bottom"></css-box>
      </div>
      <css-box class="torso"></css-box>
      <div class="arm arm-right">
        <css-box class="arm-top"></css-box>
        <css-box class="arm-bottom"></css-box>
      </div>
    </div>
    <div class="legs">
      <div class="leg leg-left">
        <css-box class="leg-top"></css-box>
        <css-box class="leg-bottom"></css-box>
        <css-box class="leg-shoe"></css-box>
      </div>
      <div class="leg leg-right">
        <css-box class="leg-top"></css-box>
        <css-box class="leg-bottom"></css-box>
        <css-box class="leg-shoe"></css-box>
      </div>
    </div>`;
  }
}

window.customElements.define("css-person", Person);

document.querySelectorAll(".rotation-input").forEach(function (input) {
  const peopleWrapper = input.parentElement.previousSibling;
  peopleWrapper.style.transform = `rotateY(${input.value}deg) rotateX(5deg)`;
  input.addEventListener("input", () => {
    peopleWrapper.style.transform = `rotateY(${input.value}deg) rotateX(5deg)`;
  });
});

let colorSetIndex = 1;
const colorPerson = document.querySelector(".color-person");
const colorButton = document.querySelector(".next-color");

colorButton.addEventListener("click", function () {
  colorPerson.classList.remove("person-" + colorSetIndex);
  colorSetIndex++;
  if (colorSetIndex === 11) {
    colorSetIndex = 1;
  }
  colorPerson.classList.add("person-" + colorSetIndex);
});

const fans = document.querySelectorAll(".fan");
const countryInputs = document.querySelectorAll("input[name=country]");
const selectedCountry = document.querySelector(
  "input[name=country]:checked"
).value;

fans.forEach(function (fan) {
  fan.className = selectedCountry;
});

countryInputs.forEach(function (input) {
  input.addEventListener("change", function (e) {
    fans.forEach(function (fan) {
      fan.className = e.target.value;
    });
  });
});
