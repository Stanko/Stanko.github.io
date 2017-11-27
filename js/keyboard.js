const keyCodes = {
  // 0: {
  //   // 'Key has no keycode',
  //   className: '',
  // },
  // 3: {
  //   // 'break',
  //   className: '',
  // },
  8: {
    // 'backspace / delete',
    className: 'delete',
  },
  9: {
    className: 'tab',
  },
  // 12: {
  //   // 'clear',
  //   className: '',
  // },
  13: {
    className: 'enter',
  },
  16: {
    className: 'shift',
    checkSide: true,
    // DOM_KEY_LOCATION_LEFT
    // DOM_KEY_LOCATION_RIGHT
  },
  17: {
    className: 'control',
    checkSide: true,
  },
  18: {
    className: 'alt',
    checkSide: true,
  },
  // 19: {
  //   // 'pause/break',
  //   className: '',
  // },
  20: {
    className: 'capsLock',
  },
  // 21: {
  //   // 'hangul',
  //   className: '',
  // },
  // 25: {
  //   // 'hanja',
  //   className: '',
  // },
  27: {
    className: 'esc',
  },
  // 28: {
  //   // 'conversion',
  //   className: '',
  // },
  // 29: {
  //   // 'non-conversion',
  //   className: '',
  // },
  32: {
    className: 'space',
  },
  // 33: {
  //   // 'page up',
  //   className: '',
  // },
  // 34: {
  //   // 'page down',
  //   className: '',
  // },
  // 35: {
  //   // 'end',
  //   className: '',
  // },
  // 36: {
  //   // 'home',
  //   className: '',
  // },
  37: {
    className: 'arrowLeft',
  },
  38: {
    className: 'arrowUp',
  },
  39: {
    className: 'arrowRight',
  },
  40: {
    className: 'arrowDown',
  },
  // 41: {
  //   // 'select',
  //   className: '',
  // },
  // 42: {
  //   // 'print',
  //   className: '',
  // },
  // 43: {
  //   // 'execute',
  //   className: '',
  // },
  // 44: {
  //   // 'print Screen',
  //   className: '',
  // },
  // 45: {
  //   // 'insert',
  //   className: '',
  // },
  46: {
    className: 'delete',
  },
  // 47: {
  //   // 'help',
  //   className: '',
  // },
  48: {
    className: '0',
  },
  49: {
    className: '1',
  },
  50: {
    className: '2',
  },
  51: {
    className: '3',
  },
  52: {
    className: '4',
  },
  53: {
    className: '5',
  },
  54: {
    className: '6',
  },
  55: {
    className: '7',
  },
  56: {
    className: '8',
  },
  57: {
    className: '9',
  },
  58: {
    // ':',
    className: 'semicolon',
  },
  59: {
    // 'semicolon (firefox), equals',
    className: 'equals',
  },
  60: {
    // '<',
    className: 'comma',
  },
  61: {
    // 'equals (firefox)',
    className: 'equals',
  },
  // 63: {
  //   // 'ß',
  //   className: '',
  // },
  64: {
    // '@ (firefox)',
    className: '2',
  },
  65: {
    className: 'a',
  },
  66: {
    className: 'b',
  },
  67: {
    className: 'c',
  },
  68: {
    className: 'd',
  },
  69: {
    className: 'e',
  },
  70: {
    className: 'f',
  },
  71: {
    className: 'g',
  },
  72: {
    className: 'h',
  },
  73: {
    className: 'i',
  },
  74: {
    className: 'j',
  },
  75: {
    className: 'k',
  },
  76: {
    className: 'l',
  },
  77: {
    className: 'm',
  },
  78: {
    className: 'n',
  },
  79: {
    className: 'o',
  },
  80: {
    className: 'p',
  },
  81: {
    className: 'q',
  },
  82: {
    className: 'r',
  },
  83: {
    className: 's',
  },
  84: {
    className: 't',
  },
  85: {
    className: 'u',
  },
  86: {
    className: 'v',
  },
  87: {
    className: 'w',
  },
  88: {
    className: 'x',
  },
  89: {
    className: 'y',
  },
  90: {
    className: 'z',
  },
  91: {
    // 'Windows Key / Left ⌘ / Chromebook Search key',
    className: 'cmdLeft',
  },
  92: {
    // 'right window key',
    className: 'cmdRight',
  },
  93: {
    // 'Windows Menu / Right ⌘',
    className: 'cmdRight',
  },
  // 95: {
  //  '// sleep',
  //   className: '',
  // },
  96: {
    // 'numpad 0',
    className: '0',
  },
  97: {
    // 'numpad 1',
    className: '1',
  },
  98: {
    // 'numpad 2',
    className: '2',
  },
  99: {
    // 'numpad 3',
    className: '3',
  },
  100: {
    // 'numpad 4',
    className: '4',
  },
  101: {
    // 'numpad 5',
    className: '5',
  },
  102: {
    // 'numpad 6',
    className: '6',
  },
  103: {
    // 'numpad 7',
    className: '7',
  },
  104: {
    // 'numpad 8',
    className: '8',
  },
  105: {
    // 'numpad 9',
    className: '9',
  },
  106: {
    // 'multiply',
    className: '8',
  },
  107: {
    // 'add',
    className: 'equals',
  },
  108: {
    // 'numpad period (firefox)',
    className: 'dot',
  },
  109: {
    // 'subtract',
    className: 'minus',
  },
  110: {
    // 'decimal point',
    className: 'dot',
  },
  111: {
    // 'divide',
    className: 'slash',
  },
  112: {
    className: 'f1',
  },
  113: {
    className: 'f2',
  },
  114: {
    className: 'f3',
  },
  115: {
    className: 'f4',
  },
  116: {
    className: 'f5',
  },
  117: {
    className: 'f6',
  },
  118: {
    className: 'f7',
  },
  119: {
    className: 'f8',
  },
  120: {
    className: 'f9',
  },
  121: {
    className: 'f10',
  },
  122: {
    className: 'f11',
  },
  123: {
    className: 'f12',
  },
  124: {
    className: 'f13',
  },
  125: {
    className: 'f14',
  },
  126: {
    className: 'f15',
  },
  127: {
    className: 'f16',
  },
  128: {
    className: 'f17',
  },
  129: {
    className: 'f18',
  },
  130: {
    className: 'f19',
  },
  131: {
    className: 'f20',
  },
  132: {
    className: 'f21',
  },
  133: {
    className: 'f22',
  },
  134: {
    className: 'f23',
  },
  135: {
    className: 'f24',
  },
  // 144: {
  //   // 'num lock',
  //   className: '',
  // },
  // 145: {
  //   // 'scroll lock',
  //   className: '',
  // },
  160: {
    // '^',
    className: '6',
  },
  161: {
    // '!',
    className: '1',
  },
  163: {
    // '#',
    className: '3',
  },
  164: {
    // '$',
    className: '4',
  },
  165: {
    // 'ù',
    className: 'u',
  },
  // 166: {
  //   // 'page backward',
  //   className: '',
  // },
  // 167: {
  //   // 'page forward',
  //   className: '',
  // },
  168: {
    // 'refresh',
    className: 'f5',
  },
  169: {
    // 'closing paren (AZERTY)',
    className: '0',
  },
  170: {
    // '*',
    className: '8',
  },
  171: {
    // '~ + * key',
    className: 'tilde',
  },
  // 172: {
  //   // 'home key',
  //   className: '',
  // },
  173: {
    // 'minus (firefox), mute/unmute',
    className: 'minus',
  },
  174: {
    // 'decrease volume level',
    className: 'f10',
  },
  175: {
    // 'increase volume level',
    className: 'f11',
  },
  // 176: {
  //   // 'next',
  //   className: '',
  // },
  // 177: {
  //   // 'previous',
  //   className: '',
  // },
  // 178: {
  //   // 'stop',
  //   className: '',
  // },
  179: {
    // 'play/pause',
    className: 'f8',
  },
  // 180: {
  //   // 'e-mail',
  //   className: '',
  // },
  181: {
    // 'mute/unmute (firefox)',
    className: 'f10',
  },
  182: {
    // 'decrease volume level (firefox)',
    className: 'f11',
  },
  183: {
    // 'increase volume level (firefox)',
    className: 'f12',
  },
  186: {
    // 'semi-colon / ñ',
    className: 'semicolon',
  },
  187: {
    // 'equal sign',
    className: 'equals',
  },
  188: {
    // 'comma',
    className: 'comma',
  },
  189: {
    // 'dash',
    className: 'minus',
  },
  190: {
    // 'period',
    className: 'dot',
  },
  191: {
    // 'forward slash / ç',
    className: 'slash',
  },
  192: {
    // 'grave accent / ñ / æ / ö',
    className: 'tilde',
  },
  193: {
    // '?, / or °',
    className: 'slash',
  },
  194: {
    // 'numpad period (chrome)',
    className: 'dot',
  },
  219: {
    // 'open bracket',
    className: 'squareBracketLeft',
  },
  220: {
    // 'back slash',
    className: 'backslash',
  },
  221: {
    // 'close bracket / å',
    className: 'squareBracketRight',
  },
  222: {
    // 'single quote / ø / ä',
    className: 'apostrophe',
  },
  223: {
    // '`',
    className: 'tilde',
  },
  224: {
    // 'left or right ⌘ key (firefox)',
    className: 'cmd',
    checkSide: true,
  },
  225: {
    // 'altgr',
    className: 'altRight',
  },
  // 226: {
  //   // '< /git >, left back slash',
  //   className: '',
  // },
  // 230: {
  //   // 'GNOME Compose Key',
  //   className: '',
  // },
  231: {
    // 'ç',
    className: 'c',
  },
  // 233: {
  //   // 'XF86Forward',
  //   className: '',
  // },
  // 234: {
  //   // 'XF86Back',
  //   className: '',
  // },
  // 240: {
  //   // 'alphanumeric',
  //   className: '',
  // },
  // 242: {
  //   // 'hiragana/katakana',
  //   className: '',
  // },
  // 243: {
  //   // 'half-width/full-width',
  //   className: '',
  // },
  // 244: {
  //   // 'kanji',
  //   className: '',
  // },
  // 255: {
  //   // 'toggle touchpad',
  //   className: '',
  // },
};


function getKeyElement(e) {
  const key = keyCodes[e.keyCode];

  if (key && key.className) {
    let keySelector = `#Key--${ key.className }`;

    if (key.checkSide && KeyboardEvent) {
      if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        keySelector += 'Left';
      } else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        keySelector += 'Right';
      }
    }

    const keyElement = document.querySelector(keySelector);

    return keyElement;
  }
}

document.addEventListener('keydown', function(e) {
  const keyElement = getKeyElement(e);

  if (keyElement) {
    keyElement.setAttribute('class', 'Key Key--active');
  }
});

document.addEventListener('keyup', function(e) {
  const keyElement = getKeyElement(e);

  if (keyElement) {
    keyElement.setAttribute('class', 'Key');
  }
});

function removeActiveKeyClass() {
  const keyElements = document.querySelectorAll('.Key--active');

  for (let i = 0; i < keyElements.length; i++) {
    keyElements[i].setAttribute('class', 'Key');
  }
}

window.addEventListener('blur', removeActiveKeyClass);
