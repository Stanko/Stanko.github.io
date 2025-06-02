import { join } from 'path';
import { dirs, IS_DEV, IS_PROD } from './constants';
import { log, paint } from '@brz/utils/log';

const APP_ENTRY = join(dirs.JS, 'app.js');
const PHOTOSWIPE_ENTRY = join(dirs.JS, 'photoswipe.js');

export const compileJS = async () => {
  const start = Date.now();
  await Bun.build({
    entrypoints: [APP_ENTRY, PHOTOSWIPE_ENTRY],
    outdir: join(dirs.OUTPUT, 'js'),
    sourcemap: IS_DEV ? 'external' : 'none',
    minify: IS_PROD,
  });
  log.info(
    paint.blue('js:'),
    `compiled client side js [${Date.now() - start}ms]`
  );
};
