import { renderToReadableStream } from 'react-dom/server';

export const render = async (page: React.ReactNode) => {
  const stream = await renderToReadableStream(page);

  const html = await Bun.readableStreamToText(stream);

  // Remove empty HTML comments React adds for hydration
  return html.replace(/<!-- -->/g, '');
};
