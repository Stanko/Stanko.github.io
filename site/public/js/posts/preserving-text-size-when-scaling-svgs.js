// Method
const addTextScalingFactor = (svg) => {
  // Getting the natural width of the SVG from its viewBox attribute
  const width = svg.getAttribute('viewBox').split(' ')[2];

  // Set the initial value for the scaling factor and mark it as loaded
  svg.style.setProperty('--text-factor', width / svg.clientWidth);

  // Update the scaling factor when SVG is resized
  const resizeObserver = new ResizeObserver(() => {
    svg.style.setProperty('--text-factor', width / svg.clientWidth);
  });

  resizeObserver.observe(svg);

  // In a real app, you'll want to disconnect the observer
  // on unmount by calling resizeObserver.disconnect();
};

document.querySelectorAll('.example').forEach((svg) => {
  addTextScalingFactor(svg);
});

// Interactive positioning

const updateInteractiveText = () => {
  const text = document.querySelector('.example--interactive-positioning text');

  const textAnchor = document.querySelector(
    'input[name="text-anchor"]:checked'
  ).value;
  const dominantBaseline = document.querySelector(
    'input[name="dominant-baseline"]:checked'
  ).value;

  text.style.textAnchor = textAnchor;
  text.style.dominantBaseline = dominantBaseline;
};

updateInteractiveText();

document
  .querySelectorAll(
    'input[name="text-anchor"], input[name="dominant-baseline"]'
  )
  .forEach((input) => {
    input.addEventListener('change', updateInteractiveText);
  });
