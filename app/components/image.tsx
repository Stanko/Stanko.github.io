import clsx from 'clsx';
import { useImg } from './use-img';

export type ImageProps = React.HTMLAttributes<HTMLElement> & {
  src: string;
  alt: string;
  outputDir: string;
  pageDir: string;
  center?: boolean;
  caption?: string;
  outline?: boolean;
  transparent?: boolean;
  size?: 'wide' | 'full';
  resize?: {
    width?: number;
    height?: number;
    name?: string;
  };
};

const Image = async ({
  className,
  src,
  alt,
  outputDir,
  pageDir,
  caption,
  center,
  outline,
  transparent,
  size,
  resize,
  ...props
}: ImageProps) => {
  const { fileName, width, height } = await useImg({
    src,
    outputDir,
    pageDir,
    resize,
  });

  return (
    <figure
      {...props}
      className={clsx('image__figure', className, size, {
        [`image__figure--${size}`]: size,
        [`image__figure--transparent`]: transparent,
        [`image__figure--center`]: center,
        [`image__figure--outline`]: outline,
      })}
    >
      <img src={`./${fileName}`} alt={alt} width={width} height={height} />
      {caption && (
        <figcaption className="image__figcaption">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Image;
