import { statSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { log, paint } from '../utils/log';
import type { Server } from 'bun';
import { dirs } from '@brz/lib/constants';

const FILES_TO_IGNORE = ['.DS_Store'];

const getFileListingHTML = (dirPath: string, pathname: string): string => {
  const files = readdirSync(dirPath).filter((file) => {
    return !FILES_TO_IGNORE.includes(file);
  });

  const list = files
    .map((file) => {
      const isDir = statSync(join(dirPath, file)).isDirectory();
      const suffix = isDir ? '/' : '';
      const className = isDir ? 'dir' : 'file';
      return `<li class="${className}"><a href="${file}${suffix}">${file}</a></li>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pathname}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; padding: 30px; }
    h1 { color: #333; font-size: 1.25rem; margin-bottom: 10px; }
    ul { padding-left: 20px; }
    li { margin: 5px 0; }
    a { text-decoration: none; color: #007BFF; }
    a:hover { text-decoration: underline; }
    .dir { font-weight: bold; }
  </style>
</head>
<body>
  <h1>${pathname}</h1>
  <ul>${list}</ul>
</body>
</html>`;
};

export class HttpServer {
  server: Server;

  constructor({ port = 1234 }) {
    this.server = Bun.serve({
      port,
      async fetch(req) {
        try {
          const url = new URL(req.url);
          const pathOnDisk = join(dirs.OUTPUT, url.pathname);

          const file = Bun.file(pathOnDisk);

          const exists = existsSync(pathOnDisk);
          const isDir = exists && statSync(pathOnDisk).isDirectory();

          if (exists) {
            if (isDir) {
              if (url.pathname.endsWith('/')) {
                const indexPath = join(pathOnDisk, 'index.html');
                const indexFile = Bun.file(indexPath);
                if (await indexFile.exists()) {
                  // serve index
                  return new Response(indexFile, {
                    headers: { 'Content-Type': indexFile.type },
                  });
                }

                // serve file listing
                return new Response(
                  getFileListingHTML(pathOnDisk, url.pathname),
                  { headers: { 'Content-Type': 'text/html' } }
                );
              }

              // redirect to the directory with a trailing slash
              return Response.redirect(`${url.pathname}/`, 301);
            }

            // serve file
            return new Response(file, {
              headers: {
                'Content-Type': file.type,
              },
            });
          }

          const notFoundPath = join(dirs.OUTPUT, '404.html');
          const notFoundFile = Bun.file(notFoundPath);
          return new Response(notFoundFile, { status: 404 });
        } catch (error) {
          console.error('Error serving file:', error);
          return new Response('Internal Server Error', { status: 500 });
        }
      },
    });

    log.info(
      paint.blue('http:'),
      `http://${this.server.hostname}:${this.server.port}`
    );
  }
}
