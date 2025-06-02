import clsx from 'clsx';
import { copyAssetToDist } from '@brz/utils/copy-asset-to-dist';
import { useImg } from './use-img';

export type GalleryProps = React.HTMLAttributes<HTMLDivElement> & {
  images: string[];
  outputDir: string;
  pageDir: string;
  sm?: number;
  md?: number;
  lg?: number;
  resize?: {
    name?: string;
    width?: number;
    height?: number;
  };
};

type GalleryItemProps = {
  src: string;
  pageDir: string;
  outputDir: string;
  resize?: {
    name?: string;
    width?: number;
    height?: number;
  };
};

export const GalleryItem = async ({
  src,
  pageDir,
  outputDir,
  resize,
}: GalleryItemProps) => {
  const ext = src.split('.').pop() || '';
  const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext);
  const isVideo = ['mp4', 'webm'].includes(ext);

  if (!isImage && !isVideo) {
    return null;
  }

  if (isVideo) {
    // FFMPEG command to extract a frame from the video
    // ffmpeg -i input.mp4 -vf "scale=iw*sar:ih,setsar=1" -vframes 1 filename.png
    const fileName = await copyAssetToDist(src, pageDir, outputDir);

    const size = src.match(/(\d+)x(\d+)/);

    return (
      <a
        href={`./${fileName}`}
        data-is-video="true"
        data-pswp-width={size?.[1]}
        data-pswp-height={size?.[2]}
        className="gallery__link outline"
      >
        <video
          className="gallery__video"
          src={`./${fileName}#t=0.001`}
          controls={false}
          muted
        />
        <svg
          viewBox="0 0 512 512"
          aria-hidden="true"
          className="gallery__play-icon"
        >
          <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20 c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"></path>
        </svg>
      </a>
    );
  } else if (isImage) {
    const originalImage = await copyAssetToDist(src, pageDir, outputDir);

    const { fileName, width, height } = await useImg({
      src,
      outputDir,
      pageDir,
      resize,
    });

    return (
      <a
        href={`./${originalImage}`}
        data-pswp-width={width}
        data-pswp-height={height}
        className="gallery__link outline"
      >
        <img
          className="gallery__image"
          src={`./${fileName}`}
          alt="" // TODO
          width={width}
          height={height}
        />
      </a>
    );
  }

  console.log('Gallery: unknown file type', src);
  return null;
};

const Gallery = async ({
  children,
  images,
  outputDir,
  pageDir,
  sm = 2,
  md = 3,
  lg = 4,
  className = '',
  resize = {
    width: 400,
  },
  ...props
}: GalleryProps) => {
  return (
    <div
      {...props}
      className={clsx('gallery', 'photoswipe-gallery', className)}
      style={
        {
          '--columns': sm,
          '--columns-md': md,
          '--columns-lg': lg,
        } as React.CSSProperties
      }
    >
      {images.map((src) => {
        return (
          <GalleryItem
            key={src}
            src={src}
            pageDir={pageDir}
            outputDir={outputDir}
            resize={resize}
          />
        );
      })}
      {children}
    </div>
  );
};

export default Gallery;
