import { MinMax } from './monorail.js';
export declare const getScales: (
  height: number,
  minMaxValues: Record<string, MinMax>
) => Record<string, number>;
export declare function roundToNiceValue(value: number): number;
