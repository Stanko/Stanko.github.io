import clsx from 'clsx';
import { useImg } from './use-img';

export type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  outputDir: string;
  pageDir: string;
  loading?: 'lazy' | 'eager';
  resize?: {
    width?: number;
    height?: number;
    name?: string;
  };
};

const Img = async ({
  src,
  outputDir,
  pageDir,
  className = '',
  alt,
  resize,
  ...props
}: ImgProps) => {
  const { fileName, width, height } = await useImg({
    src,
    outputDir,
    pageDir,
    resize,
  });

  return (
    <img
      {...props}
      className={clsx('image', className)}
      src={`./${fileName}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Img;
