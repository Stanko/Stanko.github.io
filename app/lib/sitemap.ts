import type { Page } from '@brz/lib/types';
import { config } from '@site/config';

const entry = (page: Page) => {
  // NICE
  // explore adding these:
  // <priority>0.8</priority>
  // <changefreq>monthly</changefreq>
  // always
  // hourly
  // daily
  // weekly
  // monthly
  // yearly
  // never

  const date = page.pageData.date
    ? `\n  <lastmod>${page.pageData.date}</lastmod>\n`
    : '';

  return `<url>
  <loc>${config.baseUrl}${page.pathname}</loc>${date}
</url>`;
};

export const getSitemap = (pages: Page[]) => {
  const entries = pages
    .map((page) => {
      // TODO fix this with the switch from tsx -> mdx for index pages

      const titleMap: Record<string, string> = {
        '/': 'Muffin Man · FrontEnd & Creative Coding',
        '/blog/': 'Blog · Muffin Man',
        '/art/': 'Art · Muffin Man',
        '/projects/': 'Projects · Muffin Man',
        '/about/': 'About · Muffin Man',
        '/stats/': 'Stats · Muffin Man',
      };
      return {
        ...page,
        pageData: {
          ...page.pageData,
          title: titleMap[page.pathname] || page.pageData.title || '',
        },
      };
    })
    .map((page) => entry(page))
    .join('\n  ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries}
</urlset> `;
};
