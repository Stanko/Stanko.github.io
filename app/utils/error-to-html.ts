import { ansiToHtml } from './ansi-to-html';

export const errorToHTML = (error: AggregateError | Error): string => {
  if (error instanceof AggregateError) {
    let html = '';

    for (const arg of error.errors) {
      if (typeof arg === 'string') {
        html += arg;
      } else {
        html += Bun.inspect(arg, { colors: true });
      }

      html += '\n';
    }

    return ansiToHtml(html);
  }

  // TODO nice to have, explore different error types and format it differently
  // Bun error gives a lot of information
  // [ "message", "originalLine", "originalColumn", "line", "column", "sourceURL", "stack" ]
  return ansiToHtml(error.stack || error.message);
};
