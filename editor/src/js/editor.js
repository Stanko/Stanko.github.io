import { keymap } from '@codemirror/view';
import { EditorView } from 'codemirror';
import {
  markdown,
  markdownKeymap,
  markdownLanguage,
} from '@codemirror/lang-markdown';
// import { languages } from '@codemirror/language-data';

import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { customKeyMap } from './keybindings';

import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';

import { search, searchKeymap } from '@codemirror/search';
import { urlAutocomplete } from './url-autocomplete';

const headerStyles = {
  fontWeight: 'bold',
  lineHeight: '1.1em',
  marginBottom: '0.5em',
};

const highlightingStyles = HighlightStyle.define([
  // Headers
  { tag: tags.heading1, ...headerStyles, fontSize: '2em' },
  { tag: tags.heading2, ...headerStyles, fontSize: '1.8em' },
  { tag: tags.heading3, ...headerStyles, fontSize: '1.5em' },
  {
    tag: [tags.heading4, tags.heading5, tags.heading6],
    ...headerStyles,
    fontSize: '1.2em',
  },
  // Quote
  { tag: tags.quote, fontStyle: 'italic', fontSize: '1.3em' },
  // Code
  {
    tag: tags.monospace,
    fontFamily: 'var(--monospace-font)',
    fontSize: '0.8em',
  },
]);

const highlightingClasses = HighlightStyle.define([
  { tag: tags.processingInstruction, class: 'sx' },

  { tag: tags.strong, class: 'b' }, // Bold text
  { tag: tags.emphasis, class: 'em' }, // Italic text
  { tag: tags.link, class: 'link' },
  { tag: tags.url, class: 'url' },
  { tag: tags.monospace, class: 'code' }, // Code

  { tag: tags.list, class: 'list' },
  { tag: tags.contentSeparator, class: 'hr' },

  { tag: tags.link, class: 'link' },
  { tag: tags.heading1, class: 'h h1' },
  { tag: tags.heading2, class: 'h h2' },
  { tag: tags.heading3, class: 'h h3' },
  { tag: tags.heading4, class: 'h h4' },
  { tag: tags.heading5, class: 'h h5' },
  { tag: tags.heading6, class: 'h h6' },
  { tag: tags.emphasis, class: 'em' },
  { tag: tags.strong, class: 'b' },
  { tag: tags.quote, class: 'quote' },

  // Code
  // { tag: tags.keyword, class: 'code keyword' },
  // { tag: tags.atom, class: 'code atom' },
  // { tag: tags.bool, class: 'code bool' },
  // { tag: tags.url, class: 'code url' },
  // { tag: tags.labelName, class: 'code labelName' },
  // { tag: tags.inserted, class: 'code inserted' },
  // { tag: tags.deleted, class: 'code deleted' },
  // { tag: tags.literal, class: 'code literal' },
  // { tag: tags.string, class: 'code string' },
  // { tag: tags.number, class: 'code number' },
  // {
  //   tag: [tags.regexp, tags.escape, tags.special(tags.string)],
  //   class: 'code string2',
  // },
  // { tag: tags.variableName, class: 'code var' },
  // { tag: tags.local(tags.variableName), class: 'code var local' },
  // { tag: tags.definition(tags.variableName), class: 'code var definition' },
  // { tag: tags.special(tags.variableName), class: 'code var special' },
  // {
  //   tag: tags.definition(tags.propertyName),
  //   class: 'code propertyName definition',
  // },
  // { tag: tags.typeName, class: 'code typeName' },
  // { tag: tags.namespace, class: 'code namespace' },
  // { tag: tags.className, class: 'code className' },
  // { tag: tags.macroName, class: 'code macroName' },
  // { tag: tags.propertyName, class: 'code propertyName' },
  // { tag: tags.operator, class: 'code operator' },
  // { tag: tags.comment, class: 'code comment' },
  // { tag: tags.meta, class: 'code meta' },
  // { tag: tags.invalid, class: 'code invalid' },
  // { tag: tags.punctuation, class: 'code punctuation' },
]);

// export const minimalSetup: Extension = (() => [
//   highlightSpecialChars(),
//   history(),
//   drawSelection(),
//   syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
//   keymap.of([
//     ...defaultKeymap,
//     ...historyKeymap,
//   ])
// ])()

const view = new EditorView({
  doc: document.querySelector('.content').innerHTML.replace(/&gt;/g, '>'),
  extensions: [
    history(),
    search(),
    markdown({
      base: markdownLanguage,
      // codeLanguages: languages,
    }),
    syntaxHighlighting(highlightingStyles),
    syntaxHighlighting(highlightingClasses),
    EditorView.lineWrapping,
    keymap.of([
      ...customKeyMap,
      ...defaultKeymap,
      ...historyKeymap,
      ...searchKeymap,
    ]),
    urlAutocomplete,
  ],
  parent: document.querySelector('.editor'),
});
