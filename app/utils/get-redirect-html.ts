import { config } from '@site/config';

export const getRedirectHTML = (pathname: string): string => {
  const url = new URL(pathname, config.baseUrl);

  return [
    '<!DOCTYPE html>',
    '<meta charset="utf-8">',
    `<link href="${url}" rel="canonical">`,
    `<meta content="0; url=${url}" http-equiv="refresh">`,
    '<title>This page has moved</title>',
    '<h1>This page has moved</h1>',
    `<p>You will be automatically redirected to <a href="${url}">${url}</a>.</p>`,
    `<p><a href="${url}">Click here</a> if you are not redirected.</p>`,
    `<script>window.location.replace("${url}");</script>`,
    '<style>body{font-family:system-ui,sans-serif;margin:0;padding:30px;background:#f6f6f8}</style>',
  ].join('');
};
