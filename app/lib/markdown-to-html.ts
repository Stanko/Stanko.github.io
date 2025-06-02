// Import necessary packages from your dependencies
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

/**
 * Parse markdown string to HTML
 * @param {string} markdownString - The markdown string to parse
 * @returns {string} - The resulting HTML
 */
export const markdownToHTML = async (
  markdownString: string,
  allowDangerousHtml: boolean = true
): Promise<string> => {
  const result = await unified()
    .use(remarkParse) // Parse markdown to mdast
    .use(remarkGfm) // Support GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(remarkRehype, { allowDangerousHtml }) // Convert mdast to hast (HTML AST)
    .use(rehypeStringify, { allowDangerousHtml }) // Convert hast to HTML string
    .process(markdownString);

  return String(result);
};
