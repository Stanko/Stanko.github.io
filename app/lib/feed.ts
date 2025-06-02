import type { Page } from '@brz';
import { config } from '@site/config';

const entry = (page: Page) => {
  const { pathname, pageData, html } = page;
  const { author } = config;

  let title = pageData.titlePlain || pageData.title;

  if (!title) {
    return '';
  }

  if (pathname.startsWith('/art/')) {
    title = `${title} • Art`;
  }

  let date = new Date();

  if (pageData.date) {
    const [yyyy, mm, dd] = (pageData.date as string).split('-');

    if (yyyy && mm && dd) {
      date = new Date(
        Number.parseInt(yyyy, 10),
        Number.parseInt(mm, 10) - 1, // Months are 0-indexed in JavaScript
        Number.parseInt(dd, 10)
      );
    }
  }

  const published = date.toISOString();
  const updated = date.toISOString();

  const url = `${config.baseUrl}${pathname}`;

  // content is just innerHTML of the <main> tag
  const contentStart = html.indexOf('<main');
  const contentEnd = html.indexOf('</main>');
  const content = html.substring(contentStart, contentEnd + '</main>'.length);

  return `<entry xml:lang="en">
<title><![CDATA[${title}]]></title>
<published>${published}</published>
<updated>${updated}</updated>
<link href="${url}" type="text/html" />
<id>${url}</id>
<author>
  <name><![CDATA[${author}]]></name>
</author>
<content type="html"><![CDATA[ ${content} ]]></content>
</entry>`;
};

export const getFeed = (pages: Page[]) => {
  const { siteName, siteSubTitle, baseUrl } = config;
  const feedUrl = `${baseUrl}/atom.xml`;

  const updated = new Date().toISOString();

  const entries = pages
    .filter((page) => {
      return (
        (page.pageData.titlePlain || page.pageData.title) && page.pageData.date
      );
    })
    .map((page) => entry(page))
    .join('\n  ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="/atom.xsl" type="text/xsl"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">
  <title><![CDATA[${siteName}]]></title>
  <subtitle><![CDATA[${siteSubTitle}]]></subtitle>
  <link href="${feedUrl}" rel="self" type="application/atom+xml" />
  <link href="${baseUrl}" />
  <generator uri="https://muffinman.io">Muffin Man</generator>
  <updated>${updated}</updated>
  <id>${feedUrl}</id>
  ${entries}
</feed>`;
};
