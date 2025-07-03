import { AnimationData, Easing, PropertyKeyframes, Color } from './parser.js';
export type Vector = {
  x: number;
  y: number;
};
type Segment = {
  start: number;
  end: number;
  easing: Easing;
  name: string;
  startValue: number;
  endValue: number;
  rgbaStartValue?: Color;
  rgbaEndValue?: Color;
  unit?: string;
  scale: number;
  curve: Vector[];
};
type Properties = {
  name: string;
  color: string;
  line: string;
  fill: string;
  segments: Segment[];
}[];
export type MinMax = {
  min: number;
  max: number;
};
type Options = {
  height?: number;
  colors?: string[];
  playbackSpeed?: number;
};
export declare class Monorail {
  animation: CSSAnimation;
  animationData: AnimationData;
  height: number;
  heightNegative: number;
  totalHeight: number;
  scales: Record<string, number>;
  properties: Properties;
  playbackSpeed: number;
  isPlaying: boolean;
  isDragging: boolean;
  colors: string[];
  colorIndex: number;
  svg: SVGElement;
  playPauseButton: HTMLButtonElement;
  tooltip: HTMLDivElement;
  element: HTMLDivElement;
  valuesDivs: Record<string, HTMLDivElement>;
  constructor(animation: CSSAnimation, options?: Options);
  getMinMaxValues: () => Record<string, MinMax>;
  prepareAnimation: (data: Record<string, PropertyKeyframes>) => Properties;
  getPoint: (p: Vector, scale: number, color: string) => string;
  renderGraph: () => void;
  buildTooltip: () => void;
  updateTooltip: (offsetX: number, xPercentage: number) => void;
  update: (axis: SVGGElement, offsetX: number, moveAnimation?: boolean) => void;
  play: (axis: SVGGElement) => void;
  pause: () => void;
  addEvents: (axis: SVGGElement) => void;
  handleMouseUp: () => void;
  destroy: () => void;
}
export {};
