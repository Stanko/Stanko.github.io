import fs from 'node:fs';
import { join } from 'node:path';
import { compileAsync } from 'sass-embedded';
import { dirs, IS_DEV } from './constants';
import { log, paint } from '../utils/log';

const processScssDir = async (dir: string, outputDir: string) => {
  const scssFiles = fs
    .readdirSync(dir)
    // Ignore _partials
    .filter((file) => file.endsWith('.scss') && !file.startsWith('_'));

  for (const file of scssFiles) {
    const filePath = join(dir, file);
    const cssFilePath = join(
      dirs.OUTPUT,
      outputDir,
      file.replace('.scss', '.css')
    );

    const start = Date.now();
    const result = await compileAsync(filePath, {
      style: IS_DEV ? 'expanded' : 'compressed',
      sourceMap: true,
      // TODO handle deprecations
      silenceDeprecations: [
        'color-functions',
        'global-builtin',
        'import',
        'slash-div',
      ],
      // loadPaths: [dir],
    });

    Bun.write(cssFilePath, result.css);
    Bun.write(`${cssFilePath}.map`, JSON.stringify(result.sourceMap));

    log.verbose(paint.blue('sass:'), `${file} [${Date.now() - start}ms]`);
  }
};

export const compileSASS = async () => {
  const start = Date.now();
  await processScssDir(dirs.SCSS, 'css');
  await processScssDir(join(dirs.SCSS, 'posts'), join('css', 'posts'));
  log.info(paint.blue('sass:'), `compiled sass [${Date.now() - start}ms]`);
};
