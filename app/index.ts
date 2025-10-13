import { Brz } from './lib/brz';

// TODO
// There is an issue with exporting constants and the instance of Brz here
// because if we import anything from this file, it will start the build process
// It is not the end of the world, but if I decide to release it publicly, I should probably fix it

export * from './lib/types';
export * from './lib/constants';

export const brz = new Brz();
