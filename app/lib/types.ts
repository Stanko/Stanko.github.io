/**
 * Page object created by parsing a .mdx or .tsx file.
 */
export type Page = {
  // Source file path
  path: string;
  // Absolute pathname of the website page (without the domain)
  pathname: string;
  // Absolute path to the output file
  outputFilepath: string;
  // Data extracted from the page
  pageData: Record<string, unknown>;
  // Rendered HTML of the page
  html: string;
  // Rendered method
  render: () => Promise<string>;
};
