export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};
export type Easing = [number, number, number, number];
export type PropertyKeyframe = {
  key: number;
  value: number;
  unit: string;
  easing: Easing;
  rgba?: Color;
};
export type PropertyKeyframes = {
  name: string;
  keyframes: PropertyKeyframe[];
};
export type KeyframesData = {
  transform: Record<string, PropertyKeyframes>;
  filter: Record<string, PropertyKeyframes>;
  colors: Record<string, PropertyKeyframes>;
  numeric: Record<string, PropertyKeyframes>;
};
export type AnimationData = KeyframesData & {
  name: string;
};
export declare const EASINGS: Record<string, Easing>;
export declare const RGBAtoNumber: (rgba: Color) => number;
export declare const getCanvasContext2D: () => CanvasRenderingContext2D;
export declare const parseKeyframes: (
  input: ComputedKeyframe[]
) => KeyframesData;
export declare const parse: (animation: CSSAnimation) => AnimationData;
