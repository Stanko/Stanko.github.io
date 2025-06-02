import { createNoise2D } from 'https://esm.sh/simplex-noise@4.0.3';
import simplify from 'https://esm.sh/simplify@1.0.0';

// ----- UTILS ----- //

const { cos, sin, PI, min, max, floor } = Math;

const random = (min, max, rng = Math.random, decimalPlaces = 16) => {
  const value = (rng || Math.random)() * (max - min) + min;

  if (decimalPlaces) {
    return parseFloat(value.toFixed(decimalPlaces));
  }

  return Math.round(value);
};

/*
  Takes three points and a bisector vector v2 -> a

                  • a
                 /
                /
     v1 •------• v2
                \
                 • v3
*/

const getBisectorVector = (v1, v2, v3) => {
  const v21 = v1.sub(v2).normalize();
  const v23 = v3.sub(v2).normalize();

  // Calculate the bisector by summing the normalized vectors
  let bisectorVector = v21.add(v23).normalize();

  // If the vectors are parallel, return the vector perpendicular to v21
  if (bisectorVector.length() === 0) {
    bisectorVector = new Vec(v21.y, -v21.x);
  }

  return bisectorVector;
};

const isOutOfBounds = (v, bounds) => {
  return v.x < 0 || v.x > bounds.x || v.y < 0 || v.y > bounds.y;
};

const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle
  while (currentIndex != 0) {
    // Pick a remaining element
    let randomIndex = floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

// ----- VECTOR ----- //

class Vec {
  constructor(x, y, width = 1) {
    this.x = x;
    this.y = y;
    this.width = width;
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  rotate(angle) {
    const rotatedX = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const rotatedY = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    return new Vec(rotatedX, rotatedY, this.width);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distance(v) {
    return this.sub(v).length();
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  distanceSquared(v) {
    return this.sub(v).lengthSquared();
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  normalize() {
    const d = this.length();
    if (d === 0) {
      console.warn('Normalizing zero vector');
      return new Vec(this.x, this.y, this.width);
    }

    return new Vec(this.x / d, this.y / d, this.width);
  }

  add(v) {
    return new Vec(this.x + v.x, this.y + v.y, this.width);
  }

  sub(v) {
    return new Vec(this.x - v.x, this.y - v.y, this.width);
  }

  mul(v) {
    return new Vec(this.x * v.x, this.y * v.y, this.width);
  }

  abs() {
    return new Vec(Math.abs(this.x), Math.abs(this.y), this.width);
  }

  div(v) {
    if (v.x === 0 || v.y === 0) {
      throw new Error(`Dividing by zero, vector: ${v.toString()}`);
    }

    return new Vec(this.x / v.x, this.y / v.y, this.width);
  }

  addScalar(n) {
    return new Vec(this.x + n, this.y + n, this.width);
  }

  subScalar(n) {
    return new Vec(this.x - n, this.y - n, this.width);
  }

  mulScalar(n) {
    return new Vec(this.x * n, this.y * n, this.width);
  }

  divScalar(n) {
    if (n === 0) {
      console.warn(`Dividing by zero, vector: ${this.toString()}`);
    }

    return new Vec(this.x / n, this.y / n, this.width);
  }

  // Shortest distance and between "this" vector and p1-p2 line
  segmentDistance(p1, p2) {
    const l2 = p1.distanceSquared(p2);
    if (l2 === 0) {
      return this.distance(p1);
    }

    const t = this.sub(p1).dot(p2.sub(p1)) / l2;
    if (t < 0) {
      return this.distance(p1);
    }

    if (t > 1) {
      return this.distance(p2);
    }

    return p1.add(p2.sub(p1).mulScalar(t)).distance(this);
  }

  toString() {
    return (
      `x: ${this.x.toFixed(2)}\n` +
      `y: ${this.y.toFixed(2)})\n` +
      `width: ${this.width.toFixed(2)}`
    );
  }
}

// ----- GRID ----- //

class Grid {
  constructor(size, cellSize) {
    this.cells = [];
    this.cellSize = cellSize;

    const maxX = Math.ceil(size.x / cellSize);
    const maxY = Math.ceil(size.y / cellSize);

    for (let x = 0; x < maxX; x++) {
      this.cells[x] = [];
      for (let y = 0; y < maxY; y++) {
        this.cells[x][y] = {
          x,
          y,
          points: [],
        };
      }
    }
  }

  insert(point) {
    const x = Math.floor(point.x / this.cellSize);
    const y = Math.floor(point.y / this.cellSize);

    this.cells[x][y].points.push(point);
  }

  nearest(point, maxDistance) {
    const offset = Math.ceil(maxDistance / this.cellSize);
    const x = Math.floor(point.x / this.cellSize);
    const y = Math.floor(point.y / this.cellSize);
    const result = [];

    for (let i = -offset; i <= offset; i++) {
      for (let j = -offset; j <= offset; j++) {
        const currentCell = this.cells[x + i]?.[y + j];

        if (currentCell) {
          currentCell.points.forEach((p) => {
            let distance = point.distance(p); //  - p.width / 2;

            if (distance < 0) {
              distance = 0;
            }

            if (distance < maxDistance) {
              result.push({
                point: p,
                distance,
              });
            }
          });
        }
      }
    }

    // Sort by distance
    return result.sort((a, b) => a.distance - b.distance);
  }
}

// ----- VECTOR FIELD STREAMLINES ----- //

class VField {
  constructor(options) {
    this.lineIndex = 0;
    this.seedIndex = 0;
    this.lines = [];
    this.done = false;

    const {
      // Mandatory params
      size,
      field,
      maxDistance,
      minDistance,
      // Optional params
      lineMaxLength = 1000,
      minLineWidth = 1,
      maxLineWidth = 1,
      maxSeedPointStep = 20,
      numberOfRandomSeeds = 5,
      maxLines = Infinity,
      step = 0.5,
      vectorGridStep = 10,
      skipDistanceCheck = false,
    } = options;

    this.size = size;
    this.field = field;
    this.minDistance = min(minDistance, maxDistance);
    this.maxDistance = max(minDistance, maxDistance);
    this.minLineWidth = min(minLineWidth, maxLineWidth);
    this.maxLineWidth = max(minLineWidth, maxLineWidth);
    this.lineMaxLength = lineMaxLength;
    this.maxSeedPointStep = maxSeedPointStep;
    this.numberOfRandomSeeds = numberOfRandomSeeds;
    this.maxLines = maxLines;
    this.step = step;
    this.grid = new Grid(this.size, this.minDistance + this.maxLineWidth);
    this.vectorGridStep = vectorGridStep;
    this.skipDistanceCheck = skipDistanceCheck;
  }

  init() {
    const width = this.getWidth();
    const start = new Vec(this.size.x * 0.5, this.size.y * 0.5, width);
    return this.getLine(start);
  }

  getWidth() {
    return random(this.minLineWidth, this.maxLineWidth);
  }

  getSeed(origin, normalVector, direction = 1) {
    const width = this.getWidth();
    const distance = this.maxDistance + width / 2 + origin.width / 2;
    const start = origin.add(normalVector.mulScalar(distance * direction));
    return {
      start,
      origin,
    };
  }

  getSeeds(points) {
    const seeds = [];
    // First point
    const first = points[0];
    const second = points[1];
    seeds.push(this.getSeed(first, first.sub(second).normalize()));
    // Last point
    const last = points[points.length - 1];
    const secondLast = points[points.length - 2];
    seeds.push(this.getSeed(last, last.sub(secondLast).normalize()));
    const MIN = 15;
    const MAX = 40;
    const step = min(max(floor(points.length * 0.2), MIN), MAX);
    // Above
    for (
      let i = random(1, step, undefined, 0);
      i < points.length - 1;
      i += step
    ) {
      seeds.push(
        this.getSeed(
          points[i],
          getBisectorVector(points[i - 1], points[i], points[i + 1]),
          1
        )
      );
    }

    // Below
    for (
      let i = random(1, step, undefined, 0);
      i < points.length - 1;
      i += step
    ) {
      seeds.push(
        this.getSeed(
          points[i],
          getBisectorVector(points[i - 1], points[i], points[i + 1]),
          -1
        )
      );
    }

    // Sprinkle in some random seeds
    for (let i = 0; i < this.numberOfRandomSeeds; i++) {
      const start = new Vec(
        random(0, this.size.x),
        random(0, this.size.y),
        this.getWidth()
      );
      seeds.push({
        start,
        origin: start,
      });
    }

    shuffle(seeds);
    return seeds;
  }

  getLine(start, origin = null) {
    const points = [];
    start.width = this.getWidth(); // TODO
    let current = start;
    // Forward
    for (let i = 0; i < this.lineMaxLength; i++) {
      const next = this.getNextPoint(current, 1);
      if (!next) {
        break;
      }

      points.push(next);
      current = next;
    }

    // Backward
    current = start;
    for (let i = 0; i < this.lineMaxLength; i++) {
      const next = this.getNextPoint(current, -1);
      if (!next) {
        break;
      }

      points.unshift(next);
      current = next;
    }

    if (points.length < 2) {
      return null;
    }

    const simplified = simplify(points, 0.03, true);
    points.forEach((v) => {
      this.grid.insert(v);
    });
    const seeds = this.getSeeds(points);
    const line = {
      points,
      simplified,
      width: start.width,
      seeds,
      originNormal: origin ? [origin, start] : null,
    };
    this.lines.push(line);
    this.done = this.lines.length === this.maxLines;
    return line;
  }

  rk4(point) {
    const { step } = this;
    const k1 = this.getVectorAtPoint(point);
    const k2 = this.getVectorAtPoint(point.add(k1.mulScalar(step * 0.5)));
    const k3 = this.getVectorAtPoint(point.add(k2.mulScalar(step * 0.5)));
    const k4 = this.getVectorAtPoint(point.add(k3.mulScalar(step)));

    return k1
      .add(k2.mulScalar(2))
      .add(k3.mulScalar(2))
      .add(k4)
      .mulScalar(step / 6);
  }

  getVectorAtPoint(point) {
    const n = this.field(point);
    const angle = n * PI;
    return new Vec(cos(angle), sin(angle));
  }

  getNextPoint(current, direction) {
    // const offset = this.getVectorAtPoint(current).mulScalar(this.step);
    const offset = this.rk4(current); //.mulScalar(this.step);
    const next = direction > 0 ? current.add(offset) : current.sub(offset);

    if (isOutOfBounds(next, this.size)) {
      return null;
    }

    if (!this.isPointValid(next)) {
      return null;
    }

    return next;
  }

  isPointValid(point) {
    if (this.skipDistanceCheck) {
      return true;
    }

    let maxDistance =
      this.minDistance + point.width / 2 + this.maxLineWidth / 2;

    const results = this.grid.nearest(point, maxDistance);
    if (results.length === 0) {
      return true;
    }

    for (let result of results) {
      if (
        result.distance <
        this.minDistance + (result.point.width + point.width) / 2
      ) {
        return false;
      }
    }

    return true;
  }

  next() {
    if (this.done) {
      return null;
    }

    if (this.lines.length === 0) {
      return this.init();
    }

    const currentLine = this.lines[this.lineIndex];
    for (let i = this.seedIndex; i < currentLine.seeds.length; i++) {
      const seed = currentLine.seeds[i];
      this.seedIndex = i + 1;
      if (seed && this.isPointValid(seed.start)) {
        return this.getLine(seed.start, seed.origin);
      }
    }

    this.lineIndex++;
    this.seedIndex = 0;
    if (this.lineIndex >= this.lines.length) {
      this.done = true;
      return null;
    }

    return this.next();
  }

  getAllLines() {
    const lines = [];
    while (!this.done) {
      const line = this.next();
      if (line) {
        lines.push(line);
      }
    }

    return lines;
  }
}

// ----- POST ----- //

class Example {
  constructor(wrapper, width, height, options, classToggles = []) {
    const svg = wrapper.querySelector('svg');

    this.svg = svg;
    this.width = width;
    this.height = height;
    this.options = options;

    const { noiseFactor } = this.options;
    const noise = createNoise2D();

    this.vField = new VField({
      size: new Vec(width, height),
      field: (v) => noise(v.x / noiseFactor, v.y / noiseFactor),
      minDistance: 1,
      maxDistance: 2,
      ...options,
    });

    this.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const regenerateVectorsButton = wrapper.querySelector(
      '.example__regenerate-vectors'
    );
    const randomVectorsButton = wrapper.querySelector(
      '.example__random-vectors'
    );

    if (regenerateVectorsButton) {
      regenerateVectorsButton.addEventListener('click', () => {
        this.updateNoiseField();
      });
    }

    if (randomVectorsButton) {
      randomVectorsButton.addEventListener('click', () => {
        this.updateRandomField();
      });
    }

    this.createGridPaths();
    this.createVectorPaths();

    const toggles = document.createElement('div');
    toggles.classList.add('example__toggles');

    classToggles.forEach((options) => {
      const button = document.createElement('button');
      button.classList.add('btn', 'btn--sm');

      const className = `example--hide-${options.type}`;

      let isHidden = !options.isVisible;

      if (isHidden) {
        button.classList.add('btn--empty');
        this.svg.classList.add(className);
      } else {
        button.classList.add('btn--main');
      }

      button.addEventListener('click', () => {
        isHidden = !isHidden;
        this.svg.classList.toggle(className);
        button.classList.toggle('btn--empty');
        button.classList.toggle('btn--main');

        button.textContent = `${isHidden ? 'Show' : 'Hide'} ${options.type}`;
      });

      button.textContent = `${isHidden ? 'Show' : 'Hide'} ${options.type}`;

      toggles.appendChild(button);
    });
    wrapper.appendChild(toggles);
  }

  updateNoiseField() {
    const noise = createNoise2D();
    const { noiseFactor } = this.options;

    const t = random(0, 1000);
    this.vField.field = (v) =>
      noise((v.x + t) / noiseFactor, (v.y + t) / noiseFactor);
    this.updateVectorPaths();
    this.drawLines();
  }

  drawChunkyLine(start) {
    const { vField } = this;
    const { vectorGridStep, size } = vField;

    const vectorLength = vectorGridStep * 0.85;

    // arrows
    const arrowLength = vectorLength * 0.1;
    const arrowHeight = vectorLength * 0.85;

    let defaultStart = new Vec(size.x * 0.5, size.y * 0.5);

    this.resetVField();
    const tmpStep = vField.step;
    vField.step = vectorGridStep;

    let current = start || defaultStart;
    let line = [];

    const doLine = (current, direction) => {
      for (let i = 0; i < 100; i++) {
        if (isOutOfBounds(current, size)) {
          break;
        }

        const offset = vField.rk4(current);
        const degrees = offset.angle() * (180 / PI);

        line.push({
          start: current,
          angle: degrees,
        });

        current = current.add(offset.mulScalar(direction));
      }
    };

    doLine(current, 1);
    doLine(current, -1);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('example__chunky-line');
    g.setAttribute('fill', 'none');
    g.setAttribute('stroke-linecap', 'round');
    g.setAttribute('stroke-linejoin', 'round');

    const paths = line.map(({ start, angle }) => {
      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      path.setAttribute('class', 'example__chunky-vector');
      path.setAttribute('vector-effect', 'non-scaling-stroke');
      path.setAttribute(
        'd',
        `
        M ${start.x} ${start.y} v ${vectorLength}
        M ${start.x - arrowLength} ${start.y + arrowHeight}
        L ${start.x} ${start.y + vectorLength}
        L ${start.x + arrowLength} ${start.y + arrowHeight}
        `
      );
      path.style.transform = `rotate(${angle + 90}deg)`;

      return path;
    });

    g.append(...paths);
    this.svg.appendChild(g);

    vField.step = tmpStep;
  }

  updateRandomField() {
    this.vField.field = (v) => random(-1, 1);
    this.updateVectorPaths();
    this.drawLines();
  }

  createGridPaths() {
    const { width, height } = this;
    const { vectorGridStep } = this.options;
    const lines = [];

    for (let x = 0; x <= width; x += vectorGridStep) {
      lines.push(
        `<path d="M ${x} 0 L ${x} ${height}" vector-effect="non-scaling-stroke" />`
      );
    }

    for (let y = 0; y <= height; y += vectorGridStep) {
      lines.push(
        `<path d="M 0 ${y} L ${width} ${y}" vector-effect="non-scaling-stroke" />`
      );
    }

    this.svg.innerHTML += `<g
      class="example__grid-lines"
      fill="none"
      stroke-linecap="round"
    >
      ${lines.join('\n')}
    </g>`;
  }

  updateVectorPaths() {
    const { vField, vectorPaths } = this;

    vectorPaths.forEach((col) => {
      col.forEach(({ x, y, path }) => {
        const p = new Vec(x, y);
        const angle = (vField.rk4(p).angle() / PI) * 180;
        path.style.transform = `rotate(${angle + 90}deg)`;
      });
    });
  }

  createVectorPaths() {
    const { vField } = this;

    this.vectorPaths = [];

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('example__vectors');
    g.setAttribute('fill', 'none');
    g.setAttribute('stroke-linecap', 'round');
    g.setAttribute('stroke-linejoin', 'round');

    const vectorLength = vField.vectorGridStep * 0.7;

    // arrows
    const arrowLength = vectorLength * 0.15;
    const arrowHeight = vectorLength * 0.75;

    for (let x = 0; x <= vField.size.x; x += vField.vectorGridStep) {
      const col = [];
      this.vectorPaths.push(col);

      for (let y = 0; y <= vField.size.y; y += vField.vectorGridStep) {
        const start = new Vec(x, y);

        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        path.setAttribute(
          'd',
          `
          M ${start.x} ${start.y} v ${vectorLength}
          M ${start.x - arrowLength} ${start.y + arrowHeight}
          L ${start.x} ${start.y + vectorLength}
          L ${start.x + arrowLength} ${start.y + arrowHeight}
          `
        );
        path.setAttribute('vector-effect', 'non-scaling-stroke');
        const angle = vField.field(start) * 180;
        path.style.transform = `rotate(${angle + 90}deg)`;

        col.push({ x, y, path });
        g.appendChild(path);
      }
    }

    this.svg.appendChild(g);
  }

  getLinePath(line) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('class', 'example__line');
    path.setAttribute('vector-effect', 'non-scaling-stroke');
    path.setAttribute(
      'd',
      `M ${line.simplified.map(({ x, y }) => `${x} ${y}`).join(' L ')}`
    );
    return path;
  }

  resetVField() {
    const { vField } = this;

    vField.lines = [];
    vField.done = false;
    vField.lineIndex = 0;
    vField.seedIndex = 0;
    vField.grid = new Grid(
      vField.size,
      vField.minDistance + vField.maxLineWidth
    );
  }

  drawLines() {
    const { vField } = this;

    let g = this.svg.querySelector('.example__lines');

    this.resetVField();

    vField.getAllLines();

    if (g) {
      g.style.transition = 'none';
      g.style.display = 'none';
      g.style.opacity = 0;
      g.innerHTML = '';
    }

    const paths = vField.lines.map((line) => {
      return this.getLinePath(line);
    });

    if (!g) {
      g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.classList.add('example__lines');
      g.setAttribute('fill', 'none');
      g.setAttribute('stroke-linecap', 'round');
      g.setAttribute('stroke-linejoin', 'round');
      this.svg.appendChild(g);
    }

    g.innerHTML = '';
    g.append(...paths);

    requestAnimationFrame(() => {
      g.style.display = '';

      requestAnimationFrame(() => {
        g.style.transition = '';
        g.style.opacity = 1;
      });
    });
  }
}

const exampleWhatIsVF = new Example(
  document.querySelector('.example--what-is-vector-field'),
  80,
  80,
  {
    vectorGridStep: 10,
    noiseFactor: 200,
    disableDistanceCheck: true,
  },
  [
    { type: 'grid', isVisible: true },
    { type: 'vectors', isVisible: true },
    { type: 'lines', isVisible: true },
  ]
);

// exampleWhatIsVF.drawLines();
exampleWhatIsVF.drawChunkyLine();

// exampleWhatIsVF.drawGrid();
// exampleWhatIsVF.drawVectors();
