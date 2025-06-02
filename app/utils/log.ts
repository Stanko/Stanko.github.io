import { LOG_LEVEL } from '../lib/constants';

export const log = {
  info: (...props: unknown[]) => {
    console.log(...props);
  },
  verbose: (...props: unknown[]) => {
    if (LOG_LEVEL === 'verbose') {
      console.log(...props);
    }
  },
};

const reset = '\x1b[0m';

export const paint = {
  green: (text: string) => `\x1b[32m${text}${reset}`,
  red: (text: string) => `\x1b[31m${text}${reset}`,
  blue: (text: string) => `\x1b[34m${text}${reset}`,
  yellow: (text: string) => `\x1b[33m${text}${reset}`,
  magenta: (text: string) => `\x1b[35m${text}${reset}`,
  cyan: (text: string) => `\x1b[36m${text}${reset}`,
  white: (text: string) => `\x1b[37m${text}${reset}`,
};
