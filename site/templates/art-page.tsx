import clsx from 'clsx';
import { brz } from '@brz/runtime';
import { GalleryItem } from '@brz/components/gallery';
import { formatDateMonthYear } from '@brz/utils/format-date';
import Header from '@site/components/header';
import RelatedArt from '@site/components/related-art';
import type { ArtPage } from '@site/content/art';
import { readdirSync } from 'node:fs';
import BaseTemplate from './base';

type ArtPageTemplateProps = {
  children: React.ReactNode;
  dirPath: string;
  outputDir: string;
  pathname: string;
  html: string;
  data: {
    snippet: string;
    date: string;
    baseUrl?: string;
    head?: React.ReactNode;
    image?: string;
    lang?: string;
    rssFeeds?: { title: string; href: string }[];
    siteName?: string;
    theme?: string;
    title: string;
    url?: string;
    minutes: number;
    category: string[];
    draft?: boolean;
    intro: string;
    size: string;
    paper: string;
    pens: string;
    tall?: boolean;
    wide?: boolean;
  };
};

type ArtPageAsset = {
  path: string;
  type: 'image' | 'video';
};

const getFilesFromPath = (dirPath: string): ArtPageAsset[] => {
  const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.mp4'];

  const allFiles = readdirSync(dirPath);

  const files: ArtPageAsset[] = [];

  for (const file of allFiles) {
    const fileExtension = file.split('.').pop();

    if (SUPPORTED_EXTENSIONS.includes(`.${fileExtension}`)) {
      const type = fileExtension === 'mp4' ? 'video' : 'image';

      files.push({ path: `./${file}`, type });
    }
  }

  return files.sort((a, b) => a.path.localeCompare(b.path));
};

const ArtPageTemplate = async ({
  children,
  pathname,
  dirPath,
  outputDir,
  data: {
    date,
    title,
    baseUrl,
    url,
    theme = 'red',
    draft,
    image,
    intro,
    snippet,
    size,
    paper,
    pens,
    wide,
  },
}: ArtPageTemplateProps) => {
  const assets = getFilesFromPath(dirPath);
  const cover = assets.shift() as ArtPageAsset;

  const art = brz.pages.getCollection('art') as ArtPage[];

  const findIndex = art.findIndex((artPage) => artPage.pathname === pathname);
  const nextItem = art[findIndex + 1];
  const previousItem = art[findIndex - 1];

  const info = (
    <table className="text-sm art-page__info">
      <tr>
        <td>
          <b>Created: </b>
        </td>
        <td>{formatDateMonthYear(date)}</td>
      </tr>
      <tr>
        <td>
          <b>Size: </b>
        </td>
        <td>{size}</td>
      </tr>
      <tr>
        <td>
          <b>Paper: </b>
        </td>
        <td>{paper}</td>
      </tr>
      <tr>
        <td>
          <b>Pens: </b>
        </td>
        <td>{pens}</td>
      </tr>
    </table>
  );

  return (
    <BaseTemplate
      pathname={pathname}
      dirPath={dirPath}
      outputDir={outputDir}
      title={title}
      description={intro || snippet}
      baseUrl={baseUrl}
      url={url}
      theme={theme}
      image={image}
    >
      <Header
        eyebrow={
          <a href="/art/" className="text-sm link-underline h4">
            Back to Art
          </a>
        }
        title={title}
        isDraft={draft}
        className="blog-post__header"
      >
        {intro}
      </Header>

      <main className="art-page page-padding">
        <div className="container">
          <div className="art-page__content">{children}</div>
          {info}
        </div>

        <div
          className={clsx('art-gallery', 'photoswipe-gallery', {
            'art-gallery--wide': wide,
          })}
        >
          <div className="art-gallery__cover">
            <GalleryItem
              src={cover.path}
              pageDir={dirPath}
              outputDir={outputDir}
            />
          </div>

          <div className="art-gallery__items">
            {assets.map((asset, index) => {
              return (
                <GalleryItem
                  key={index}
                  src={asset.path}
                  pageDir={dirPath}
                  outputDir={outputDir}
                  resize={{ height: 500, width: 500 }}
                />
              );
            })}
          </div>
        </div>
      </main>

      <RelatedArt
        title="More generative drawings"
        prev={previousItem}
        next={nextItem}
      />
    </BaseTemplate>
  );
};

export default ArtPageTemplate;
