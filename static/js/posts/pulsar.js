// ----- SCROLL LOGIC ----- //

function scrollObserver() {
  const $elements = document.querySelectorAll(`.is-in-viewport`);

  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  function handleIntersectionEvent(entries) {
    entries.forEach((entry) => {
      const newState = entry.isIntersecting;
      const currentState = entry.target.classList.contains("is-in-viewport");

      if (newState !== currentState) {
        // window[entry.target.dataset.whenInViewport](newState);

        entry.target.classList.toggle("is-in-viewport");
        entry.target.classList.toggle("is-not-in-viewport");
      }
    });
  }

  if ($elements.length) {
    let observer = new IntersectionObserver(handleIntersectionEvent, options);

    $elements.forEach((element) => {
      observer.observe(element);
    });
  }
}

// ----- UTILS ----- //

function insertAfter($node, $after) {
  $node.parentNode.insertBefore($after, $node.nextSibling);
}

function addPlayButton($node) {
  const $play = document.createElement("div");
  $play.classList.add("play-button");

  insertAfter($node, $play);
}

// ----- COLORS ----- //

const colors = [
  "#ff9500",
  "#ffcc02",
  "#35c759",
  "#5bc7fa",
  "#007aff",
  "#5856d7",
  "#af52de",
  "#ff2c55",
];

function getColor(point, scale = 1) {
  const d = Math.sqrt(
    Math.pow(point.x * scale, 2) + Math.pow(point.y * scale, 2)
  );

  return colors[Math.floor(d)] || colors[colors.length - 1];
}

// ----- SVG EXAMPLES ----- //

function svgExample({
  $svg,
  translateZ,
  toggleFunctionName,
  svgScale = 10,
  playOnStart = true,
  getPointValue,
}) {
  function gridSVG(size) {
    const CIRCLE_SCALE = 0.88;
    const RADIUS = 0.5 * CIRCLE_SCALE;
    const points = [];

    for (let x = -size; x <= size; x += 1) {
      for (let y = -size; y <= size; y += 1) {
        const $element = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );

        $element.setAttribute("cx", (x * svgScale).toFixed(3));
        $element.setAttribute("cy", (y * svgScale).toFixed(3));
        $element.setAttribute("r", (RADIUS * svgScale).toFixed(3));

        points.push({ x, y, r: RADIUS, $element });
      }
    }

    return points;
  }

  function updateGrid() {
    const grid = gridSVG(6);

    grid.forEach((point) => {
      const d = Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
      point.$element.style.fill = colors[Math.floor(d)];
    });

    $svg.replaceChildren(...grid.map((point) => point.$element));

    return grid;
  }

  function defaultGetPointValue(x, y, t) {
    return (Math.cos(Math.sqrt(x * x + y * y) - t) + 1) / 2;
  }

  let grid = updateGrid();

  const $play = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  $play.setAttribute("r", 1 * svgScale);
  $play.setAttribute("class", "svg-play");
  $svg.appendChild($play);

  const $playTriangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const triangleSide = 0.6 * svgScale;
  const triangleHeight = (Math.sqrt(3) / 2) * triangleSide;
  $playTriangle.setAttribute(
    "d",
    `M ${triangleHeight * -0.33} ${
      triangleHeight / -2
    } v ${triangleSide} l ${triangleHeight} -${triangleSide / 2} Z`
  );
  $playTriangle.style.strokeWidth = 0.2 * svgScale;
  $playTriangle.setAttribute("class", "svg-play-triangle");
  $svg.appendChild($playTriangle);

  const speed = 500;
  const scale = 2;
  let animationTime = 0;
  let lastRestart = Date.now();
  let timeSinceLastRestart = 0;
  let raf;
  let isPlaying = playOnStart;

  const fn = getPointValue || defaultGetPointValue;

  function draw() {
    timeSinceLastRestart = animationTime + (Date.now() - lastRestart) / speed;

    grid.forEach((point) => {
      const value = fn(point.x / scale, point.y / scale, timeSinceLastRestart);

      if (translateZ) {
        let z = (value === 0 ? 1000 : (1 - 1 / value) * 100).toFixed(2);
        point.$element.style.transform = `perspective(100px) translateZ(${z}px)`;
      } else {
        point.$element.style.transform = `scale(${value.toFixed(3)})`;
      }
    });

    if (isPlaying) {
      raf = requestAnimationFrame(draw);
    }
  }

  draw();

  window[toggleFunctionName] = function (play = false) {
    isPlaying = play;

    if (isPlaying) {
      $svg.classList.add("is-playing");
    } else {
      $svg.classList.remove("is-playing");
    }

    if (isPlaying) {
      lastRestart = Date.now();
      draw();
    } else {
      cancelAnimationFrame(raf);
      animationTime = timeSinceLastRestart;
    }
  };

  $svg.addEventListener("click", () => {
    window[toggleFunctionName](!isPlaying);
  });
}

// ----- REAL EXAMPLES ----- //

const CANVAS_SIZE = 400;
const RADIUS = CANVAS_SIZE * 0.075;

const { PI } = Math;
const DEG_30 = Math.PI / 6;
const DEG_60 = DEG_30 * 2;
const DEG_120 = DEG_60 * 2;

const HEX_ANGLES = [0, 1, 2, 3, 4, 5].map((index) => {
  return DEG_30 + index * DEG_60;
});

const TRIANGLE_ANGLES = [0, 1, 2].map((index) => {
  return PI + DEG_30 + index * DEG_120;
});

function initCanvas($canvas) {
  const pixelRatio = window.devicePixelRatio;
  const ctx = $canvas.getContext("2d");

  $canvas.width = CANVAS_SIZE * pixelRatio;
  $canvas.height = CANVAS_SIZE * pixelRatio;

  ctx.scale(pixelRatio, pixelRatio);

  return ctx;
}

function drawHexagon(ctx, center, side) {
  const { x, y } = center;

  ctx.moveTo(
    x + side * Math.cos(HEX_ANGLES[0]),
    y + side * Math.sin(HEX_ANGLES[0])
  );

  HEX_ANGLES.forEach((angle) => {
    ctx.lineTo(x + side * Math.cos(angle), y + side * Math.sin(angle));
  });
}

function drawTriangle(ctx, center, side, angleOffset) {
  const { x, y } = center;

  ctx.moveTo(
    x + side * Math.cos(TRIANGLE_ANGLES[0] + angleOffset),
    y + side * Math.sin(TRIANGLE_ANGLES[0] + angleOffset)
  );

  TRIANGLE_ANGLES.forEach((angle) => {
    ctx.lineTo(
      x + side * Math.cos(angle + angleOffset),
      y + side * Math.sin(angle + angleOffset)
    );
  });
}

function drawCircle(ctx, center, radius) {
  const { x, y } = center;

  ctx.arc(x, y, radius, 0, 2 * Math.PI);
}

function drawGrid(ctx, grid, data, gridType, animateType) {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  const isScale = animateType === "scale" || animateType === "both";
  const isOpacity = animateType === "opacity" || animateType === "both";

  grid.forEach((point, index) => {
    const { color, x, y, r, angleOffset } = point;
    const pointScale = data[index];
    const scale = isScale ? pointScale : 1;
    const opacity = isOpacity ? pointScale : 1;
    const drawMethod = drawMethods[gridType];

    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;

    ctx.beginPath();

    drawMethod(
      ctx,
      {
        x: x * RADIUS + CANVAS_SIZE * 0.5,
        y: CANVAS_SIZE * 0.5 - y * RADIUS,
      },
      r * scale,
      angleOffset || 0
    );

    ctx.fill();
  });
}

const drawMethods = {
  classic: drawCircle,
  hex: drawHexagon,
  triangular: drawTriangle,
};

function generateCirclesGrid(size) {
  const CIRCLE_SCALE = 0.88;
  const r = 0.5 * CIRCLE_SCALE;
  const points = [];

  for (let y = -size; y <= size; y += 1) {
    for (let x = -size; x <= size; x += 1) {
      const color = getColor({ x, y });

      points.push({
        x,
        y,
        r: r * RADIUS,
        color,
      });
    }
  }

  return points;
}

function generateHexGrid(columnsCount, rowsCount) {
  const SCALE = 1.1; // Scale to fit the grid into the SVG bounds
  const HEX_SCALE = RADIUS * 0.85; // Scale to fit the hexagon into the grid cell
  const points = [];

  const innerRadius = 0.5 * SCALE; // height of the each of the six triangles in hexagon
  const outerRadius = (2 * innerRadius) / Math.sqrt(3); // side of the hexagon and each of the six triangles in it

  const horizontalStep = innerRadius * 2;
  const verticalStep = outerRadius * 1.5;

  for (let rowIndex = -rowsCount; rowIndex <= rowsCount; rowIndex += 1) {
    const y = rowIndex * verticalStep;

    const isOddRow = rowIndex % 2 !== 0;
    const horizontalOffset = isOddRow ? innerRadius : 0;

    const startOffset = isOddRow ? 1 : 0;

    for (
      let columnIndex = -columnsCount - startOffset;
      columnIndex <= columnsCount;
      columnIndex += 1
    ) {
      const x = columnIndex * horizontalStep + horizontalOffset;

      const color = getColor({ x, y });

      points.push({
        x,
        y,
        color,
        r: outerRadius * HEX_SCALE,
      });
    }
  }

  return points;
}

function generateTriangleGrid(columnsCount, rowsCount) {
  const SCALE = 1.33; // Scale to fit the grid into the SVG bounds
  const TRIANGLE_SCALE = 0.8;
  const points = [];

  const side = 1;
  const h = (side * Math.sqrt(3)) / 2;
  const r = (h / 3) * 2 * RADIUS;

  const horizontalStep = side / 2;
  const verticalStep = h;

  for (let rowIndex = -rowsCount; rowIndex <= rowsCount; rowIndex += 1) {
    const y = rowIndex * verticalStep;

    const isOddRow = rowIndex % 2 !== 0;
    const horizontalOffset = isOddRow ? horizontalStep : 0;

    const startOffset = isOddRow ? 2 : 1;
    const endOffset = isOddRow ? 0 : 1;

    for (
      let columnIndex = -columnsCount - startOffset;
      columnIndex <= columnsCount + endOffset;
      columnIndex += 1
    ) {
      const x = columnIndex * horizontalStep + horizontalOffset;

      const isOddColumn = columnIndex % 2 !== 0;
      const angleOffset = isOddColumn ? Math.PI : 0;

      const yLocal = isOddColumn ? h / 3 : 0;

      const color = getColor({ x, y: y - yLocal }, 1 / TRIANGLE_SCALE);

      points.push({
        x: x * SCALE,
        y: (y - yLocal) * SCALE,
        r: r * TRIANGLE_SCALE * SCALE,
        color,
        angleOffset,
      });
    }
  }

  return points;
}

function calculateGrid(grid, t, fn) {
  const data = [];

  for (let i = 0; i < grid.length; i++) {
    const point = grid[i];
    const { x, y } = point;

    let value = 0;

    value = fn(x, y, t, i);

    // Cap value to 0-1
    value = Math.max(Math.min(value, 1), 0);

    data.push(value);
  }

  return data;
}

function generateGrid(type) {
  if (type === "classic") {
    return generateCirclesGrid(6);
  } else if (type === "hex") {
    return generateHexGrid(5, 6);
  }

  return generateTriangleGrid(8, 6);
}

function realExample({
  $canvas,
  autoplay = false,
  gridType = "classic",
  animateType = "scale",
  toggleFunctionName,
  fn,
}) {
  let isPlaying = autoplay;
  let raf = 0;
  let time = 0;
  let lastRestart = Date.now();
  let timeSinceLastRestart = 0;

  if (autoplay) {
    $canvas.classList.add("is-playing");
  }

  const ctx = initCanvas($canvas);

  let grid = generateGrid(gridType);

  addPlayButton($canvas);

  function draw() {
    cancelAnimationFrame(raf);

    const data = calculateGrid(grid, timeSinceLastRestart, fn);

    drawGrid(ctx, grid, data, gridType, animateType);

    if (isPlaying) {
      raf = requestAnimationFrame(animate);
    }
  }

  function animate() {
    timeSinceLastRestart = time + (Date.now() - lastRestart) / 200;

    draw();
  }

  animate();

  window[toggleFunctionName] = function (play = false) {
    isPlaying = play;

    if (isPlaying) {
      $canvas.classList.add("is-playing");
    } else {
      $canvas.classList.remove("is-playing");
    }

    if (isPlaying) {
      lastRestart = Date.now();
      draw();
    } else {
      cancelAnimationFrame(raf);
      time = timeSinceLastRestart;
    }
  };

  $canvas.addEventListener("click", () => {
    window[toggleFunctionName](!isPlaying);
  });
}

// ----- TRANSLATE Z GRID ----- //

function initTranslateZGrid() {
  const $wrapper = document.querySelector(".translate-z-grid");
  let html = "";
  const perspective = 100;

  const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 5C2 3 3 2 4.5.5c.5 2 1 3.5 2.5 5 M4.5 1c-3 8-2.5 14 3 20.25m4.431-2.714L11.586 26m7.673-3.696c-1.38-.34-2.664-.128-2.759 1.696-.07 1.357 1.38 2.036 2.759 1.357m.344-3.393-.344 3.732m2.672-3.428v1.018m0 2.714v-2.714m0 0a1.083 1.083 0 0 1 2.069 0m0 0V26m0-2.714c0-1.018 1.724-1.018 1.724 0V26m5.173-7.464V26m-1.38-4.75 2.759-.679M34 22.607V26m0-4.954v-.135M36.5 26.125v-2.188m0-.937v.938m0 0c.41-.525 1.15-1.07 1.855-.758.706.313.517 1.485.645 2.945M40.5 23c.265 1.01.939 2.044 1.803 2.855M43.118 23c-.61 2.704-1.281 4.5-2.618 5.5"/>
  </svg>
`;

  const sizes = [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1];

  sizes.forEach((i) => {
    const pixelScale = i / 50;
    const z = (1 - 1 / pixelScale) * perspective;

    html += `<div class="translate-z-grid-item">
      <div style="transform: perspective(${perspective}px) translateZ(${z}px)"></div>
      <code>
        size: ${i}px<br/>
        z: ${z.toFixed(1)}px
      </code>
      ${i === 1 ? SVG : ""}
    </div>`;
  });

  $wrapper.innerHTML = html;
}

// ----- WORKER ----- //

const worker = new Worker("/js/posts/pulsar-worker.js");

const resolvers = {};

const FORBIDDEN_WORDS = ["fetch", "import", "XMLHttpRequest"];

worker.addEventListener("message", (e) => {
  resolvers[e.data.id](e.data);
  delete resolvers[e.data.id];
});

const lesserOfTwoEvals = async (code) => {
  for (const word of FORBIDDEN_WORDS) {
    if (code.includes(word)) {
      return {
        error: `No usage of "${word}" allowed.`,
      };
    }
  }

  return new Promise((resolve) => {
    const id = Date.now().toString() + Math.random().toString();

    resolvers[id] = resolve;

    worker.postMessage({
      id,
      code,
    });
  });
};

const initWorker = () => {
  const $input = document.querySelector(".input--worker-eval");
  const $form = document.querySelector(".form--worker-eval");

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const value = await lesserOfTwoEvals($input.value);
    alert(JSON.stringify(value, null, 2));
  });
};

initWorker();

// ----- START EVERYTHING ----- //

// Jitter
const $jitterSVG = document.querySelector(".svg-jitter");
svgExample({
  playOnStart: false, // TODO consider if I should enable autoplay on scroll
  $svg: $jitterSVG,
  translateZ: false,
  toggleFunctionName: "jitterToggle",
});

// Translate Z with a small SVG
const $translateZSVG = document.querySelector(".svg-translate-z");
svgExample({
  playOnStart: false, // TODO consider if I should enable autoplay on scroll
  $svg: $translateZSVG,
  translateZ: true,
  toggleFunctionName: "translateZToggle",
  svgScale: 100,
});

// Translate Z with a large SVG
const $translateZSmallSVG = document.querySelector(".svg-translate-z-small");
svgExample({
  playOnStart: false, // TODO consider if I should enable autoplay on scroll
  $svg: $translateZSmallSVG,
  translateZ: true,
  toggleFunctionName: "translateZSmallToggle",
  svgScale: 1,
});

// Translate z examples
initTranslateZGrid();

// Real examples
$canvasOne = document.querySelector(".canvas-one");
realExample({
  $canvas: $canvasOne,
  // autoplay: true,
  gridType: "hex",
  animateType: "scale",
  toggleFunctionName: "canvasOneToggle",
  fn: (x, y, t, i) => {
    return Math.sin(3 * Math.atan2(y, x) + t);
  },
});

// Scroll observer
scrollObserver();
