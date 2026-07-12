import { join, sep } from 'node:path';
import { isOutputFresh, resolveAssetPath } from './asset';

export const copyAssetToDist = async (
  path: string,
  pageDir: string,
  outputDir: string
): Promise<string> => {
  const fileName = path.split(sep).pop() as string;
  const sourcePath = resolveAssetPath(path, pageDir);
  const outputPath = join(outputDir, fileName);

  const isFresh = await isOutputFresh(sourcePath, outputPath, true);

  // Copy the asset only if it was changed
  if (!isFresh) {
    await Bun.write(outputPath, Bun.file(sourcePath));
  }

  return fileName;
};
