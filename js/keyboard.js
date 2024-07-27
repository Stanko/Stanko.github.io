const keyCodes = {
  // 0: {
  //   'Key has no keycode',
  //   id: '',
  // },
  // 3: {
  //   'break',
  //   id: '',
  // },
  8: {
    // 'backspace / delete',
    id: 'delete',
  },
  9: {
    id: 'tab',
  },
  // 12: {
  //   'clear',
  //   id: '',
  // },
  13: {
    id: 'enter',
  },
  16: {
    id: 'shift',
    checkSide: true,
    // DOM_KEY_LOCATION_LEFT
    // DOM_KEY_LOCATION_RIGHT
  },
  17: {
    id: 'control',
    checkSide: true,
  },
  18: {
    id: 'alt',
    checkSide: true,
  },
  // 19: {
  //   'pause/break',
  //   id: '',
  // },
  20: {
    id: 'capsLock',
  },
  // 21: {
  //   'hangul',
  //   id: '',
  // },
  // 25: {
  //   'hanja',
  //   id: '',
  // },
  27: {
    id: 'esc',
  },
  // 28: {
  //   'conversion',
  //   id: '',
  // },
  // 29: {
  //   'non-conversion',
  //   id: '',
  // },
  32: {
    id: 'space',
  },
  // 33: {
  //   'page up',
  //   id: '',
  // },
  // 34: {
  //   'page down',
  //   id: '',
  // },
  // 35: {
  //   'end',
  //   id: '',
  // },
  // 36: {
  //   'home',
  //   id: '',
  // },
  37: {
    id: 'arrowLeft',
  },
  38: {
    id: 'arrowUp',
  },
  39: {
    id: 'arrowRight',
  },
  40: {
    id: 'arrowDown',
  },
  // 41: {
  //   'select',
  //   id: '',
  // },
  // 42: {
  //   'print',
  //   id: '',
  // },
  // 43: {
  //   'execute',
  //   id: '',
  // },
  // 44: {
  //   'print Screen',
  //   id: '',
  // },
  // 45: {
  //   'insert',
  //   id: '',
  // },
  46: {
    id: 'delete',
  },
  // 47: {
  //   'help',
  //   id: '',
  // },
  48: {
    id: '0',
  },
  49: {
    id: '1',
  },
  50: {
    id: '2',
  },
  51: {
    id: '3',
  },
  52: {
    id: '4',
  },
  53: {
    id: '5',
  },
  54: {
    id: '6',
  },
  55: {
    id: '7',
  },
  56: {
    id: '8',
  },
  57: {
    id: '9',
  },
  58: {
    // ':',
    id: 'semicolon',
  },
  59: {
    // 'semicolon (firefox), equals',
    id: 'equals',
  },
  60: {
    // '<',
    id: 'comma',
  },
  61: {
    // 'equals (firefox)',
    id: 'equals',
  },
  // 63: {
  //   'ß',
  //   id: '',
  // },
  64: {
    // '@ (firefox)',
    id: '2',
  },
  65: {
    id: 'a',
  },
  66: {
    id: 'b',
  },
  67: {
    id: 'c',
  },
  68: {
    id: 'd',
  },
  69: {
    id: 'e',
  },
  70: {
    id: 'f',
  },
  71: {
    id: 'g',
  },
  72: {
    id: 'h',
  },
  73: {
    id: 'i',
  },
  74: {
    id: 'j',
  },
  75: {
    id: 'k',
  },
  76: {
    id: 'l',
  },
  77: {
    id: 'm',
  },
  78: {
    id: 'n',
  },
  79: {
    id: 'o',
  },
  80: {
    id: 'p',
  },
  81: {
    id: 'q',
  },
  82: {
    id: 'r',
  },
  83: {
    id: 's',
  },
  84: {
    id: 't',
  },
  85: {
    id: 'u',
  },
  86: {
    id: 'v',
  },
  87: {
    id: 'w',
  },
  88: {
    id: 'x',
  },
  89: {
    id: 'y',
  },
  90: {
    id: 'z',
  },
  91: {
    // 'Windows Key / Left ⌘ / Chromebook Search key',
    id: 'cmdLeft',
  },
  92: {
    // 'right window key',
    id: 'cmdRight',
  },
  93: {
    // 'Windows Menu / Right ⌘',
    id: 'cmdRight',
  },
  // 95: {
  //  '// sleep',
  //   id: '',
  // },
  96: {
    // 'numpad 0',
    id: '0',
  },
  97: {
    // 'numpad 1',
    id: '1',
  },
  98: {
    // 'numpad 2',
    id: '2',
  },
  99: {
    // 'numpad 3',
    id: '3',
  },
  100: {
    // 'numpad 4',
    id: '4',
  },
  101: {
    // 'numpad 5',
    id: '5',
  },
  102: {
    // 'numpad 6',
    id: '6',
  },
  103: {
    // 'numpad 7',
    id: '7',
  },
  104: {
    // 'numpad 8',
    id: '8',
  },
  105: {
    // 'numpad 9',
    id: '9',
  },
  106: {
    // 'multiply',
    id: '8',
  },
  107: {
    // 'add',
    id: 'equals',
  },
  108: {
    // 'numpad period (firefox)',
    id: 'dot',
  },
  109: {
    // 'subtract',
    id: 'minus',
  },
  110: {
    // 'decimal point',
    id: 'dot',
  },
  111: {
    // 'divide',
    id: 'slash',
  },
  112: {
    id: 'f1',
  },
  113: {
    id: 'f2',
  },
  114: {
    id: 'f3',
  },
  115: {
    id: 'f4',
  },
  116: {
    id: 'f5',
  },
  117: {
    id: 'f6',
  },
  118: {
    id: 'f7',
  },
  119: {
    id: 'f8',
  },
  120: {
    id: 'f9',
  },
  121: {
    id: 'f10',
  },
  122: {
    id: 'f11',
  },
  123: {
    id: 'f12',
  },
  124: {
    id: 'f13',
  },
  125: {
    id: 'f14',
  },
  126: {
    id: 'f15',
  },
  127: {
    id: 'f16',
  },
  128: {
    id: 'f17',
  },
  129: {
    id: 'f18',
  },
  130: {
    id: 'f19',
  },
  131: {
    id: 'f20',
  },
  132: {
    id: 'f21',
  },
  133: {
    id: 'f22',
  },
  134: {
    id: 'f23',
  },
  135: {
    id: 'f24',
  },
  // 144: {
  //   'num lock',
  //   id: '',
  // },
  // 145: {
  //   'scroll lock',
  //   id: '',
  // },
  160: {
    // '^',
    id: '6',
  },
  161: {
    // '!',
    id: '1',
  },
  163: {
    // '#',
    id: '3',
  },
  164: {
    // '$',
    id: '4',
  },
  165: {
    // 'ù',
    id: 'u',
  },
  // 166: {
  //   'page backward',
  //   id: '',
  // },
  // 167: {
  //   'page forward',
  //   id: '',
  // },
  168: {
    // 'refresh',
    id: 'f5',
  },
  169: {
    // 'closing paren (AZERTY)',
    id: '0',
  },
  170: {
    // '*',
    id: '8',
  },
  171: {
    // '~ + * key',
    id: 'tilde',
  },
  // 172: {
  //   'home key',
  //   id: '',
  // },
  173: {
    // 'minus (firefox), mute/unmute',
    id: 'minus',
  },
  174: {
    // 'decrease volume level',
    id: 'f10',
  },
  175: {
    // 'increase volume level',
    id: 'f11',
  },
  // 176: {
  //   'next',
  //   id: '',
  // },
  // 177: {
  //   'previous',
  //   id: '',
  // },
  // 178: {
  //   'stop',
  //   id: '',
  // },
  179: {
    // 'play/pause',
    id: 'f8',
  },
  // 180: {
  //   'e-mail',
  //   id: '',
  // },
  181: {
    // 'mute/unmute (firefox)',
    id: 'f10',
  },
  182: {
    // 'decrease volume level (firefox)',
    id: 'f11',
  },
  183: {
    // 'increase volume level (firefox)',
    id: 'f12',
  },
  186: {
    // 'semi-colon / ñ',
    id: 'semicolon',
  },
  187: {
    // 'equal sign',
    id: 'equals',
  },
  188: {
    // 'comma',
    id: 'comma',
  },
  189: {
    // 'dash',
    id: 'minus',
  },
  190: {
    // 'period',
    id: 'dot',
  },
  191: {
    // 'forward slash / ç',
    id: 'slash',
  },
  192: {
    // 'grave accent / ñ / æ / ö',
    id: 'tilde',
  },
  193: {
    // '?, / or °',
    id: 'slash',
  },
  194: {
    // 'numpad period (chrome)',
    id: 'dot',
  },
  219: {
    // 'open bracket',
    id: 'squareBracketLeft',
  },
  220: {
    // 'back slash',
    id: 'backslash',
  },
  221: {
    // 'close bracket / å',
    id: 'squareBracketRight',
  },
  222: {
    // 'single quote / ø / ä',
    id: 'apostrophe',
  },
  223: {
    // '`',
    id: 'tilde',
  },
  224: {
    // 'left or right ⌘ key (firefox)',
    id: 'cmd',
    checkSide: true,
  },
  225: {
    // 'altgr',
    id: 'altRight',
  },
  // 226: {
  //   'left back slash',
  //   id: '',
  // },
  // 230: {
  //   'GNOME Compose Key',
  //   id: '',
  // },
  231: {
    // 'ç',
    id: 'c',
  },
  // 233: {
  //   'XF86Forward',
  //   id: '',
  // },
  // 234: {
  //   'XF86Back',
  //   id: '',
  // },
  // 240: {
  //   'alphanumeric',
  //   id: '',
  // },
  // 242: {
  //   'hiragana/katakana',
  //   id: '',
  // },
  // 243: {
  //   'half-width/full-width',
  //   id: '',
  // },
  // 244: {
  //   'kanji',
  //   id: '',
  // },
  // 255: {
  //   'toggle touchpad',
  //   id: '',
  // },
};


function getKeyElement(e) {
  const key = keyCodes[e.keyCode];

  if (key && key.id) {
    let keySelector = `#Key--${ key.id }`;

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
