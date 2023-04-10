// ----- VECTORS ----- //

function multiplyVector(v, scalar) {
  return {
    x: v.x * scalar,
    y: v.y * scalar,
  };
}

function getVector(a, b) {
  return {
    x: b.x - a.x,
    y: b.y - a.y,
  };
}

function addVectors(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

// ----- MATH ----- //

function getPointOnLine(start, end, ratio) {
  const vector = getVector(start, end);
  const v = multiplyVector(vector, ratio);
  return {
    x: start.x + v.x,
    y: start.y + v.y,
  };
}

function getAngleBetweenThreePoints(a, b, c) {
  const vectorBA = getVector(a, b);
  const vectorBC = getVector(c, b);

  const angle =
    Math.atan2(vectorBC.y, vectorBC.x) - Math.atan2(vectorBA.y, vectorBA.x);

  return angle;
}

// ----- CHAIKIN ----- //

function cut(start, end, ratio) {
  const r1 = {
    x: start.x * (1 - ratio) + end.x * ratio,
    y: start.y * (1 - ratio) + end.y * ratio,
  };
  const r2 = {
    x: start.x * ratio + end.x * (1 - ratio),
    y: start.y * ratio + end.y * (1 - ratio),
  };
  return [r1, r2];
}

function chaikin(curve, iterations = 1, closed = false, ratio = 0.25) {
  if (ratio > 0.5) {
    ratio = 1 - ratio;
  }

  for (let i = 0; i < iterations; i++) {
    let refined = [];
    refined.push(curve[0]);

    for (let j = 1; j < curve.length; j++) {
      let points = cut(curve[j - 1], curve[j], ratio);
      refined = refined.concat(points);
    }

    if (closed) {
      refined.shift();
      refined = refined.concat(cut(curve[curve.length - 1], curve[0], ratio));
    } else {
      refined.push(curve[curve.length - 1]);
    }

    curve = refined;
  }
  return curve;
}

// ----- ROPE ----- //

function getPathPoints(d, step = 10) {
  // For potential NodeJS version
  // https://www.npmjs.com/package/svg-path-properties
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const length = path.getTotalLength();

  const count = length / step;

  const points = [];

  for (let i = 0; i < count + 1; i++) {
    const n = i * step;
    points.push(path.getPointAtLength(n));
  }

  const vectorStart = getVector(points[1], points[0]);
  const vectorEnd = getVector(
    points[points.length - 2],
    points[points.length - 1]
  );

  return [
    // Add helper points at the start
    addVectors(points[0], vectorStart),
    ...points,
    // and end
    addVectors(points[points.length - 1], vectorEnd),
  ];
}

// Takes three points and returns two points.
// Points are located at the end of a vector which is bisector of the angle between these three points.
// The distance is "thickness" param
/*
                          • outerPoint[0]
                         /
                        /
             v1 •------• v2
                      / \
                     /   • v3
      outerPoint[1] •
  */
function getOuterPoints(v1, v2, v3, thickness, angleOffset = 0) {
  /*
             v1 •------• v2
               angle1 / \
                     /   • v3
  */
  let angle1 = getAngleBetweenThreePoints(v1, v2, v3) / 2;

  const offset = angle1 > 0 ? -1 : 1;
  // Angle between (v1, v2) vector and x axis
  /*
                v2 •--------• (v2.x + offset, v2.y)
                  / angle2
                 /
             v1 •
  */
  const angle2 = getAngleBetweenThreePoints(v1, v2, {
    x: v2.x + offset, // Moving point on x axis
    y: v2.y,
  });

  // Angle between the x axis and the bisector angle
  const angle = angle2 - angle1 + angleOffset;

  const r = thickness / 2;

  const point1 = {
    x: v2.x + Math.cos(angle) * r,
    y: v2.y - Math.sin(angle) * r,
  };

  const point2 = {
    x: v2.x + Math.cos(angle + Math.PI) * r,
    y: v2.y - Math.sin(angle + Math.PI) * r,
  };

  return [point1, point2];
}

function getNormals(points, thickness, angleOffset = 0) {
  const normals = [];

  for (let i = 1; i < points.length - 1; i++) {
    const v1 = points[i - 1];
    const v2 = points[i];
    const v3 = points[i + 1];

    const line = getOuterPoints(v1, v2, v3, thickness, angleOffset);

    normals.push(line);
  }

  // Adding an extra line for the last segment
  normals.push(normals[normals.length - 1]);

  return normals;
}

function getSegments(normals, fixGaps = false) {
  const segments = [];

  for (let i = 0; i < normals.length - 2; i++) {
    const l1 = normals[i];
    const l2 = normals[i + 1];
    const l3 = normals[i + 2];
    const path = [l1[0], l1[1], l2[1], l2[0]];

    const prevSegment = segments[i - 1];

    const A = l1[0];
    const B = l1[1];
    const C = l2[0];
    const D = l2[1];
    const E = l3[0];
    /*
    F---------E
    |         |
    D---------C
    |         |
    B---------A
    */

    const ratio1 = 0.3; // Parametrize
    const ratio2 = 1 - ratio1;

    const BD033 = getPointOnLine(B, D, 0.33);
    const DC_p1 = getPointOnLine(D, C, ratio1);
    let corner1 = getPointOnLine(BD033, DC_p1, 0.5);
    // Move the point closer to the corner
    corner1 = addVectors(corner1, multiplyVector(getVector(corner1, D), 0.25));
    const DC_p2 = getPointOnLine(D, C, ratio2);
    const CE066 = getPointOnLine(C, E, 0.66);
    let corner2 = getPointOnLine(DC_p2, CE066, 0.5);
    // Move the point closer to the corner
    corner2 = addVectors(corner2, multiplyVector(getVector(corner2, C), 0.25));
    const AC066 = getPointOnLine(A, C, 0.66);
    const AB_p1 = getPointOnLine(A, B, ratio1);
    const AB_p2 = getPointOnLine(A, B, ratio2);

    const line1 = [
      prevSegment ? prevSegment.line1[2] : B,
      BD033,
      corner1,
      fixGaps ? corner1 : null,
      fixGaps ? corner1 : null,
      DC_p1,
      DC_p2,
      corner2,
    ].filter((p) => p);

    const line2 = [
      corner2,
      AC066,
      prevSegment ? prevSegment.line1[fixGaps ? 7 : 5] : null,
      prevSegment && fixGaps ? prevSegment.line1[7] : null,
      prevSegment && fixGaps ? prevSegment.line1[7] : null,
      AB_p1,
      prevSegment ? AB_p2 : null,
      prevSegment ? prevSegment.line1[2] : B,
    ].filter((p) => p);

    const roundedLine1 = chaikin(line1, 2, false, 0.25);
    const roundedLine2 = chaikin(line2, 2, false, 0.25);
    roundedLine1.pop();
    roundedLine2.pop();
    const points = [...roundedLine1, ...roundedLine2];

    segments.push({
      line1,
      line2,
      path,
      points,
    });
  }

  return segments;
}

function renderRope(
  path,
  svg,
  options = {
    step: 10,
    thickness: 20,
    angle: Math.PI * 0.25,
    colors: [],
  },
  render = {
    path: 0,
    points: 0,
    normals: 0,
    polygons: 0,
    polygonsRounded: 0,
    segments: 0,
    rope: 1,
  }
) {
  const points = getPathPoints(path, options.step);
  const normals = getNormals(points, options.thickness, options.angle);
  const segments = getSegments(normals, options.fixGaps);

  const paths = `
    <g stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="black">
      <g opacity="${render.rope}" class="rope">
        ${segments
          .map(
            (segment, i) =>
              `<path d="M ${segment.points
                .map((p) => `${p.x} ${p.y}`)
                .join(" L ")} Z" style="fill: ${
                options.colors[i % options.colors.length] || "none"
              }" />`
          )
          .join("\n")}
      </g>
      <g opacity="${render.polygons}" class="polygons">
      ${segments
        .map(
          (segment) =>
            `<path d="M ${segment.path
              .map((p) => `${p.x} ${p.y}`)
              .join(" L ")} Z"/>`
        )
        .join("\n")}
      </g>
      <g opacity="${render.polygonsRounded}" class="polygons-rounded">
      ${segments
        .map(
          (segment) =>
            `<path d="M ${chaikin(segment.path, 3, true, 0.15)
              .map((p) => `${p.x} ${p.y}`)
              .join(" L ")} Z"/>`
        )
        .join("\n")}
      </g>
      <g opacity="${render.segments}" class="segments">
      ${segments
        .map(
          (segment) =>
            `<g class="segment">
              <path d="M ${segment.line1
                .map((p) => `${p.x} ${p.y}`)
                .join(" L ")}"/>
              <path d="M ${segment.line2
                .map((p) => `${p.x} ${p.y}`)
                .join(" L ")}"/>
            </g>`
        )
        .join("\n")}
      </g>
      <path class="path" d="${path}" opacity="${render.path}" />
      <g opacity="${render.points}" class="points">
      ${points.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="3" />`).join("")}
      </g>
      <g opacity="${render.normals}" class="normals">
        ${normals.map(
          (line) =>
            `<path d="M ${line[0].x} ${line[0].y} L ${line[1].x} ${line[1].y}" />`
        )}
      </g>
    </g>
  `;

  svg.innerHTML = paths;
}

// ----- INTERACTIVE STEPS ----- //

let stepT = 1;
let stepMovement = -0.01;
let stepLastUpdate = Date.now();
let stepRaf;
const FRAME_DURATION = 1000 / 60;

// easeInOutBack
function easing(x) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;

  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function getStepPath() {
  const y = easing(stepT) * 100 + 50;
  const y1 = y;
  const y2 = 200 - y;
  return `M 50 ${y2} C 150 ${y2} 150 ${y1} 250 ${y1} C 350 ${y1} 350 ${y2} 450 ${y2}`;
}

const stepSvg = document.querySelector(".rope-svg");

function updateStepsImage(
  path,
  options,
  render,
  animate = false,
  forceRender = false
) {
  stepLastUpdate = Date.now();

  // TODO check if I can solve this in a more elegant way
  const isInViewport = ropeStepsElement.classList.contains("is-in-viewport");

  if (isInViewport || forceRender) {
    renderRope(path, stepSvg, options, render);
  }

  cancelAnimationFrame(stepRaf);

  if (animate) {
    stepRaf = requestAnimationFrame(() => {
      const now = Date.now();
      const delta = (now - stepLastUpdate) / FRAME_DURATION;

      if (isInViewport) {
        stepT = stepT + stepMovement * delta;

        if (stepT < 0) {
          stepT = 0;
          stepMovement = -stepMovement;
        } else if (stepT > 1) {
          stepT = 1;
          stepMovement = -stepMovement;
        }
      }

      updateStepsImage(getStepPath(), options, render, animate);
    });
  }
}

const defaultOptions = {
  step: 40,
  thickness: 60,
  angle: (Math.PI / 180) * 0,
  colors: [],
};

const defaultRender = {
  path: 0,
  points: 0,
  normals: 0,
  polygons: 0,
  polygonsRounded: 0,
  segments: 0,
  rope: 0,
};

const optionsMap = {
  path: {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
    },
  },
  points: {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
    },
  },
  normals: {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      normals: 1,
    },
  },
  polygons: {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      polygons: 1,
    },
  },
  "round-polygons": {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      polygonsRounded: 1,
    },
  },
  "angle-polygons": {
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      polygonsRounded: 1,
    },
  },
  "angle-polygons-thin": {
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
      thickness: 20,
      step: 10,
    },
    render: {
      ...defaultRender,
      polygonsRounded: 1,
    },
  },
  segments: {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      segments: 1,
      polygons: 1,
    },
  },
  "segments-rounded": {
    options: {
      ...defaultOptions,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      rope: 1,
    },
  },
  "segments-rounded-fix-gaps": {
    options: {
      ...defaultOptions,
      fixGaps: true,
    },
    render: {
      ...defaultRender,
      path: 1,
      points: 1,
      rope: 1,
    },
  },
  "angle-segments": {
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
    },
    render: {
      ...defaultRender,
      // path: 1,
      // points: 1,
      rope: 1,
    },
  },
  colors: {
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
      colors: ["#e4cdad", "#dcbf99", "#d6b88e", "#dcbf99"],
    },
    render: {
      ...defaultRender,
      rope: 1,
    },
  },
  animate: {
    animate: true,
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
      colors: ["#e4cdad", "#dcbf99", "#d6b88e", "#dcbf99"],
    },
    render: {
      ...defaultRender,
      rope: 1,
    },
  },
  "animate-thin": {
    animate: true,
    options: {
      ...defaultOptions,
      angle: Math.PI * 0.25,
      colors: ["#e4cdad", "#dcbf99", "#d6b88e", "#dcbf99"],
      thickness: 20,
      step: 10,
    },
    render: {
      ...defaultRender,
      rope: 1,
    },
  },
};

const titles = document.querySelectorAll(".step-title");
const ropeStepsElement = document.querySelector(".rope-steps");
const mainElement = document.querySelector(".main");

let currentStep = null;

function updateSteps(forceRender = false) {
  const offset = -50;

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const rect = title.getBoundingClientRect();

    if (rect.top + offset > ropeStepsElement.clientHeight) {
      if (title.id !== currentStep) {
        currentStep = title.id;
        mainElement.className = `main active-section--${currentStep}`;

        const stepOptions = optionsMap[currentStep];
        updateStepsImage(
          getStepPath(),
          stepOptions.options,
          stepOptions.render,
          stepOptions.animate,
          forceRender
        );
      }
      break;
    }
  }
}

updateSteps(true);
window.addEventListener("scroll", () => {
  updateSteps();
});

// ----- CHAIKIN DEMO ----- //

const chaikinSvg = document.querySelector(".chaikin-svg");
const chaikinIterationsInput = document.querySelector(".chaikin-iterations");
const chaikinRatioInput = document.querySelector(".chaikin-ratio");
const chaikinShowPointsInput = document.querySelector(".chaikin-show-points");
const chaikinIterationsValue = document.querySelector(
  ".chaikin-iterations-value"
);
const chaikinRatioValue = document.querySelector(".chaikin-ratio-value");

function updateChaikinDemo() {
  const shape = [
    { x: 50, y: 30 },
    { x: 150, y: 30 },
    { x: 180, y: 180 },
    { x: 20, y: 180 },
  ];

  const rounded = chaikin(
    shape,
    parseInt(chaikinIterationsInput.value, 10),
    true,
    parseFloat(chaikinRatioInput.value)
  );

  chaikinIterationsValue.innerHTML = `(${chaikinIterationsInput.value})`;
  chaikinRatioValue.innerHTML = `(${chaikinRatioInput.value})`;

  chaikinSvg.innerHTML = `
    <path class="original" d="M ${shape
      .map((p) => `${p.x} ${p.y}`)
      .join(" L ")} Z"/>
    ${shape.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="1.5" />`).join("\n")}
    <path class="rounded" d="M ${rounded
      .map((p) => `${p.x} ${p.y}`)
      .join(" L ")} Z"/>
    ${
      chaikinShowPointsInput.checked
        ? rounded
            .map((p) => `<circle cx="${p.x}" cy="${p.y}" r="2" />`)
            .join("\n")
        : ""
    }
  `;
}
updateChaikinDemo();
chaikinIterationsInput.addEventListener("change", updateChaikinDemo);
chaikinRatioInput.addEventListener("change", updateChaikinDemo);
chaikinShowPointsInput.addEventListener("change", updateChaikinDemo);

// ----- INTERACTIVE DEMO ----- //

let demoT = 0;
let demoMovement = 0.005;
let demoLastUpdate = Date.now();
let demoRaf;

function getDemoPath() {
  const t = easing(demoT);
  const y = t * 100 + 60;
  const y2 = 50 - t * 50;
  const y3 = 130 + t * 50;
  const x = t * 225;
  const x2 = 275 + (1 - t) * 225;

  return `M  ${x} 100
  C 50   100,  50    0, 100    0
  C 150    0, 150 ${y}, 200 ${y}
  C 250 ${y}, 250   ${y2}, 300 ${y2}
  C 350   ${y2}, 350  ${y3}, 400  ${y3}
  C 450  ${y3}, 450  100, ${x2}  100`;
}

const demoSvg = document.querySelector(".demo-svg");
const demoRenderCheckboxes = document.querySelectorAll(".demo-checkbox");
const demoRenderRadios = document.querySelectorAll(".demo-radio");
const demoAnimateCheckbox = document.querySelector(".demo-checkbox-animate");
const demoControlElements = document.querySelectorAll(".demo-control");

const colors = {
  transparent: [],
  white: ["#fff"],
  natural: ["#e4cdad", "#dcbf99", "#d6b88e", "#dcbf99"],
  rainbow: ["#2ecc71", "#3498db", "#9b59b6", "#e74c3c", "#e67e22", "#f1c40f"],
};

function updateDemo(forceRender = false) {
  const options = {
    colors: colors[document.querySelector(".demo-radio:checked").value],
  };
  const render = {};
  const animate = demoAnimateCheckbox.checked;

  demoControlElements.forEach((element) => {
    const input = element.querySelector("input");
    const valueElement = element.querySelector(".demo-value");
    valueElement.innerHTML = `(${input.value})`;
    options[input.getAttribute("data-key")] = parseFloat(input.value);
  });

  options.angle *= Math.PI / 180;

  demoRenderCheckboxes.forEach((checkbox) => {
    render[checkbox.getAttribute("data-key")] = checkbox.checked ? 1 : 0;
  });

  demoLastUpdate = Date.now();

  const isInViewport = demoSvg.classList.contains("is-in-viewport");

  // TODO check if I can solve this in a more elegant way
  if (isInViewport || forceRender) {
    renderRope(getDemoPath(), demoSvg, options, render);
  }

  cancelAnimationFrame(demoRaf);

  if (animate) {
    demoRaf = requestAnimationFrame(() => {
      const now = Date.now();
      const delta = (now - demoLastUpdate) / FRAME_DURATION;

      if (isInViewport) {
        demoT = demoT + demoMovement * delta;

        if (demoT < 0) {
          demoT = 0;
          demoMovement = -demoMovement;
        } else if (demoT > 1) {
          demoT = 1;
          demoMovement = -demoMovement;
        }
      }

      updateDemo();
    });
  }
}

updateDemo(true);

demoControlElements.forEach((element) => {
  element.querySelector("input").addEventListener("change", updateDemo);
});

demoRenderCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateDemo);
});

demoRenderRadios.forEach((radio) => {
  radio.addEventListener("change", updateDemo);
});

demoAnimateCheckbox.addEventListener("change", updateDemo);
