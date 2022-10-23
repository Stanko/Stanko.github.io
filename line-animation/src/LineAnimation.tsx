import {createNoise2D} from 'simplex-noise';
import seedrandom from 'seedrandom';
import Color from 'colorjs.io';

import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const seed = 'zappa1002000009';

const rng = seedrandom(seed);
const noise = createNoise2D(rng);

const n = (x: number, y = 0): number => {
  return (noise(x, y) + 1) / 2;
};

export const LineAnimation: React.FC<{width: number; height: number}> = ({
  width,
  height,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const circles = [];

  const color1: any = new Color('#2b5c7a');
  const color2: any = new Color('#dd5d46');

  const colorRange = color1.range(color2, {
    space: 'lch',
    // hue: 'longer',
    outputSpace: 'srgb',
  });

  const padding = width * 0.1;
  const w = width - padding * 2;
  const h = height - padding * 2;
  const radius = width * 0.04;

  const roundColor = (v: number): number => Math.round(v * 255);

  for (let i = 0; i < frame; i++) {
    const progress = i / durationInFrames;

    const [r, g, b] = colorRange(
      // cssEase(progress)
      progress
    ).coords;

    const biasX = 0.3;
    const noiseBiasX = biasX * w;
    const timeBiasX = (1 - biasX * 0.5) * w;

    const sinY = (Math.sin(i * 0.03) + 1) / 2;

    circles.push({
      x: padding + progress * timeBiasX + n(i * 0.005, 10) * noiseBiasX,
      y: padding + sinY * h * (1 - progress * 0.5),
      r: radius + radius * (1 - progress),
      fill: `rgb(${roundColor(r)},${roundColor(g)},${roundColor(b)})`,
    });
  }

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill
      style={{ background: 'linear-gradient(to left, #fafafb, #f4f4f5)' }}
    >
      <svg viewBox={`0 0 ${width} ${height}`}>
        {circles.map((circle, index) => {
          return (
            <circle
              key={index}
              cx={circle.x}
              cy={circle.y}
              r={circle.r}
              fill={circle.fill}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
