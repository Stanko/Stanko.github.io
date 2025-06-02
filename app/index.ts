import { Brz } from './lib/brz';

export * from './lib/types';
export * from './lib/constants';

const global = globalThis as any;

// Ensure a single instance of Brz is created
if (!global.__instance) {
  global.__instance = new Brz();
}

export const brz = global.__instance;
