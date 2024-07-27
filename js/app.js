import "./debug";

import "./archive";
import "./color-scheme-switcher";
import "./comments";
import "./in-viewport";
import "./keyboard";
import "./menu";
import "./scroll-to";
import "./search";
import "./sidenote";
import "./spoiler";

document.documentElement.style.setProperty(
  "--scrollbar-width",
  window.innerWidth - document.documentElement.clientWidth + "px"
);
