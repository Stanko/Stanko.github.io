import { describe, expect, it } from 'bun:test';
import { join } from 'node:path';
import { dirs } from './constants';
import { Pages } from './pages';
import type { Page } from './types';

function createPage(pathname: string, extension: 'mdx' | 'tsx' = 'mdx'): Page {
  const fileName =
    pathname === '/' ? 'root' : pathname.split('/').filter(Boolean).join('-');

  return {
    path: join(dirs.CONTENT, `${fileName}.${extension}`),
    pathname,
    outputFilepath: join(dirs.OUTPUT, `${fileName}.html`),
    pageData: {},
    html: '',
    render: async () => '',
  };
}

describe('Pages.deleteMdxPage', () => {
  it('removes deleted entries from page and collection caches', async () => {
    const pages = new Pages(dirs.CONTENT);
    const deletedPage = createPage('/blog/my-post/');
    const keptPage = createPage('/blog/kept-post/');
    const collectionIndex = createPage('/blog/');
    const updateCalls: string[] = [];

    pages.pages = [deletedPage, keptPage, collectionIndex];
    pages.collections.blog = [deletedPage, keptPage];
    pages.updateTsxPage = async (path: string) => {
      updateCalls.push(path);
      return ['/blog/'];
    };

    await pages.deleteMdxPage(
      join(dirs.CONTENT, 'blog', '2026-04-07-my-post', 'index.mdx')
    );

    expect(pages.pages.map((page) => page.pathname)).toEqual([
      '/blog/kept-post/',
      '/blog/',
    ]);
    expect(pages.getCollection('blog').map((page) => page.pathname)).toEqual([
      '/blog/kept-post/',
    ]);
    expect(updateCalls).toEqual([join(dirs.CONTENT, 'blog', 'index.tsx')]);
  });
});

describe('Pages.deleteTsxPage', () => {
  it('removes the site root index without touching unrelated cached pages', async () => {
    const pages = new Pages(dirs.CONTENT);
    const rootIndex = createPage('/', 'tsx');
    const collectionIndex = createPage('/blog/', 'tsx');
    const keptPage = createPage('/blog/kept-post/');

    pages.pages = [rootIndex, collectionIndex, keptPage];

    await pages.deleteTsxPage(join(dirs.CONTENT, 'index.tsx'));

    expect(pages.pages.map((page) => page.pathname)).toEqual([
      '/blog/',
      '/blog/kept-post/',
    ]);
  });

  it('is a no-op when the target TSX page is not cached', async () => {
    const pages = new Pages(dirs.CONTENT);
    const collectionIndex = createPage('/blog/', 'tsx');
    const keptPage = createPage('/blog/kept-post/');

    pages.pages = [collectionIndex, keptPage];

    await pages.deleteTsxPage(join(dirs.CONTENT, 'index.tsx'));

    expect(pages.pages.map((page) => page.pathname)).toEqual([
      '/blog/',
      '/blog/kept-post/',
    ]);
  });
});
