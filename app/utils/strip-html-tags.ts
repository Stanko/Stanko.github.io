export const stripHTMLTags = (html: string): string => {
  return html.replace(/<\/?[^>]+(>|$)/g, '');
};
