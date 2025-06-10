import Img from '@brz/components/img';
import { formatDateMonthYear } from '@brz/utils/format-date';
import type { ArtPage } from '@site/content/art';
import clsx from 'clsx';
import { sep } from 'node:path';
import ArrowTitle from './arrow-title';

export type ArtCardProps = React.HTMLAttributes<HTMLDivElement> & {
  page: ArtPage;
  outputDir: string;
};

const ArtCard = async ({
  children,
  className = '',
  page,
  outputDir,
  ...props
}: ArtCardProps) => {
  return (
    <a
      {...props}
      href={page.pathname}
      className={clsx('art-card', className, page.pageData.theme)}
    >
      <ArrowTitle className="art-card__title">
        {page.pageData.titlePlain}
      </ArrowTitle>

      <span className="art-card__image-wrapper">
        <Img
          src={page.pageData.image}
          alt={page.pageData.title}
          className="art-image"
          pageDir={page.path.split(sep).slice(0, -1).join(sep)}
          outputDir={outputDir}
          loading="lazy"
          resize={{
            width: 400,
            name: page.pageData.slug,
          }}
        />
      </span>

      <span className="text-lightest text-xs">
        {formatDateMonthYear(page.pageData.date)}
      </span>
    </a>
  );
};

export default ArtCard;
