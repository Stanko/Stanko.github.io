import wsDebugCode from '@brz/dev/ws-debug' with { type: 'text' };
import { IS_DEV } from '@brz/lib/constants';
import { copyAssetToDist } from '@brz/utils/copy-asset-to-dist';
import Dev from '@site/components/dev';
import Footer from '@site/components/footer';
import Menu from '@site/components/menu';
import Nav from '@site/components/nav';
import Prod from '@site/components/prod';
import { config } from '@site/config';
import os from 'node:os';
type FavIconProps = {
  theme?: string;
};

const FavIcon = ({ theme = 'blue' }: FavIconProps) => {
  // NICE explore and update manifest.json with more stuff

  const icon32 = `/favicon/${theme}/icon-32.ico`;
  const svg = `/favicon/${theme}/icon.svg`;
  const appleIcon = `/favicon/${theme}/icon-180.png`;
  const manifest = `/favicon/${theme}/manifest.webmanifest`;

  return (
    <>
      {/* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
      <link rel="icon" href={icon32} sizes="32x32" />
      <link rel="icon" href={svg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={appleIcon} />
      <link rel="manifest" href={manifest} />
    </>
  );
};

type BaseTemplateProps = {
  pathname: string;
  dirPath?: string;
  outputDir?: string;
  baseUrl?: string;
  children: React.ReactNode;
  description: string;
  head?: React.ReactNode;
  image?: string;
  lang?: string;
  rssFeeds?: { title: string; href: string }[];
  theme?: string;
  title: string;
  url?: string;
};

const BaseTemplate = async ({
  pathname,
  baseUrl = IS_DEV ? `http://${os.hostname()}:1234` : config.baseUrl,
  children,
  description,
  head = '',
  image,
  lang = 'en',
  rssFeeds = [],
  theme = 'blue',
  title,
  url,
  dirPath,
  outputDir,
}: BaseTemplateProps) => {
  let metaImage = '';

  if (image && dirPath && outputDir) {
    // TODO think if I should resize the image
    const imageFilename = await copyAssetToDist(image, dirPath, outputDir);
    metaImage = `${baseUrl}/${pathname}${imageFilename}`;
  }

  if (!metaImage) {
    // TODO generate meta image
    metaImage = `/favicon/${theme}/cover.png`;
  }
  let titleString = title;

  if (pathname === '/') {
    // Homepage
  } else {
    titleString += ` · ${config.siteName}`;
  }

  return (
    <html lang={lang} className={theme}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{titleString}</title>
        {pathname && <link rel="canonical" href={`${baseUrl}${pathname}`} />}
        <meta name="description" content={description} />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="RSS Feed"
          href="/atom.xml"
        />
        <meta property="og:site_name" content={config.siteName} />
        <meta property="og:title" content={titleString} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url || baseUrl} />
        <meta name="twitter:title" content={titleString} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
        <meta property="og:image" content={metaImage} />
        <FavIcon theme={theme} />
        {rssFeeds.map((feed) => {
          return (
            <link
              key={feed.href}
              rel="alternate"
              type="application/rss+xml"
              title={feed.title}
              href={feed.href}
            />
          );
        })}

        <link rel="stylesheet" href="/css/style.css" />

        {head}
      </head>

      <body>
        <a href="#content" className="jump-to-content">
          Jump to content
        </a>

        <Nav pathname={pathname} />
        <section id="content">{children}</section>

        <Footer pathname={pathname} />

        <Menu />

        <script src="/js/search-data.js" />
        <script src="/js/app.js" type="module" />

        <Prod>
          <script
            data-goatcounter="https://muffinman_io.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </Prod>

        <Dev>
          <button className="meta-data-debug">
            <p>{description || '<no description>'}</p>
            <img src={metaImage} />
          </button>
          <link rel="stylesheet" href="/debug.css" />

          <script
            dangerouslySetInnerHTML={{
              __html: (wsDebugCode as string).replace(
                'localhost',
                os.hostname()
              ),
            }}
          />
        </Dev>
      </body>
    </html>
  );
};

export default BaseTemplate;
