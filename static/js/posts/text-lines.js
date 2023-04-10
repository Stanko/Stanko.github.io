function getTextLines(element) {
  const text = element.innerText.trim().replace(/(\r\n|\n|\r)/gm, " ");

  const words = text.split(" ");

  const spans = words.map((word) => {
    return `<span style="display: inline-block">${word}</span>`;
  });

  element.innerHTML = spans.join(" ");

  const lines = [];
  let line = [];
  let prevTop = null;

  element.querySelectorAll("span").forEach((wordSpan, index) => {
    const wordRect = wordSpan.getBoundingClientRect();

    if (prevTop !== wordRect.top && index > 0) {
      // Push the current line
      lines.push(line);
      // Start a new line
      line = [words[index]];
    } else {
      // Add word to the current line
      line.push(words[index]);
    }

    prevTop = wordRect.top;
  });

  // Push whatever words are left as the last line
  lines.push(line);

  const coloredLines = lines
    .map((line) => {
      return `<div class="line">${line.join(" ")}</div>`;
    })
    .join("\n");

  element.innerHTML = coloredLines;
}

const exampleElements = document.querySelectorAll(".example");

let windowWidth = window.innerWidth;
exampleElements.forEach((exampleElement) => {
  const textElement = exampleElement.querySelector(".example-text");
  const handleElement = exampleElement.querySelector(".example-handle");

  getTextLines(textElement);

  window.addEventListener("resize", () => {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      getTextLines(textElement);
    }
  });

  let startX;
  let isDragging;
  let resizeValue = 0;

  function handleDragStart(e) {
    if (e.clientX || (e.touches && e.touches.length === 1)) {
      isDragging = true;
      document.body.classList.add("no-select");
      startX = e.clientX || e.touches[0].clientX;
    }
  }

  function handleDrag(e) {
    const isValid = e.clientX || (e.touches && e.touches.length === 1);

    if (isDragging && isValid) {
      let clientX = e.clientX || e.touches[0].clientX;
      const delta = clientX - startX;

      if (delta < 0 && textElement.clientWidth <= 100) {
        return;
      }

      resizeValue += delta;
      startX = clientX;

      exampleElement.style.width = `calc(100% + ${resizeValue}px)`;
      getTextLines(textElement);
    }
  }

  function handleDragEnd() {
    isDragging = false;
    document.body.classList.remove("no-select");
  }

  handleElement.addEventListener("mousedown", handleDragStart);
  window.addEventListener("mousemove", handleDrag);
  window.addEventListener("mouseup", handleDragEnd);

  handleElement.addEventListener("touchstart", handleDragStart);
  window.addEventListener("touchmove", handleDrag);
  window.addEventListener("touchend", handleDragEnd);
});
