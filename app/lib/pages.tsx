import { exists } from 'node:fs/promises';
import { join, sep } from 'node:path';
import { readDirectories } from '../utils/fs';
import { getRedirectHTML } from '../utils/get-redirect-html';
import { log, paint } from '../utils/log';
import { render } from '../utils/render';
import { DATE_REGEX, dirs, IS_PROD } from './constants';
import type { Page } from './types';
import { freshImport } from '@brz/utils/fresh-import';

export class Pages {
  pages: Page[] = [];
  collections: Record<string, Page[]> = {};

  contentDirPath: string;

  getMdxComponents?: (
    pageDir: string,
    outputDir: string
  ) => Record<string, () => React.JSX.Element>;

  constructor(contentDirPath: string) {
    this.contentDirPath = contentDirPath;
  }

  async getMdxPage(
    collectionName: string, // blog
    dirName: string // 2023-10-01-my-post,
  ): Promise<Page> {
    const collectionPath = join(dirs.CONTENT, collectionName); // -> [content]/blog
    const dirPath = join(collectionPath, dirName); // -> [content]/blog/2023-10-01-my-post
    const path = join(dirPath, 'index.mdx'); // -> [content]/blog/2023-10-01-my-post/index.mdx

    if (await exists(path)) {
      // delete require.cache[path];
      const start = Date.now();

      // Process index content
      // Get the page data from the mdx file
      const { default: ContentComponent, data } = await import(path);

      const pathname = `/${collectionName}/${data.slug}/`; // -> /blog/my-post/
      const outputDir = join(dirs.OUTPUT, collectionName, data.slug); // -> /dist/blog/my-post

      const page: Page = {
        path,
        pathname,
        outputFilepath: join(outputDir, 'index.html'),
        pageData: data,
        html: '',
        render: async () => '',
      };

      const templateName = data.template || `${collectionName}-page.tsx`;
      const templatePath = join(dirs.TEMPLATES, templateName);

      if (await exists(templatePath)) {
        const t = await freshImport(templatePath);
        const Template = t.default;

        page.render = async () =>
          await render(
            <Template
              data={data}
              dirPath={dirPath}
              outputDir={outputDir}
              pathname={pathname}
            >
              <ContentComponent
                components={this.getMdxComponents?.(dirPath, outputDir)}
              />
            </Template>
          );
      } else {
        const relativePath = templatePath.replace(dirs.TEMPLATES, '');
        throw new Error(
          `Template not found at: ${relativePath}. Please create a template ${collectionName}-page.tsx in the templates directory`
        );
      }

      log.verbose(
        paint.blue(`pages mdx:`),
        `${pathname} [${Date.now() - start}ms]`
      );

      return page;
    } else {
      // Display relative path, it is less confusing for the user
      const relativePath = path.replace(dirs.CONTENT, '');

      const error = [`Collection page not found at: ${relativePath}`];

      // Check if tsx file was used by mistake and notify the user
      if (await exists(path.replace('.mdx', '.tsx'))) {
        error.push(
          `- It seems you used "index.tsx". For collection pages you have to use "index.mdx" instead`
        );
      }

      throw new Error(error.join('\n'));
    }
  }

  async getTsxPage(path: string): Promise<Page> {
    if (await exists(path)) {
      // delete require.cache[path];
      const start = Date.now();

      const parts = path
        .replace(dirs.CONTENT, '')
        .split(sep)
        .filter((part) => part !== '');

      // default to index page
      let pathname = '/';
      let outputFilepath = join(dirs.OUTPUT, 'index.html');

      if (parts.length === 2) {
        // collection index page
        const collectionName = parts[0] as string;
        pathname = `/${collectionName}/`;
        outputFilepath = join(dirs.OUTPUT, collectionName, 'index.html');
      }

      // Process index content
      const page: Page = {
        path,
        pathname,
        outputFilepath,
        html: '',
        pageData: {},
        render: async () => '',
      };

      const { default: Page } = await import(path);

      // page.html = await render(<Page />);
      page.render = async () => await render(<Page />);

      log.verbose(
        paint.blue(`pages tsx:`),
        `${pathname} [${Date.now() - start}ms]`
      );

      return page;
    } else {
      // Display relative path, it is less confusing for the user
      const relativePath = path.replace(dirs.CONTENT, '');

      const error = [`Landing page not found at: ${relativePath}`];

      // Check if mdx file was used by mistake and notify the user
      if (await exists(path.replace('.tsx', '.mdx'))) {
        error.push(
          `- It seems you used "index.mdx". For landing pages you have to use "index.tsx" instead`
        );
      }

      throw new Error(error.join('\n'));
    }
  }

  async getCollectionPages(collectionName: string): Promise<Page[]> {
    const collectionPath = join(dirs.CONTENT, collectionName);
    const pagePromises: Promise<Page>[] = [];

    const pageDirs = await readDirectories(collectionPath);

    for (const dirName of pageDirs) {
      const page = this.getMdxPage(collectionName, dirName);

      pagePromises.push(page);
    }

    let pages = await Promise.all(pagePromises);

    if (IS_PROD) {
      // Filter out drafts in production
      pages = pages.filter((page) => !page.pageData?.draft);
    }

    this.collections[collectionName] = pages.sort((a, b) =>
      (b.pageData.date as string).localeCompare(a.pageData.date as string)
    );

    // Collection landing page
    const indexPath = join(collectionPath, 'index.tsx');
    const index = await this.getTsxPage(indexPath);

    return [...pages, index];
  }

  getCollection(collectionName: string): Page[] {
    return this.collections[collectionName] || [];
  }

  async buildPages() {
    this.getMdxComponents = (
      await freshImport(join(dirs.APP, 'lib', 'get-mdx-components.tsx'))
    ).getMdxComponents;

    await this.getPages();
    await this.writePages();
  }

  writePages() {
    this.pages.forEach((page) => {
      Pages.writePage(page);
    });
  }

  clearCache() {
    this.pages.forEach((page) => {
      delete require.cache[page.path];
    });
  }

  async getPages(): Promise<Page[]> {
    const start = Date.now();
    const pages: Page[] = [];

    // Collection pages
    // Filter directories only in the root directory
    const collections = await readDirectories(dirs.CONTENT);

    for (const collection of collections) {
      const start = Date.now();
      const collectionPages = await this.getCollectionPages(collection);
      pages.push(...collectionPages);

      log.verbose(
        paint.blue(`collection ${collection}:`),
        `${collectionPages.length} pages [${Date.now() - start}ms]`
      );
    }

    // Index page
    const indexPath = join(dirs.CONTENT, 'index.tsx');
    const index = await this.getTsxPage(indexPath);
    pages.push(index);

    this.pages = pages;
    log.info(
      paint.blue(`pages:`),
      `${pages.length} pages [${Date.now() - start}ms]`
    );
    return pages.sort((a: Page, b: Page) => {
      const aDate = (a.pageData.date as string) || '';
      const bDate = (b.pageData.date as string) || '';

      return bDate.localeCompare(aDate);
    });
  }

  static async writePage(page: Page) {
    page.html = await page.render();

    Bun.write(page.outputFilepath, page.html);

    if (page.pageData?.aliases) {
      for (const alias of page.pageData.aliases as string[]) {
        const parts = alias.split('/').filter((part) => part !== '');
        const aliasPath = join(dirs.OUTPUT, ...parts, 'index.html');

        await Bun.write(aliasPath, getRedirectHTML(page.pathname));
      }
    }
  }

  // ----- UPDATE PAGE ----- //

  updateCollection(collection: Page[], page: Page) {
    const index = collection.findIndex((p) => p.pathname === page.pathname);

    if (index > -1) {
      collection[index] = page;
    } else {
      collection.push(page);
    }
  }

  async updatePage(page: Page) {
    this.updateCollection(this.pages, page);

    const parts = page.pathname.split('/').filter((p) => p !== '');

    if (parts.length > 1) {
      const collectionName = parts[0] as string;
      this.updateCollection(this.getCollection(collectionName), page);
    }

    await Pages.writePage(page);
  }

  // ----- UPDATE TSX PAGES ----- //

  async updateTsxPage(path: string) {
    delete require.cache[path];

    const page = await this.getTsxPage(path);
    this.updatePage(page);

    // It is the site's index page, just return the pathname
    if (page.pathname === '/') {
      return [page.pathname];
    }

    // Update the site index too
    await this.updateTsxPage(join(this.contentDirPath, 'index.tsx'));
    return [page.pathname, '/'];
  }

  async deleteTsxPage(path: string) {
    // path -> {dirs.CONTENT}/blog/index.tsx
    // parts -> [
    //   index.tsx,          // [0] - file name
    //   blog,               // [1] - collection name
    //   dirs.CONTENT
    // ]
    const [_, collectionName] = path
      .split(sep)
      .filter((part) => part !== '')
      .reverse();

    const pathname = `/${collectionName}/`; // -> /blog/

    const index = this.pages.findIndex((p) => p.pathname === pathname);
    this.pages.splice(index, 1);
  }

  // ----- UPDATE MDX PAGES ----- //

  async updateMdxPage(path: string) {
    delete require.cache[path];

    // path -> {dirs.CONTENT}/blog/2023-10-01-my-post/index.mdx
    // parts -> [
    //   index.mdx,          // [0] - file name
    //   2023-10-01-my-post, // [1] - directory name
    //   blog,               // [2] - collection name
    //   dirs.CONTENT
    // ]
    const [_, dirName, collectionName] = path
      .split(sep)
      .filter((part) => part !== '')
      .reverse();

    if (!dirName || !collectionName) {
      throw new Error(`Invalid path format: ${path}`);
    }

    const page = await this.getMdxPage(collectionName, dirName);
    this.updatePage(page);

    // Update collection index
    const updatedPathnames = await this.updateTsxPage(
      join(dirs.CONTENT, collectionName, 'index.tsx')
    );

    return [page.pathname, ...updatedPathnames];
  }

  async deleteMdxPage(path: string) {
    // path -> {dirs.CONTENT}/blog/2023-10-01-my-post/index.mdx
    // parts -> [
    //   index.mdx,          // [0] - file name
    //   2023-10-01-my-post, // [1] - directory name
    //   blog,               // [2] - collection name
    //   dirs.CONTENT
    // ]
    const [_, dirName, collectionName] = path
      .split(sep)
      .filter((part) => part !== '')
      .reverse();

    if (!dirName || !collectionName) {
      throw new Error(`Invalid path format: ${path}`);
    }

    const slug = dirName.replace(DATE_REGEX, '');
    const pathname = `/${collectionName}/${slug}/`; // -> /blog/my-post/

    const index = this.pages.findIndex((p) => p.pathname === pathname);
    this.pages.splice(index, 1);

    // Update collection index
    const updatedPathnames = await this.updateTsxPage(
      join(dirs.CONTENT, collectionName, 'index.tsx')
    );

    return [...updatedPathnames];
  }
}
