const ansiMapLight: Record<string, string> = {
  "1": "font-weight: bold;",
  "2": "opacity: 0.6;",
  "4": "text-decoration: underline;",
  "30": "color: #4c4f69;", // text
  "31": "color: #d20f39;", // red
  "32": "color: #40a02b;", // green
  "33": "color: #df8e1d;", // yellow
  "34": "color: #1e66f5;", // blue
  "35": "color: #8839ef;", // magenta
  "36": "color: #179299;", // teal
  "37": "color: #dc8a78;", // rosewater-ish
  "90": "color: #9ca0b0;", // surface2
  "40": "background-color: #eff1f5;", // base
  "41": "background-color: #f2cdcd;", // red bg
  "42": "background-color: #c6e3a2;", // green bg
  "43": "background-color: #fae3b0;", // yellow bg
  "44": "background-color: #b5d1ff;", // blue bg
  "45": "background-color: #e1c8f9;", // magenta bg
  "46": "background-color: #a6dae3;", // cyan bg
  "47": "background-color: #f5e0dc;", // surface1
  "0": "</span>", // reset
};

const ansiMapDark: Record<string, string> = {
  "1": "font-weight: bold;",
  "2": "opacity: 0.6;",
  "4": "text-decoration: underline;",
  "30": "color: #cdd6f4;", // text
  "31": "color: #f38ba8;", // red
  "32": "color: #a6e3a1;", // green
  "33": "color: #f9e2af;", // yellow
  "34": "color: #89b4fa;", // blue
  "35": "color: #cba6f7;", // magenta
  "36": "color: #94e2d5;", // teal
  "37": "color: #f2cdcd;", // rosewater-ish
  "90": "color: #6c7086;", // overlay1
  "40": "background-color: #1e1e2e;", // base
  "41": "background-color: #45475a;", // subtle red bg
  "42": "background-color: #313244;", // subtle green bg
  "43": "background-color: #575b70;", // subtle yellow bg
  "44": "background-color: #585b70;", // subtle blue bg
  "45": "background-color: #6c7086;", // magenta bg
  "46": "background-color: #74c7ec;", // cyan bg
  "47": "background-color: #f5c2e7;", // pink bg
  "0": "</span>",
};

export const ansiToHtml = (ansi: string): string => {
  const converted = ansi.replace(/\x1b\[([\d;]+)m/g, (_, codes) => {
    const styles = codes
      .split(";")
      .map((code: string) => ansiMapDark[code] || "")
      .filter((s: string) => s !== "</span>")
      .join("");

    return codes.includes("0") ? "</span>" : `<span style="${styles}">`;
  });

  // Remove any remaining control characters
  return converted.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "");
};
