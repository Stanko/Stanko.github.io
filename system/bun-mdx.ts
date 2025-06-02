import { plugin as bunPlugin, type BunPlugin } from 'bun';
import { compile } from '@mdx-js/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

import { DATE_MATCH_REGEX, DATE_REGEX, IS_DEV } from '../app/lib/constants';

const WORDS_PER_MINUTE = 180;

const getWordsCount = (markdown: string): number => {
  const wordsCount = markdown
    .replace(/^\+\+\+[\s\S]*?\+\+\+/, '') // Frontmatter
    // I think it is more accurate to count the code as words
    // .replace(/```[\s\S]*?```/g, '') // Code blocks
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/\s+/g, ' ') // Extra whitespace
    .trim()
    .split(' ').length;

  return wordsCount;
};

const mdxPlugin: BunPlugin = {
  name: 'mdx-with-frontmatter',
  setup(build) {
    build.onLoad({ filter: /\.mdx$/ }, async (args) => {
      const source = await Bun.file(args.path).text();
      const sourceParts = source.split('+++');
      const frontmatter = sourceParts[1] as string;
      const content = sourceParts[2] as string;

      // Get the file name
      const parts = args.path.split('/');
      const fileName = parts[parts.length - 1] as string;
      const dirName = parts[parts.length - 2] as string;

      const slug = dirName.replace(DATE_REGEX, '');

      // extract the date from the file name if it exists
      // 2016-03-21-test.md
      const dateMatch =
        fileName.match(DATE_MATCH_REGEX) || dirName.match(DATE_MATCH_REGEX);

      const words = getWordsCount(content);
      const minutes = Math.ceil(words / WORDS_PER_MINUTE);
      const date = dateMatch ? dateMatch[1] : null;

      // Parse the frontmatter data
      const parsedData = Bun.TOML.parse(frontmatter) as {
        title: string;
      };

      // Strip HTML from title, TODO check for a nicer solution
      const titlePlain = parsedData.title?.replace(/<[^>]*>?/gm, '') || '';

      // This is a backup for the case where intro is not provided
      let snippet = content
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links
        .replace(/!\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown images
        .replace(/\(?(https?:\/\/[^\s)]+)\)?/g, '') // Remove inline links
        .replace(/[^a-zA-Z0-9\s.,!?;:'"()-]/g, '') // Remove everything that is not a letter, number, or common punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

      if (snippet.length > 200) {
        snippet = snippet.substring(0, 200) + '...';
      }

      // Stringify the frontmatter data
      const data = JSON.stringify({
        slug,
        date,
        minutes,
        words,
        titlePlain,
        snippet,
        ...parsedData,
      });

      const compiled = await compile(content, {
        outputFormat: 'program',
        rehypePlugins: [
          rehypeSlug,
          [rehypePrism, { defaultLanguage: 'shell' }],
        ],
        remarkPlugins: [remarkGfm],
        development: IS_DEV,
        format: 'mdx',
      });

      const code = [
        compiled.value.toString(),
        `export const data = ${data};`,
      ].join('\n\n');

      // For debug purposes
      // await Bun.write('./test.js', code);

      return {
        contents: code,
        loader: 'js',
      };
    });
  },
};

await bunPlugin(mdxPlugin);
