import { keymap } from '@codemirror/view';
import { EditorSelection, Transaction } from '@codemirror/state';

// Helper to get word boundaries at cursor position
function getWordAtCursor(state, pos) {
  const wordChars = /[\p{L}\p{N}_-]/u;
  let start = pos,
    end = pos;

  // Find start of word
  while (start > 0 && wordChars.test(state.sliceDoc(start - 1, start))) {
    start--;
  }

  // Find end of word
  while (
    end < state.doc.length &&
    wordChars.test(state.sliceDoc(end, end + 1))
  ) {
    end++;
  }

  return { from: start, to: end };
}

// Helper to check if text already has formatting and remove/add as needed
function toggleFormatting(view, prefix, suffix) {
  let { state, dispatch } = view;
  let selection = state.selection;
  let changes = [];
  let newSelection = [];

  for (let range of selection.ranges) {
    let from = range.from;
    let to = range.to;

    // If no text is selected, try to select the word at cursor
    if (from === to) {
      const word = getWordAtCursor(state, from);
      from = word.from;
      to = word.to;
    }

    let text = state.sliceDoc(from, to);
    let preContext = state.sliceDoc(Math.max(0, from - prefix.length), from);
    let postContext = state.sliceDoc(
      to,
      Math.min(state.doc.length, to + suffix.length)
    );

    // Check if already formatted
    if (preContext === prefix && postContext === suffix) {
      // Remove formatting
      changes.push({ from: from - prefix.length, to: from, insert: '' });
      changes.push({ from: to, to: to + suffix.length, insert: '' });

      // Create new selection that accounts for the removed formatting markers
      newSelection.push(
        EditorSelection.range(from - prefix.length, to - prefix.length)
      );
    } else {
      // Add formatting
      changes.push({ from, to, insert: prefix + text + suffix });
      newSelection.push(
        EditorSelection.range(from + prefix.length, to + prefix.length)
      );
    }
  }

  // Create a transaction with appropriate metadata for undo support
  let tr = state.update({
    changes,
    selection: EditorSelection.create(newSelection),
    scrollIntoView: true,
    userEvent: 'input.markdown.format', // This helps with undo grouping
  });

  dispatch(tr);

  return true;
}

export const customKeyMap = [
  // Bold: Cmd/Ctrl+B
  {
    key: 'Mod-b',
    run: (view) => toggleFormatting(view, '**', '**'),
  },

  // Italic: Mod-i
  {
    key: 'Mod-i',
    run: (view) => toggleFormatting(view, '_', '_'),
  },

  // Link: Cmd/Ctrl+K
  {
    key: 'Mod-k',
    run: (view) => {
      let { state, dispatch } = view;
      let selection = state.selection;
      let changes = [];
      let newSelection = [];

      for (let range of selection.ranges) {
        let from = range.from;
        let to = range.to;

        // If no text is selected, try to select the word at cursor
        if (from === to) {
          const word = getWordAtCursor(state, from);
          from = word.from;
          to = word.to;
        }

        let text = state.sliceDoc(from, to);

        // Check if already wrapped in link syntax
        const beforeText = state.sliceDoc(Math.max(0, from - 1), from);
        const afterText = state.sliceDoc(
          to,
          Math.min(state.doc.length, to + 1)
        );

        if (beforeText === ']' && afterText === '(') {
          // Find the opening bracket
          let bracketLevel = 1;
          let linkTextStart = from - 1;

          while (linkTextStart > 0 && bracketLevel > 0) {
            linkTextStart--;
            if (state.sliceDoc(linkTextStart, linkTextStart + 1) === '[') {
              bracketLevel--;
            }
          }

          // Find the closing parenthesis
          let linkUrlEnd = to + 1;
          bracketLevel = 1;

          while (linkUrlEnd < state.doc.length && bracketLevel > 0) {
            if (state.sliceDoc(linkUrlEnd, linkUrlEnd + 1) === ')') {
              bracketLevel--;
            } else if (state.sliceDoc(linkUrlEnd, linkUrlEnd + 1) === '(') {
              bracketLevel++;
            }
            linkUrlEnd++;
          }

          // Extract just the link text
          const linkText = state.sliceDoc(linkTextStart + 1, from - 1);

          // Remove the entire link markup
          changes.push({
            from: linkTextStart,
            to: linkUrlEnd,
            insert: linkText,
          });

          newSelection.push(
            EditorSelection.range(
              linkTextStart,
              linkTextStart + linkText.length
            )
          );
        } else {
          // Add link
          changes.push({
            from,
            to,
            insert: '[' + text + ']()',
          });

          // Position cursor in the URL section
          const urlStart = from + text.length + 3;
          newSelection.push(EditorSelection.range(urlStart, urlStart));
        }
      }

      // Create a transaction with appropriate metadata for undo support
      let tr = state.update({
        changes,
        selection: EditorSelection.create(newSelection),
        scrollIntoView: true,
        userEvent: 'input.markdown.link', // This helps with undo grouping
      });

      dispatch(tr);
      return true;
    },
  },
];

// Create keymap with Markdown shortcuts
export const customKeyBindings = keymap.of(customKeyMap, {
  override: true,
});
