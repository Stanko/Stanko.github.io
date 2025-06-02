import { join } from 'node:path';

const cwd = process.cwd();

export const dirs = {
  CWD: cwd,
  APP: join(cwd, 'app'),
  BRZ_COMPONENTS: join(cwd, 'app', 'components'),
  SITE: join(cwd, 'site'),
  JS: join(cwd, 'site', 'js'),
  SCSS: join(cwd, 'site', 'scss'),
  CONTENT: join(cwd, 'site', 'content'),
  PUBLIC: join(cwd, 'site', 'public'),
  TEMPLATES: join(cwd, 'site', 'templates'),
  COMPONENTS: join(cwd, 'site', 'components'),
  OUTPUT: join(cwd, 'dist'),
  OUTPUT_CSS: join(cwd, 'dist', 'css'),
  COMMENTS: join(cwd, 'site', 'comments'),
};

export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}-/;
export const DATE_MATCH_REGEX = /^(\d{4}-\d{2}-\d{2})-(.*)/;

import { parseArgs } from 'util';

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    dev: {
      type: 'boolean',
    },
    verbose: {
      type: 'boolean',
    },
  },
  strict: true,
  allowPositionals: true,
});

export const IS_DEV = values.dev || false;
export const IS_PROD = !IS_DEV;

export const LOG_LEVEL: 'info' | 'verbose' = values.verbose
  ? 'verbose'
  : 'info';
