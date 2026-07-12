import fs from 'node:fs';
import { join } from 'node:path';
import { initAsyncCompiler } from 'sass-embedded';
import { dirs, IS_DEV } from './constants';
import { log, paint } from '../utils/log';

const compilerPromise = initAsyncCompiler();

const processScssDir = async (dir: string, outputDir: string) => {
  const compiler = await compilerPromise;
  const scssFiles = fs
    .readdirSync(dir)
    // Ignore _partials
    .filter((file) => file.endsWith('.scss') && !file.startsWith('_'));

  await Promise.all(
    scssFiles.map(async (file) => {
      const filePath = join(dir, file);
      const cssFilePath = join(
        dirs.OUTPUT,
        outputDir,
        file.replace('.scss', '.css')
      );

      const start = Date.now();
      const result = await compiler.compileAsync(filePath, {
        style: IS_DEV ? 'expanded' : 'compressed',
        sourceMap: true,
        // loadPaths: [dir],
      });

      await Promise.all([
        Bun.write(cssFilePath, result.css),
        Bun.write(`${cssFilePath}.map`, JSON.stringify(result.sourceMap)),
      ]);

      log.verbose(paint.blue('sass:'), `${file} [${Date.now() - start}ms]`);
    })
  );
};

export const compileSASS = async () => {
  const start = Date.now();
  await Promise.all([
    processScssDir(dirs.SCSS, 'css'),
    processScssDir(join(dirs.SCSS, 'posts'), join('css', 'posts')),
  ]);
  log.info(paint.blue('sass:'), `compiled sass [${Date.now() - start}ms]`);
};
