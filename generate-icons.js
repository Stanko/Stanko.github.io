const { execSync } = require("child_process");
const fs = require("fs");

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

function getCoverSVG(fill) {
  return `<svg viewBox="0 0 251.354 129.646" xmlns="http://www.w3.org/2000/svg">
<path fill="#f2f5f9" d="M0 0h251.354v129.646H0z"/>
<path fill="${fill}" d="M93.424 56.885H91.25c-2.14 0-4.21 1.15-5.016 2.301-.805-1.15-2.876-2.3-5.016-2.3h-3.91V72.76h3.91V60.797c1.496.069 3.221 1.127 3.221 3.336v8.627h3.59v-8.627c0-2.209 1.725-3.267 3.22-3.336V72.76h4.349V60.797c1.495.069 3.221 1.127 3.221 3.336v8.627h3.59v-8.627c0-2.209 1.725-3.267 3.22-3.336V72.76h3.911V56.885h-3.91c-2.14 0-4.211 1.15-5.016 2.301-.806-1.15-2.876-2.3-5.016-2.3z" />
<text xml:space="preserve" style="line-height:1.25" x="-136.825" y="-71.448" font-weight="400" font-size="10.583" font-family="sans-serif" letter-spacing=".132" stroke-width=".265" transform="translate(253.119 140.595)"><tspan style="-inkscape-font-specification:'Marvin Visions'" x="-136.825" y="-71.448" font-family="Marvin Visions"><tspan font-size="12.7">M</tspan><tspan font-size="11.289">uffin</tspan><tspan font-size="12.7">M</tspan><tspan font-size="11.289">an</tspan></tspan></text>
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
    icon32svg: `./static/favicon/${colorName}/icon.svg`,
    icon32ico: `./static/favicon/${colorName}/icon-32.ico`,
    icon32png: `./static/favicon/${colorName}/icon-32.png`,
    icon32svgWithPadding: `./static/favicon/${colorName}/icon-with-padding.svg`,
    // have padding
    icon180png: `./static/favicon/${colorName}/icon-180.png`,
    icon192png: `./static/favicon/${colorName}/icon-192.png`,
    icon512png: `./static/favicon/${colorName}/icon-512.png`,
    // cover
    coverSvg: `./static/favicon/${colorName}/cover.svg`,
    coverPng: `./static/favicon/${colorName}/cover.png`,
    // manifest
    manifest: `./static/favicon/${colorName}/manifest.webmanifest`,
  };
}

function generateIconSet(colorName, color) {
  console.log(`* Generating ${colorName} icons and cover...`);
  const svg = getSvg(color);
  const svgWithPadding = getSvgWithPadding(color);
  const svgCover = getCoverSVG(color);
  const manifest = getManifest(colorName);
  const fileNames = getFileNames(colorName);

  const dir = `./static/favicon/${colorName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(fileNames.icon32svg, svg, { encoding: "utf-8" });
  fs.writeFileSync(fileNames.icon32svgWithPadding, svgWithPadding, {
    encoding: "utf-8",
  });
  fs.writeFileSync(fileNames.coverSvg, svgCover, {
    encoding: "utf-8",
  });
  fs.writeFileSync(fileNames.manifest, manifest, { encoding: "utf-8" });

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
  blue: "#196ee1",
  red: "#d62940",
  gray: "#304f6e",
  purple: "#8854d0",
  orange: "#ec6b00",
};

for (colorName in colors) {
  generateIconSet(colorName, colors[colorName]);
}
