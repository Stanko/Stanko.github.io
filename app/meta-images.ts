// ------------- WORK IN PROGRESS

// import { join } from 'path';
import { dirs } from './lib/constants';
import { Pages } from './lib/pages';
import { MetaImageGenerator, type Theme } from './utils/meta-image-generator';
import { log, paint } from './utils/log';
import type { BlogPost } from '@site/content/blog';
import { readFileSync, writeFileSync } from 'node:fs';

const pages = new Pages(dirs.CONTENT);

await pages.buildPages();

const generator = new MetaImageGenerator();

const posts = pages.collections.blog as BlogPost[];

const start = Date.now();
let i = 0;
for (const post of posts) {
  console.log(post.pageData);
  if (!post.pageData.image) {
    // const outputPath = post.path.replace('index.mdx', 'cover.png');
    const outputPath = `./test-output/output-${i}.png`;

    // const content = readFileSync(post.path, 'utf8');
    // const parts = content.split('+++');
    // parts[1] += '\nimage-meta = "./cover.png"\n';
    // writeFileSync(post.path, parts.join('+++'), 'utf8');

    generator.generate(post.pageData.title, outputPath, {
      theme: (post.pageData.theme as Theme) || 'blue',
    });
    log.info(
      paint.blue('meta image:'),
      `${post.pageData.title} [${Date.now() - start}ms]`
    );

    i++;
    if (i > 0) {
      break;
    }
  }
}
log.info(paint.blue('meta images:'), `${i} images [${Date.now() - start}ms]`);
