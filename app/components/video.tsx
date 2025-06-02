import { join } from 'node:path';

import clsx from 'clsx';
import { copyAssetToDist } from '../utils/copy-asset-to-dist';

export type VideoProps = React.HTMLAttributes<HTMLVideoElement> & {
  caption?: string;
  className?: string;
  controls?: boolean;
  outputDir: string;
  pageDir: string;
  square?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  src: string;
};

const Video = async ({
  src,
  className,
  caption,
  square,
  controls = true,
  muted = true,
  playsInline = true,
  pageDir,
  outputDir,
  ...props
}: VideoProps) => {
  const fileName = await copyAssetToDist(src, pageDir, outputDir);

  return (
    <figure className="video__figure">
      <video
        {...props}
        controls={controls}
        muted={muted}
        playsInline={playsInline}
        className={clsx(className, { square })}
        src={`./${fileName}#t=0.001`}
      />
      {caption && (
        <figcaption className="video__figcaption">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Video;
