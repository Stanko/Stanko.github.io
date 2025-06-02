import { join, sep } from 'node:path';

export const copyAssetToDist = async (
  path: string,
  pageDir: string,
  outputDir: string
): Promise<string> => {
  const isRelativePath =
    path.startsWith('.' + sep) || path.startsWith('..' + sep);

  const fileName = path.split(sep).pop() as string;

  if (isRelativePath) {
    path = join(pageDir, path);
  } else {
    // Absolute path
  }

  const file = Bun.file(path);
  const outputPath = join(outputDir, fileName);

  // file either doesn't exist or it was changed
  await Bun.write(outputPath, file);

  return fileName;
};
