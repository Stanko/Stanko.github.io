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
  // Only used for 404 page, somewhat hacky way to make an exception
  useAbsolutePath?: boolean;
};

const Img = async ({
  src,
  outputDir,
  pageDir,
  className = '',
  alt,
  resize,
  useAbsolutePath = false,
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
      src={useAbsolutePath ? `/${fileName}` : `./${fileName}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Img;
