import { autocompletion } from '@codemirror/autocomplete';

const imageUrls = [
  '/images/bilbo.jpg',
  '/images/gandalf.jpg',
  '/images/merry.jpg',
  '/images/pippin.jpg',
];

const linkUrls = [
  { url: '/blog/post-1', title: 'Post 1' },
  { url: '/blog/post-2', title: 'Post 2' },
  { url: '/blog/post-3', title: 'Post 3' },
  { url: '/blog/post-4', title: 'Post 4' },
];

const processLinkURLs = (urls, urlPrefix) => {
  // Filter URLs based on what the user has typed
  const filteredUrls = urls.filter((item) =>
    item.url.toLowerCase().includes(urlPrefix.toLowerCase())
  );

  // Create completion options
  const options = filteredUrls.map((item) => ({
    label: item.url,
    type: 'url',
    info: item.title,
    apply: item.url,
  }));

  return options;
};

const processImageURLs = (urls, urlPrefix) => {
  // Filter URLs based on what the user has typed
  const filteredUrls = urls.filter((url) =>
    url.toLowerCase().includes(urlPrefix.toLowerCase())
  );

  // Create completion options
  const options = filteredUrls.map((url) => ({
    label: url,
    type: 'image',
    apply: url,
  }));

  return options;
};

// Combined autocomplete function for both images and links
const markdownUrlCompletion = (context) => {
  // Get the cursor position
  const cursor = context.pos;
  const doc = context.state.doc;
  const line = doc.lineAt(cursor);
  const lineText = line.text;

  // Get text before cursor on this line
  const beforeCursor = lineText.slice(0, cursor - line.from);

  // Check for image pattern: ![...](cursor here
  const imageRegex = /!\[.*?\]\(([^)]*)$/;
  const imageMatch = beforeCursor.match(imageRegex);

  // Check for link pattern: [...](cursor here
  const linkRegex = /(?<!!)\[.*?\]\(([^)]*)$/;
  const linkMatch = beforeCursor.match(linkRegex);

  // Determine which type of completion we need
  let urlPrefix = '';

  if (imageMatch) {
    const urlPrefix = imageMatch[1] || '';
    const from = cursor - urlPrefix.length;

    const options = processImageURLs(imageUrls, urlPrefix);

    return {
      from,
      to: cursor,
      options,
      validFor: /^[^)]*/,
    };
  } else if (linkMatch) {
    const urlPrefix = linkMatch[1] || '';
    const from = cursor - urlPrefix.length;

    const options = processLinkURLs(linkUrls, urlPrefix);

    return {
      from,
      to: cursor,
      options,
      validFor: /^[^)]*/,
    };
  }

  // Not in a URL context
  return null;
};

// Create a function that generates the autocompletion extension with provided URLs
function createUrlAutocomplete(imageUrls = [], linkUrls = []) {
  return autocompletion({
    override: [
      (context) => markdownUrlCompletion(context, imageUrls, linkUrls),
    ],
    defaultKeymap: true,
    // Disabled for now
    icons: false,
  });
}

// Add to your existing setup
export const urlAutocomplete = createUrlAutocomplete(imageUrls, linkUrls);
