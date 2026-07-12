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
import { cp, exists, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, sep } from 'node:path';
import { listenForKeyPresses } from './keypress';
import { getSitemap } from './sitemap';

export class Brz {
  pages: Pages;
  socketServer?: SocketServer;
  httpServer?: HttpServer;

  constructor() {
    this.pages = new Pages(dirs.CONTENT);
    const start = Date.now();

    Promise.all([this.build(), this.copyPublicAssets()]).then(async () => {
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
    const broadcastPageChanges = (pathnames: string[]) => {
      pathnames.forEach((pathname) => {
        this.socketServer?.broadcast({
          type: 'page-changed',
          pathname,
        });
      });
    };

    const broadcastRefresh = (path: string, dir: string) => {
      this.socketServer?.broadcast({
        type: 'refresh',
        path: path.replace(dir, ''),
      });
    };

    const watchers: Omit<WatcherOptions, 'onError'>[] = [
      {
        dir: dirs.CONTENT,
        label: 'mdx',
        endsWith: 'index.mdx',
        onChange: async (path) => {
          broadcastPageChanges(await this.pages.updateMdxPage(path));
        },
        onDelete: async (path) => {
          await this.pages.deleteMdxPage(path);
        },
      },
      {
        dir: dirs.CONTENT,
        label: 'tsx',
        endsWith: 'index.tsx',
        onChange: async (path) => {
          broadcastPageChanges(await this.pages.updateTsxPage(path));
        },
        onDelete: (path) => this.pages.deleteTsxPage(path),
      },
      {
        dir: dirs.JS,
        label: 'js',
        endsWith: '.js',
        onChange: async () => {
          await compileJS();
          this.socketServer?.broadcast({ type: 'js-changed' });
        },
      },
      {
        dir: dirs.SCSS,
        label: 'scss',
        endsWith: '.scss',
        onChange: compileSASS,
      },
      {
        dir: dirs.OUTPUT_CSS,
        label: 'css',
        endsWith: '.css',
        onChange: async (path) => {
          this.socketServer?.broadcast({
            type: 'css-changed',
            path: path.replace(dirs.OUTPUT, ''),
          });
        },
      },
      {
        dir: dirs.PUBLIC,
        label: 'public',
        endsWith: '',
        onChange: async (path) => {
          await this.copyPublicAsset(path);
          broadcastRefresh(path, dirs.PUBLIC);
        },
        onDelete: async (path) => {
          await this.deletePublicAsset(path);
          broadcastRefresh(path, dirs.PUBLIC);
        },
      },
      {
        dir: dirs.TEMPLATES,
        label: 'templates',
        endsWith: '.tsx',
        onChange: async (path) => {
          delete require.cache[path];
          await this.build();
          broadcastRefresh(path, dirs.TEMPLATES);
        },
      },
      {
        dir: dirs.COMPONENTS,
        label: 'components',
        endsWith: '.tsx',
        onChange: async (path) => {
          delete require.cache[path];
          delete require.cache[join(dirs.TEMPLATES, 'base.tsx')];
          this.pages.clearCache();
          await this.build();
          broadcastRefresh(path, dirs.COMPONENTS);
        },
      },
      {
        dir: dirs.CONTENT,
        label: 'page components',
        endsWith: '.jsx',
        onChange: async (path) => {
          delete require.cache[path];

          // JSX components usually live in a "components" folder inside the post.
          const parts = path.split(sep);
          const pagePath = [
            ...parts.slice(0, parts.length - 2),
            'index.mdx',
          ].join(sep);

          if (await exists(pagePath)) {
            broadcastPageChanges(await this.pages.updateMdxPage(pagePath));
          }
        },
      },
      {
        dir: dirs.BRZ_COMPONENTS,
        label: 'components',
        endsWith: '.tsx',
        onChange: async (path) => {
          delete require.cache[path];
          await this.build();
          broadcastRefresh(path, dirs.BRZ_COMPONENTS);
        },
      },
    ];

    watchers.forEach((options) => this.watch(options));
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
    const start = Date.now();

    const pathnameToTitle = (pathname: string) => {
      const title = pathname.split('/').find(Boolean) || '';
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

    log.info(
      paint.blue('search:'),
      `generated search data in [${Date.now() - start}ms]`
    );
  }

  // Copy public files to output directory
  copyPublicAssets = async () => {
    const publicFiles = await readdir(dirs.PUBLIC);
    const start = Date.now();

    await Promise.all(
      publicFiles.map((file) => this.copyPublicAsset(join(dirs.PUBLIC, file)))
    );

    log.info(
      paint.blue('public:'),
      `copied public files [${Date.now() - start}ms]`
    );
  };

  copyPublicAsset = async (path: string) => {
    const start = Date.now();
    const relativePath = relative(dirs.PUBLIC, path);
    const outputPath = join(dirs.OUTPUT, relativePath);

    await mkdir(dirname(outputPath), { recursive: true });
    await cp(path, outputPath, { recursive: true });

    log.verbose(
      paint.blue('public:'),
      `copied ${relativePath} [${Date.now() - start}ms]`
    );
  };

  deletePublicAsset = async (path: string) => {
    const relativePath = relative(dirs.PUBLIC, path);
    await rm(join(dirs.OUTPUT, relativePath), { force: true, recursive: true });
  };

  // ----- WATCHERS ----- //

  watch(options: Omit<WatcherOptions, 'onError'>) {
    new Watcher({
      ...options,
      onError: (path, e) => {
        const error = (e as any).errors ? (e as AggregateError) : (e as Error);

        console.log(error);

        this.socketServer?.broadcast({
          type: 'error',
          title: `Error in ${path.replace(options.dir, '')}`,
          error: errorToHTML(error),
        });
      },
    });
  }
}
