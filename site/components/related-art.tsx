import Img from '@brz/components/img';
import type { ArtPage } from '@site/content/art';
import clsx from 'clsx';
import { sep } from 'node:path';
import ArrowTitle from './arrow-title';
import { useImg } from '@brz/components/use-img';

interface RelatedArtProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  prev?: ArtPage;
  next?: ArtPage;
  children?: React.ReactNode;
}

const RelatedItem = async ({
  item,
  isNext,
}: {
  item: ArtPage;
  isNext?: boolean;
}) => {
  const { fileName, width, height } = await useImg({
    src: item.pageData.image,
    outputDir: item.outputFilepath.replace('index.html', ''),
    pageDir: item.path.split(sep).slice(0, -1).join(sep),
    resize: {
      width: 700,
      height: 700,
      name: item.pageData.slug,
    },
  });

  return (
    <a
      href={item.pathname}
      className={clsx('related-art__item', item.pageData.theme, {
        'related-art__item--tall': item.pageData.tall,
        'related-art__item--next': isNext,
        'related-art__item--prev': !isNext,
      })}
    >
      <div className="text-xs text-light">{isNext ? 'Next' : 'Previous'}</div>
      <ArrowTitle className="related-art__item-title" reversed={!isNext}>
        {item.pageData.title}
      </ArrowTitle>
      <div className="related-art__height-fix">
        <div className="related-art__item-image-wrapper outline">
          <img
            className={clsx('image', 'related-art__item-image')}
            src={`${item.pathname}${fileName}`}
            alt={item.pageData.title}
            width={width}
            height={height}
          />
        </div>
      </div>
    </a>
  );
};

const RelatedArt = ({
  children,
  className = '',
  title,
  prev,
  next,
  ...props
}: RelatedArtProps) => {
  return (
    <div className={clsx('related-art', className)} {...props}>
      <div className="container">
        <h3 className="related-art__title">{title}</h3>

        <div className="related-art__items">
          {prev && <RelatedItem item={prev} />}
          {next && <RelatedItem item={next} isNext />}
        </div>
      </div>
    </div>
  );
};

export default RelatedArt;
