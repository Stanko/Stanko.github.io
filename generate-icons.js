import { execSync } from 'child_process';
import fs from 'fs';

// Depends on librsvg and imagemagick
// brew install librsvg
// brew install imagemagick

function convertSvgToPng(input, output, height) {
  const command = `rsvg-convert -h ${height} ${input} > ${output}`;
  let stdout = execSync(command);
  // console.log(stdout.toString());
}

function convertPngToIco(input, output, size = 32) {
  const command = `magick ${input} -background none -resize ${size}x${size} -density ${size}x${size} ${output}`;
  let stdout = execSync(command);
  // console.log(stdout.toString());
}

function getSvg(fill) {
  return `<svg aria-hidden="true" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
<path fill="${fill}" stroke="none" d="M16 8.12h-2.158c-2.124 0-4.18 1.142-4.98 2.284-.8-1.142-2.855-2.284-4.98-2.284H0v15.76h3.883V12.003c1.485.069 3.198 1.12 3.198 3.312v8.565h3.563v-8.565c0-2.193 1.713-3.243 3.198-3.312V23.88h4.316V12.003c1.485.069 3.198 1.12 3.198 3.312v8.565h3.563v-8.565c0-2.193 1.713-3.243 3.198-3.312V23.88H32V8.12h-3.882c-2.125 0-4.18 1.142-4.98 2.284-.8-1.142-2.855-2.284-4.98-2.284Z" />
</svg>`;
}

function getSvgWithPadding(fill) {
  return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path fill="#fff" d="M0 0h32v32H0z"/>
<path fill="${fill}" d="M16 10.09h-1.619c-1.593 0-3.135.857-3.735 1.713-.6-.857-2.14-1.713-3.735-1.713H4v11.82h2.912v-8.908c1.114.052 2.399.84 2.399 2.484v6.424h2.672v-6.424c0-1.645 1.285-2.432 2.398-2.484v8.908h3.238v-8.908c1.113.052 2.398.84 2.398 2.484v6.424h2.672v-6.424c0-1.645 1.285-2.432 2.399-2.484v8.908H28V10.09h-2.912c-1.593 0-3.135.857-3.735 1.713-.6-.857-2.14-1.713-3.735-1.713z"/>
</svg>`;
}

function getCoverWordmarkSVG() {
  // Marvin Visions outlines: opsz=100, wght=170, letter-spacing=0.075.
  // Font sizes: 12.7 for the Ms, 11.289 for the remaining letters.
  // Outlines keep rendering consistent without an installed font or SVG axis support.
  return `<defs>
<path id="cover-glyph-m" d="M 15 -690 L 185 -690 C 227 -690 267.832031 -681 307.5 -663 C 347.167969 -645 379 -621 403 -591 C 427 -621 458.832031 -645 498.5 -663 C 538.167969 -681 579 -690 621 -690 L 791 -690 L 791 0 L 621 0 L 621 -520 L 619 -520 C 596.332031 -518.667969 574.5 -512.332031 553.5 -501 C 532.5 -489.667969 515.167969 -473.332031 501.5 -452 C 487.832031 -430.667969 481 -405 481 -375 L 481 0 L 325 0 L 325 -375 C 325 -405 318.167969 -430.667969 304.5 -452 C 290.832031 -473.332031 273.5 -489.667969 252.5 -501 C 231.5 -512.332031 209.667969 -518.667969 187 -520 L 185 -520 L 185 0 L 15 0 Z M 15 -690"/>
<path id="cover-glyph-u" d="M 263 10 C 221 10 181.167969 0.332031 143.5 -19 C 105.832031 -38.332031 75 -68.332031 51 -109 C 27 -149.667969 15 -200 15 -260 L 15 -690 L 185 -690 L 185 -260 C 185 -226 191 -200 203 -182 C 215 -164 235 -155 263 -155 C 291 -155 311 -164 323 -182 C 335 -200 341 -226 341 -260 L 341 -690 L 511 -690 L 511 -260 C 511 -200 499 -149.667969 475 -109 C 451 -68.332031 420.167969 -38.332031 382.5 -19 C 344.832031 0.332031 305 10 263 10 Z M 263 10"/>
<path id="cover-glyph-f" d="M 15 -690 L 450 -690 L 450 -525 L 185 -525 L 185 -425 L 365 -425 L 365 -265 L 185 -265 L 185 0 L 15 0 Z M 15 -690"/>
<path id="cover-glyph-i" d="M 15 -690 L 185 -690 L 185 0 L 15 0 Z M 15 -690"/>
<path id="cover-glyph-n" d="M 15 -690 C 60.332031 -690 102.832031 -685.332031 142.5 -676 C 182.167969 -666.667969 218.332031 -653.167969 251 -635.5 C 283.667969 -617.832031 313.332031 -596.332031 340 -571 L 340 -690 L 510 -690 L 510 0 L 340 0 L 340 -214 C 340 -260.667969 334.332031 -301.667969 323 -337 C 311.667969 -372.332031 294.5 -402.167969 271.5 -426.5 C 248.5 -450.832031 219.667969 -468.667969 185 -480 L 185 0 L 15 0 Z M 15 -690"/>
<path id="cover-glyph-a" d="M 12 -214 C 12 -320.667969 32.667969 -409.5 74 -480.5 C 115.332031 -551.5 172.667969 -604.167969 246 -638.5 C 319.332031 -672.832031 404.667969 -690 502 -690 L 502 0 L 332 0 L 332 -100 L 182 -100 L 182 0 L 12 0 Z M 332 -265 L 332 -491 C 286.667969 -473.667969 252 -445.832031 228 -407.5 C 204 -369.167969 189.332031 -321.667969 184 -265 Z M 332 -265"/>
</defs>
<g fill="#000" aria-label="MuffinMan">
<use href="#cover-glyph-m" transform="translate(116.294 69.147) scale(0.0127)"/>
<use href="#cover-glyph-u" transform="translate(126.6052 69.147) scale(0.011289)"/>
<use href="#cover-glyph-f" transform="translate(132.618214 69.147) scale(0.011289)"/>
<use href="#cover-glyph-f" transform="translate(137.942599 69.147) scale(0.011289)"/>
<use href="#cover-glyph-i" transform="translate(143.266984 69.147) scale(0.011289)"/>
<use href="#cover-glyph-n" transform="translate(145.599784 69.147) scale(0.011289)"/>
<use href="#cover-glyph-m" transform="translate(151.601509 69.147) scale(0.0127)"/>
<use href="#cover-glyph-a" transform="translate(161.912709 69.147) scale(0.011289)"/>
<use href="#cover-glyph-n" transform="translate(167.824122 69.147) scale(0.011289)"/>
</g>`;
}

function getCoverSVG(fill) {
  return `<svg viewBox="0 0 251.354 129.646" xmlns="http://www.w3.org/2000/svg">
<path fill="#f2f5f9" d="M0 0h251.354v129.646H0z"/>
<path fill="${fill}" d="M93.424 56.885H91.25c-2.14 0-4.21 1.15-5.016 2.301-.805-1.15-2.876-2.3-5.016-2.3h-3.91V72.76h3.91V60.797c1.496.069 3.221 1.127 3.221 3.336v8.627h3.59v-8.627c0-2.209 1.725-3.267 3.22-3.336V72.76h4.349V60.797c1.495.069 3.221 1.127 3.221 3.336v8.627h3.59v-8.627c0-2.209 1.725-3.267 3.22-3.336V72.76h3.911V56.885h-3.91c-2.14 0-4.211 1.15-5.016 2.301-.806-1.15-2.876-2.3-5.016-2.3z" />
${getCoverWordmarkSVG()}
</svg>
`;
}

function getManifest(colorName) {
  return `{
    "icons": [
      { "src": "/favicon/${colorName}/icon-192.png", "type": "image/png", "sizes": "192x192" },
      { "src": "/favicon/${colorName}/icon-512.png", "type": "image/png", "sizes": "512x512" }
    ]
  }`;
}

function getFileNames(colorName) {
  return {
    // no padding
    icon32svg: `./site/public/favicon/${colorName}/icon.svg`,
    icon32ico: `./site/public/favicon/${colorName}/icon-32.ico`,
    icon32png: `./site/public/favicon/${colorName}/icon-32.png`,
    icon32svgWithPadding: `./site/public/favicon/${colorName}/icon-with-padding.svg`,
    // have padding
    icon180png: `./site/public/favicon/${colorName}/icon-180.png`,
    icon192png: `./site/public/favicon/${colorName}/icon-192.png`,
    icon512png: `./site/public/favicon/${colorName}/icon-512.png`,
    // cover
    coverSvg: `./site/public/favicon/${colorName}/cover.svg`,
    coverPng: `./site/public/favicon/${colorName}/cover.png`,
    // manifest
    manifest: `./site/public/favicon/${colorName}/manifest.webmanifest`,
  };
}

function generateIconSet(colorName, color) {
  console.log(`* Generating ${colorName} icons and cover...`);
  const svg = getSvg(color);
  const svgWithPadding = getSvgWithPadding(color);
  const svgCover = getCoverSVG(color);
  const manifest = getManifest(colorName);
  const fileNames = getFileNames(colorName);

  const dir = `./site/public/favicon/${colorName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(fileNames.icon32svg, svg, { encoding: 'utf-8' });
  fs.writeFileSync(fileNames.icon32svgWithPadding, svgWithPadding, {
    encoding: 'utf-8',
  });
  fs.writeFileSync(fileNames.coverSvg, svgCover, {
    encoding: 'utf-8',
  });
  fs.writeFileSync(fileNames.manifest, manifest, { encoding: 'utf-8' });

  convertSvgToPng(fileNames.icon32svg, fileNames.icon32png, 32);
  convertPngToIco(fileNames.icon32png, fileNames.icon32ico, 32);

  convertSvgToPng(fileNames.icon32svgWithPadding, fileNames.icon180png, 180);
  convertSvgToPng(fileNames.icon32svgWithPadding, fileNames.icon192png, 192);
  convertSvgToPng(fileNames.icon32svgWithPadding, fileNames.icon512png, 512);

  convertSvgToPng(fileNames.coverSvg, fileNames.coverPng, 490);

  fs.unlinkSync(fileNames.icon32svgWithPadding);
  fs.unlinkSync(fileNames.coverSvg);
}

const colors = {
  blue: '#196ee1',
  red: '#d62940',
  gray: '#304f6e',
  purple: '#8854d0',
  orange: '#ec6b00',
  green: '#4b8d68',
};

for (let colorName in colors) {
  generateIconSet(colorName, colors[colorName]);
}

console.log('Done.');
