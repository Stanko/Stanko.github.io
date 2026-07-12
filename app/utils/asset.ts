import { stat } from 'node:fs/promises';
import { join, sep } from 'node:path';

export const resolveAssetPath = (path: string, pageDir: string) => {
  const isRelativePath =
    path.startsWith('.' + sep) || path.startsWith('..' + sep);

  return isRelativePath ? join(pageDir, path) : path;
};

export const isOutputFresh = async (
  sourcePath: string,
  outputPath: string,
  compareSize = false
) => {
  try {
    const [source, output] = await Promise.all([
      stat(sourcePath),
      stat(outputPath),
    ]);

    const isFresh = output.mtimeMs >= source.mtimeMs;

    if (compareSize) {
      const isSizeTheSame = output.size === source.size;

      return isFresh && isSizeTheSame;
    }

    return isFresh;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return false;
    }

    throw error;
  }
};
