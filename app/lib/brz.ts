import { HttpServer } from '@brz/dev/http';
import { SocketServer } from '@brz/dev/socket';
import { Watcher, type WatcherOptions } from '@brz/dev/watcher';
import { compileJS } from '@brz/lib/compile-js';
import { compileSASS } from '@brz/lib/compile-sass';
import { dirs, IS_DEV } from '@brz/lib/constants';
import { getFeed } from '@brz/lib/feed';
import { Pages } from '@brz/lib/pages';
import { errorToHTML } from '@brz/utils/error-to-html';
import { log, paint } from '@brz/utils/log';
import { cp, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { listenForKeyPresses } from './keypress';
import { getSitemap } from './sitemap';

export class Brz {
  pages: Pages;
  socketServer?: SocketServer;
  httpServer?: HttpServer;

  constructor() {
    this.pages = new Pages(dirs.CONTENT);
    const start = Date.now();

    this.build().then(async () => {
      await compileJS();
      await compileSASS();

      log.info(paint.blue('build:'), `finished in [${Date.now() - start}ms]`);

      if (IS_DEV) {
        this.socketServer = new SocketServer({ port: 4321 });
        this.httpServer = new HttpServer({ port: 1234 });

        this.startWatchers();
        this.addKeyPressListeners();
      } else {
        process.exit(0);
      }
    });
  }

  startWatchers() {
    this.watchMdx();
    this.watchTsx();
    this.watchJS();
    this.watchSASS();
    this.watchCSS();
    this.watchPublic();
    this.watchTemplates();
    this.watchComponents();
    this.watchBrzComponents();
  }

  addKeyPressListeners() {
    listenForKeyPresses([
      {
        key: 'r',
        callback: async () => {
          log.info(paint.blue('build:'), 'rebuilding...');
          await this.build();

          this.socketServer?.broadcast({
            type: 'refresh',
          });
        },
      },
    ]);
  }

  async build() {
    for (const item in require.cache) {
      if (
        item.startsWith(dirs.CONTENT) ||
        item.startsWith(dirs.BRZ_COMPONENTS)
      ) {
        delete require.cache[item];
      }
    }

    await this.pages.buildPages();
    await this.copyPublicAssets();
    await this.writeSearchData();
    await this.writeRSS();
    await this.writeSitemap();
  }

  async writeRSS() {
    const data = getFeed(this.pages.pages);
    const start = Date.now();

    await writeFile(join(dirs.OUTPUT, 'atom.xml'), data, {
      encoding: 'utf-8',
    });
    log.info(
      paint.blue('feed:'),
      `generated feed in [${Date.now() - start}ms]`
    );
  }

  async writeSitemap() {
    const data = getSitemap(this.pages.pages);
    const start = Date.now();

    await writeFile(join(dirs.OUTPUT, 'sitemap.xml'), data, {
      encoding: 'utf-8',
    });
    log.info(
      paint.blue('feed:'),
      `generated sitemap in [${Date.now() - start}ms]`
    );
  }

  async writeSearchData() {
    // TODO make this cleaner
    const pathnameToTitle = (pathname: string) => {
      const title = pathname.split('/').filter(Boolean)[0] || '';
      return title.charAt(0).toUpperCase() + title.slice(1);
    };

    const searchData = this.pages.pages.map((page) => {
      if (page.pageData.title) {
        let eyebrow = pathnameToTitle(page.pathname);
        const category = page.pageData.category as string[];
        if (category?.[0]) {
          eyebrow = category[0];
        }

        return {
          u: page.pathname,
          t:
            page.pageData.searchTitle ||
            page.pageData.titlePlain ||
            page.pageData.title,
          e: eyebrow,
        };
      } else {
        return {
          u: page.pathname,
          t: pathnameToTitle(page.pathname),
          e: 'Page',
        };
      }
    });

    await writeFile(
      join(dirs.OUTPUT, 'js', 'search-data.js'),
      `window.searchData = ${JSON.stringify(searchData)};`,
      { encoding: 'utf-8' }
    );
  }

  // Copy public files to output directory
  copyPublicAssets = async () => {
    const publicFiles = await readdir(dirs.PUBLIC);

    const start = Date.now();

    for (const file of publicFiles) {
      const startFile = Date.now();
      const from = join(dirs.PUBLIC, file);
      const to = join(dirs.OUTPUT, file);

      await cp(from, to, { recursive: true });
      log.verbose(
        paint.blue('public:'),
        `copied ${file} [${Date.now() - startFile}ms]`
      );
    }
    log.info(
      paint.blue('public:'),
      `copied public files [${Date.now() - start}ms]`
    );
  };

  // ----- WATCHERS ----- //

  watch(options: WatcherOptions) {
    new Watcher({
      ...options,
      onChange: async (path) => {
        try {
          await options.onChange(path);
        } catch (e) {
          const error = (e as any).errors
            ? (e as AggregateError)
            : (e as Error);

          console.log(error);

          this.socketServer?.broadcast({
            type: 'error',
            title: `Error in ${path.replace(options.dir, '')}`,
            error: errorToHTML(error),
          });
        }
      },
    });
  }

  watchMdx() {
    this.watch({
      dir: dirs.CONTENT,
      label: 'mdx',
      endsWith: 'index.mdx',
      onChange: async (path) => {
        const pathnames = await this.pages.updateMdxPage(path);

        pathnames.forEach((pathname) => {
          this.socketServer?.broadcast({
            type: 'page-changed',
            pathname,
          });
        });
      },
      onDelete: async (path) => {
        await this.pages.deleteMdxPage(path);
      },
    });
  }

  watchTsx() {
    this.watch({
      dir: dirs.CONTENT,
      label: 'tsx',
      endsWith: 'index.tsx',
      onChange: async (path) => {
        const pathnames = await this.pages.updateTsxPage(path);

        pathnames.forEach((pathname) => {
          this.socketServer?.broadcast({
            type: 'page-changed',
            pathname,
          });
        });
      },
      onDelete: async (path) => {
        await this.pages.deleteTsxPage(path);
      },
    });
  }

  watchJS() {
    this.watch({
      dir: dirs.JS,
      label: 'js',
      endsWith: '.js',
      onChange: async (path) => {
        await compileJS();

        this.socketServer?.broadcast({
          type: 'js-changed',
        });
      },
    });
  }

  watchSASS() {
    this.watch({
      dir: dirs.SCSS,
      label: 'scss',
      endsWith: '.scss',
      onChange: async (path) => {
        await compileSASS();
      },
    });
  }

  watchCSS() {
    this.watch({
      dir: dirs.OUTPUT_CSS,
      label: 'css',
      endsWith: '.css',
      onChange: (path) => {
        this.socketServer?.broadcast({
          type: 'css-changed',
          path: path.replace(dirs.OUTPUT, ''),
        });
      },
    });
  }

  watchPublic() {
    this.watch({
      dir: dirs.PUBLIC,
      label: 'public',
      endsWith: '',
      onChange: async (path) => {
        await this.copyPublicAssets();

        this.socketServer?.broadcast({
          type: 'refresh',
          path: path.replace(dirs.PUBLIC, ''),
        });
      },
    });
  }

  watchTemplates() {
    this.watch({
      dir: dirs.TEMPLATES,
      label: 'templates',
      endsWith: '.tsx',
      onChange: async (path) => {
        delete require.cache[path];
        await this.build();

        this.socketServer?.broadcast({
          type: 'refresh',
          path: path.replace(dirs.TEMPLATES, ''),
        });
      },
    });
  }

  watchComponents() {
    this.watch({
      dir: dirs.COMPONENTS,
      label: 'components',
      endsWith: '.tsx',
      onChange: async (path) => {
        delete require.cache[path];
        delete require.cache[join(dirs.TEMPLATES, 'base.tsx')];
        this.pages.clearCache();
        await this.build();

        this.socketServer?.broadcast({
          type: 'refresh',
          path: path.replace(dirs.COMPONENTS, ''),
        });
      },
    });
  }

  watchBrzComponents() {
    this.watch({
      dir: dirs.BRZ_COMPONENTS,
      label: 'components',
      endsWith: '.tsx',
      onChange: async (path) => {
        delete require.cache[path];
        await this.build();

        this.socketServer?.broadcast({
          type: 'refresh',
          path: path.replace(dirs.BRZ_COMPONENTS, ''),
        });
      },
    });
  }
}
