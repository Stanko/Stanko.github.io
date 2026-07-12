import { copyAssetToDist } from '@brz/utils/copy-asset-to-dist';
import { isOutputFresh, resolveAssetPath } from '@brz/utils/asset';
import { getSharpImage } from '@brz/utils/get-sharp-image';
import { join, sep } from 'node:path';
import type { ResizeOptions } from 'sharp';

export const useImg = async ({
  src,
  outputDir,
  pageDir,
  resize,
}: {
  src: string;
  outputDir: string;
  pageDir: string;
  resize?: {
    width?: number;
    height?: number;
    name?: string;
  };
}) => {
  // TODO
  // - is public dir
  // - is relative path
  // - is absolute path
  // - fail with a descriptive error if file can't be found
  // - check for supported formats
  // - resize if size is present

  const image = await getSharpImage(src, pageDir);
  const { width, height } = await image.metadata();

  let fileName = src.split(sep).pop() as string;

  // Process the image based on resize options
  if (resize) {
    const w = resize.width || 'auto';
    const h = resize.height || 'auto';

    fileName = `w_${w}-h_${h}-${resize.name || ''}-${fileName}`;

    // Create resized version of the image
    const resizeOptions: ResizeOptions = {
      width: resize.width,
      height: resize.height,
      // TODO maybe move to props
      fit: 'inside',
    };

    const sourcePath = resolveAssetPath(src, pageDir);
    const outputPath = join(outputDir, fileName);

    const isFresh = await isOutputFresh(sourcePath, outputPath);

    // Resize and copy the image only if it was changed
    if (!isFresh) {
      const resized = image.resize(resizeOptions);
      await resized.toFile(outputPath);
    }
  } else {
    // Copy the original image to the output directory
    await copyAssetToDist(src, pageDir, outputDir);
  }

  return {
    fileName,
    width,
    height,
  };
};
