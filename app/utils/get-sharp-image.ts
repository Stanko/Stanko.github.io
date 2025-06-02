import { join, sep } from 'node:path';
import sharp from 'sharp';

export const getSharpImage = async (
  src: string,
  pageDir: string
): Promise<sharp.Sharp> => {
  const isRelativePath =
    src.startsWith('.' + sep) || src.startsWith('..' + sep);

  if (isRelativePath) {
    src = join(pageDir, src);
  }

  const image = sharp(src);

  return image;
};
