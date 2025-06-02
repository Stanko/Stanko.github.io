import sharp from 'sharp';

/**
 * Represents a word with optional highlighting
 */
type TextPart = {
  text: string;
  span: boolean;
};

/**
 * Class for generating styled text images with highlighting capabilities
 */
class MetaImage {
  /**
   * Resizes an SVG to specified dimensions
   */
  private async resizeSvgToSharp(
    svgBuffer: Buffer,
    { width, height }: { width?: number; height?: number }
  ) {
    const instance = sharp(svgBuffer);
    const metadata = await instance.metadata();
    const initDensity = metadata.density ?? 72;

    let wDensity = 0;
    let hDensity = 0;

    if (width && metadata.width) {
      wDensity = (initDensity * width) / metadata.width;
    }

    if (height && metadata.height) {
      hDensity = (initDensity * height) / metadata.height;
    }

    return sharp(svgBuffer, { density: Math.max(wDensity, hDensity) }).resize(
      width,
      height
    );
  }

  private titleToTextParts = (title: string): TextPart[] => {
    return title
      .split(/(<span>.*?<\/span>)/g)
      .map((part) => {
        const p = part.trim();
        const span = p.startsWith('<span>') && p.endsWith('</span>');
        const rawText = p.replace('<span>', '').replace('</span>', '');

        return rawText.split(/\s+/g).map((text) => ({
          text: text.trim(),
          span,
        }));
      })
      .flat();
  };

  private textPartsToLines = (
    textParts: TextPart[],
    lineLength: number
  ): TextPart[][] => {
    let currentLength = 0;
    let currentLine: TextPart[] = [];
    const lines: TextPart[][] = [currentLine];

    textParts.forEach((part) => {
      const partLength = part.text.length;

      if (currentLength + partLength > lineLength) {
        // new line
        currentLength = 0;
        currentLine = [part];
        lines.push(currentLine);
      } else {
        currentLine.push(part);
        currentLength += partLength + 1; // +1 for space
      }
    });

    return lines;
  };

  /**
   * Creates an SVG with styled text
   */
  private createSvg(
    text: string,
    lineLength: number,
    themeColor: string = '#196ee6'
  ): string {
    const lines = this.textPartsToLines(
      this.titleToTextParts(text),
      lineLength
    );
    const lineHeight = 10;
    const start = 50 - (lineHeight * lines.length) / 2;

    const svgText = lines
      .map((line, i) => {
        const words = line
          .map((word) => {
            return word.span
              ? `<tspan dominant-baseline="middle">${word.text}</tspan>`
              : word.text;
          })
          .join(' ');

        const y = start + i * lineHeight;
        return `<text x="10%" y="${y}%" dominant-baseline="middle">${words}</text>`;
      })
      .join('\n');

    return `
      <svg viewBox="0 0 1200 628" xmlns="http://www.w3.org/2000/svg">
        <style>
          text {
            font-family: 'Marvin Visions', sans-serif;
            font-variation-settings: 'wdth' 100;
            font-weight: 900;
            font-size: 72px;
            width: 800px;
            white-space: wrap;
            height: 600px;
            fill: #000000;
          }

          tspan {
            fill: ${themeColor};
          }

          text, tspan {
            line-height: 1;
          }
        </style>

        ${svgText}
      </svg>
    `;
  }

  /**
   * Generates a PNG image from text with optional highlighted sections
   * @param options - Configuration options
   * @returns Promise that resolves when the file is written
   */
  async generatePNG(options: {
    text: string;
    lineLength?: number;
    themeColor?: string;
    outputPath?: string;
    width?: number;
  }): Promise<void> {
    const {
      text,
      lineLength = 30,
      themeColor = '#196ee6',
      outputPath = 'post-image.png',
      width = 1200,
    } = options;

    const svg = this.createSvg(text, lineLength, themeColor);

    try {
      console.time('meta image');
      await (await this.resizeSvgToSharp(Buffer.from(svg), { width }))
        .png()
        .toFile(outputPath);
      console.timeEnd('meta image');
    } catch (error) {
      console.error('Error generating image:', error);
    }
  }
}

export default MetaImage;

const metaImage = new MetaImage();
metaImage.generatePNG({
  text: 'The <span>Tiny Book</span> of Great Joys',
  lineLength: 30,
  themeColor: '#196ee6',
});
