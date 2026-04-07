import fs from 'fs';
import { join } from 'path';
import {
  Canvas,
  CanvasRenderingContext2D,
  createCanvas,
  registerFont,
} from 'canvas';
import { dirs } from '../lib/constants';
import { log, paint } from './log';

type Word = {
  text: string;
  isHighlighted: boolean;
};

const MARVIN_TTF_PATH = join(
  dirs.PUBLIC,
  'fonts',
  'MarvinVisions-Variable.ttf'
);

// Poor man's version of TeX's line-breaking algorithm described in this post:
// https://blogs.perl.org/users/damian_conway/2019/08/greed-is-good-balance-is-better-beauty-is-best.html
export const textWrap = (words: Word[], width = 30): Word[][] => {
  const wordLen = words.map((w) => w.text.length);
  const wordCount = words.length;

  // Initialize tables
  const eolGap: number[][] = Array.from({ length: wordCount + 1 }, () =>
    Array(wordCount + 1).fill(0)
  );
  const lineCost: number[][] = Array.from({ length: wordCount + 1 }, () =>
    Array(wordCount + 1).fill(0)
  );

  const totalCost: number[] = Array(wordCount + 1).fill(0);
  const breakPos: number[] = Array(wordCount + 1).fill(0);

  // Build EOL gap table
  for (let i = 1; i <= wordCount; i++) {
    eolGap[i]![i] = width - wordLen[i - 1]!;

    for (let j = i + 1; j <= wordCount; j++) {
      eolGap[i]![j] = eolGap[i]![j - 1]! - wordLen[j - 1]! - 1;
    }
  }

  // Compute line costs
  for (let i = 1; i <= wordCount; i++) {
    for (let j = i; j <= wordCount; j++) {
      if (eolGap[i]![j]! < 0) {
        lineCost[i]![j] = Infinity;
      } else if (j === wordCount) {
        lineCost[i]![j] = 0;
      } else {
        lineCost[i]![j] = Math.pow(eolGap[i]![j]!, 2);
      }
    }
  }

  // Compute minimal total cost
  totalCost[0] = 0;
  for (let j = 1; j <= wordCount; j++) {
    totalCost[j] = Infinity;

    for (let i = 1; i <= j; i++) {
      const lineIJCost = totalCost[i - 1]! + lineCost[i]![j]!;
      if (lineIJCost < totalCost[j]!) {
        totalCost[j] = lineIJCost;
        breakPos[j] = i;
      }
    }
  }

  // Reconstruct lines
  const lines: Word[][] = [];
  let endWord = wordCount;

  while (endWord > 0) {
    const startWord = breakPos[endWord]! - 1;
    lines.push(words.slice(startWord, endWord));
    endWord = startWord;
  }

  // Avoid orphan words in the last line
  if (lines[0]!.length === 1 && lines.length > 1) {
    const lastFromPrevLine = lines[1]!.pop() as Word;
    lines[0] = [lastFromPrevLine, lines[0]![0]!];
  }

  return lines.reverse();
};

// Parses a string that might contain <span> tags and returns an array of Word objects.
// All words inside <span> tags are marked as isHighlighted: true.
const parseTitle = (title: string): Word[] => {
  return title
    .split(/(<span>.*?<\/span>)/g)
    .map((part) => {
      const p = part.trim();
      const isHighlighted = p.startsWith('<span>') && p.endsWith('</span>');
      const rawText = p.replace('<span>', '').replace('</span>', '');

      return rawText.split(/\s+/g).map((text) => ({
        text: text.trim(),
        isHighlighted,
      }));
    })
    .flat()
    .filter((item) => item.text.length > 0);
};

export type Theme = 'red' | 'blue' | 'gray' | 'purple' | 'orange';

type MetaImageGeneratorOptions = {
  theme?: Theme;
  width?: number;
  height?: number;
  fontSize?: number;
  lineHeight?: number;
};

type ThemeColors = {
  bg: string;
  fg: string;
  highlight: string;
};

const themes: Record<Theme, ThemeColors> = {
  red: {
    bg: '#fef7fc',
    fg: '#130509',
    highlight: '#cb4264',
  },
  blue: {
    bg: '#eaf1fe',
    fg: '#020a1d',
    highlight: '#356cde',
  },
  gray: {
    bg: '#eef0f4',
    fg: '#070709',
    highlight: '#5f6774',
  },
  purple: {
    bg: '#f3effa',
    fg: '#0d0717',
    highlight: '#8156c9',
  },
  orange: {
    bg: '#fff5ee',
    fg: '#281b0f',
    highlight: '#e8853a',
  },
};

export class MetaImageGenerator {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  canvas: Canvas;

  constructor(width: number = 1600, height: number = 900) {
    this.width = width;
    this.height = height;
    this.canvas = createCanvas(width, height);
    this.ctx = this.canvas.getContext('2d');

    registerFont(MARVIN_TTF_PATH, { family: 'MarvinVisions' });
  }

  generate(
    title: string,
    outputPath: string,
    options: MetaImageGeneratorOptions = {}
  ) {
    const start = Date.now();
    const { canvas, ctx } = this;
    const {
      theme = 'blue',
      width = 1600,
      height = 900,
      fontSize = 90,
      lineHeight = 1,
    } = options;
    const { bg, fg, highlight } = themes[theme];
    const lines = textWrap(parseTitle(title));

    // Background
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Stripe
    ctx.fillStyle = highlight;
    ctx.fillRect(0, 0, width, 8);

    // Text setup
    ctx.font = `bold ${fontSize}px MarvinVisions`;
    ctx.textBaseline = 'top';

    // Vertical centering
    const lh = fontSize * lineHeight;
    const totalTextHeight = lines.length * lh - (lh - fontSize);
    const startY = (height - totalTextHeight) / 2;

    // Draw lines
    lines.forEach((line, lineIndex) => {
      const y = startY + lineIndex * lh;
      let x = 50; // left text offset

      for (const word of line) {
        const text = word.text + ' ';
        ctx.fillStyle = word.isHighlighted ? highlight : fg;
        ctx.fillText(text, x, y);
        x += ctx.measureText(text).width;
      }
    });

    fs.writeFileSync(outputPath, new Uint8Array(canvas.toBuffer('image/png')));
    log.verbose(
      paint.blue('meta image:'),
      `${title} [${Date.now() - start}ms]`
    );
  }
}
