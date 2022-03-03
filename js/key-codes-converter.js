// Never finished.
// I wanted to map e.keyCode to e.code but couldn't bother in the end.
// Maybe someday.

const keymap = [
  {
    keyName: "backspace",
    keyCode: 8,
    key: "Backspace",
    code: "Backspace",
    notes: "",
  },
  {
    keyName: "tab",
    keyCode: 9,
    key: "Tab",
    code: "Tab",
    notes: "",
  },
  {
    keyName: "enter",
    keyCode: 13,
    key: "Enter",
    code: "Enter",
    notes: "",
  },
  {
    keyName: "shift(left)",
    keyCode: 16,
    key: "Shift",
    code: "ShiftLeft",
    notes: "<code>event.shiftKey</code> is true",
  },
  {
    keyName: "shift(right)",
    keyCode: 16,
    key: "Shift",
    code: "ShiftRight",
    notes: "<code>event.shiftKey</code> is true",
  },
  {
    keyName: "ctrl(left)",
    keyCode: 17,
    key: "Control",
    code: "ControlLeft",
    notes: "<code>event.ctrlKey</code> is true",
  },
  {
    keyName: "ctrl(right)",
    keyCode: 17,
    key: "Control",
    code: "ControlRight",
    notes: "<code>event.ctrlKey</code> is true",
  },
  {
    keyName: "alt(left)",
    keyCode: 18,
    key: "Alt",
    code: "AltLeft",
    notes: "<code>event.altKey</code> is true",
  },
  {
    keyName: "alt(right)",
    keyCode: 18,
    key: "Alt",
    code: "AltRight",
    notes: "<code>event.altKey</code> is true",
  },
  {
    keyName: "pause/break",
    keyCode: 19,
    key: "Pause",
    code: "Pause",
    notes: "",
  },
  {
    keyName: "caps lock",
    keyCode: 20,
    key: "CapsLock",
    code: "CapsLock",
    notes: "",
  },
  {
    keyName: "escape",
    keyCode: 27,
    key: "Escape",
    code: "Escape",
    notes: "",
  },
  {
    keyName: "space",
    keyCode: 32,
    key: "",
    code: "Space",
    notes: "The <code>event.key</code> value is a single space.",
  },
  {
    keyName: "page up",
    keyCode: 33,
    key: "PageUp",
    code: "PageUp",
    notes: "",
  },
  {
    keyName: "page down",
    keyCode: 34,
    key: "PageDown",
    code: "PageDown",
    notes: "",
  },
  {
    keyName: "end",
    keyCode: 35,
    key: "End",
    code: "End",
    notes: "",
  },
  {
    keyName: "home",
    keyCode: 36,
    key: "Home",
    code: "Home",
    notes: "",
  },
  {
    keyName: "left arrow",
    keyCode: 37,
    key: "ArrowLeft",
    code: "ArrowLeft",
    notes: "",
  },
  {
    keyName: "up arrow",
    keyCode: 38,
    key: "ArrowUp",
    code: "ArrowUp",
    notes: "",
  },
  {
    keyName: "right arrow",
    keyCode: 39,
    key: "ArrowRight",
    code: "ArrowRight",
    notes: "",
  },
  {
    keyName: "down arrow",
    keyCode: 40,
    key: "ArrowDown",
    code: "ArrowDown",
    notes: "",
  },
  {
    keyName: "print screen",
    keyCode: 44,
    key: "PrintScreen",
    code: "PrintScreen",
    notes: "",
  },
  {
    keyName: "insert",
    keyCode: 45,
    key: "Insert",
    code: "Insert",
    notes: "",
  },
  {
    keyName: "delete",
    keyCode: 46,
    key: "Delete",
    code: "Delete",
    notes: "",
  },
  {
    keyName: "0",
    keyCode: 48,
    key: "0",
    code: "Digit0",
    notes: "",
  },
  {
    keyName: "1",
    keyCode: 49,
    key: "1",
    code: "Digit1",
    notes: "",
  },
  {
    keyName: "2",
    keyCode: 50,
    key: "2",
    code: "Digit2",
    notes: "",
  },
  {
    keyName: "3",
    keyCode: 51,
    key: "3",
    code: "Digit3",
    notes: "",
  },
  {
    keyName: "4",
    keyCode: 52,
    key: "4",
    code: "Digit4",
    notes: "",
  },
  {
    keyName: "5",
    keyCode: 53,
    key: "5",
    code: "Digit5",
    notes: "",
  },
  {
    keyName: "6",
    keyCode: 54,
    key: "6",
    code: "Digit6",
    notes: "",
  },
  {
    keyName: "7",
    keyCode: 55,
    key: "7",
    code: "Digit7",
    notes: "",
  },
  {
    keyName: "8",
    keyCode: 56,
    key: "8",
    code: "Digit8",
    notes: "",
  },
  {
    keyName: "9",
    keyCode: 57,
    key: "9",
    code: "Digit9",
    notes: "",
  },
  {
    keyName: "a",
    keyCode: 65,
    key: "a",
    code: "KeyA",
    notes: "",
  },
  {
    keyName: "b",
    keyCode: 66,
    key: "b",
    code: "KeyB",
    notes: "",
  },
  {
    keyName: "c",
    keyCode: 67,
    key: "c",
    code: "KeyC",
    notes: "",
  },
  {
    keyName: "d",
    keyCode: 68,
    key: "d",
    code: "KeyD",
    notes: "",
  },
  {
    keyName: "e",
    keyCode: 69,
    key: "e",
    code: "KeyE",
    notes: "",
  },
  {
    keyName: "f",
    keyCode: 70,
    key: "f",
    code: "KeyF",
    notes: "",
  },
  {
    keyName: "g",
    keyCode: 71,
    key: "g",
    code: "KeyG",
    notes: "",
  },
  {
    keyName: "h",
    keyCode: 72,
    key: "h",
    code: "KeyH",
    notes: "",
  },
  {
    keyName: "i",
    keyCode: 73,
    key: "i",
    code: "KeyI",
    notes: "",
  },
  {
    keyName: "j",
    keyCode: 74,
    key: "j",
    code: "KeyJ",
    notes: "",
  },
  {
    keyName: "k",
    keyCode: 75,
    key: "k",
    code: "KeyK",
    notes: "",
  },
  {
    keyName: "l",
    keyCode: 76,
    key: "l",
    code: "KeyL",
    notes: "",
  },
  {
    keyName: "m",
    keyCode: 77,
    key: "m",
    code: "KeyM",
    notes: "",
  },
  {
    keyName: "n",
    keyCode: 78,
    key: "n",
    code: "KeyN",
    notes: "",
  },
  {
    keyName: "o",
    keyCode: 79,
    key: "o",
    code: "KeyO",
    notes: "",
  },
  {
    keyName: "p",
    keyCode: 80,
    key: "p",
    code: "KeyP",
    notes: "",
  },
  {
    keyName: "q",
    keyCode: 81,
    key: "q",
    code: "KeyQ",
    notes: "",
  },
  {
    keyName: "r",
    keyCode: 82,
    key: "r",
    code: "KeyR",
    notes: "",
  },
  {
    keyName: "s",
    keyCode: 83,
    key: "s",
    code: "KeyS",
    notes: "",
  },
  {
    keyName: "t",
    keyCode: 84,
    key: "t",
    code: "KeyT",
    notes: "",
  },
  {
    keyName: "u",
    keyCode: 85,
    key: "u",
    code: "KeyU",
    notes: "",
  },
  {
    keyName: "v",
    keyCode: 86,
    key: "v",
    code: "KeyV",
    notes: "",
  },
  {
    keyName: "w",
    keyCode: 87,
    key: "w",
    code: "KeyW",
    notes: "",
  },
  {
    keyName: "x",
    keyCode: 88,
    key: "x",
    code: "KeyX",
    notes: "",
  },
  {
    keyName: "y",
    keyCode: 89,
    key: "y",
    code: "KeyY",
    notes: "",
  },
  {
    keyName: "z",
    keyCode: 90,
    key: "z",
    code: "KeyZ",
    notes: "",
  },
  {
    keyName: "left window key",
    keyCode: 91,
    key: "Meta",
    code: "MetaLeft",
    notes: "<code>event.metaKey</code> is true",
  },
  {
    keyName: "right window key",
    keyCode: 92,
    key: "Meta",
    code: "MetaRight",
    notes: "<code>event.metaKey</code> is true",
  },
  {
    keyName: "select key (Context Menu)",
    keyCode: 93,
    key: "ContextMenu",
    code: "ContextMenu",
    notes: "",
  },
  {
    keyName: "numpad 0",
    keyCode: 96,
    key: "0",
    code: "Numpad0",
    notes: "",
  },
  {
    keyName: "numpad 1",
    keyCode: 97,
    key: "1",
    code: "Numpad1",
    notes: "",
  },
  {
    keyName: "numpad 2",
    keyCode: 98,
    key: "2",
    code: "Numpad2",
    notes: "",
  },
  {
    keyName: "numpad 3",
    keyCode: 99,
    key: "3",
    code: "Numpad3",
    notes: "",
  },
  {
    keyName: "numpad 4",
    keyCode: 100,
    key: "4",
    code: "Numpad4",
    notes: "",
  },
  {
    keyName: "numpad 5",
    keyCode: 101,
    key: "5",
    code: "Numpad5",
    notes: "",
  },
  {
    keyName: "numpad 6",
    keyCode: 102,
    key: "6",
    code: "Numpad6",
    notes: "",
  },
  {
    keyName: "numpad 7",
    keyCode: 103,
    key: "7",
    code: "Numpad7",
    notes: "",
  },
  {
    keyName: "numpad 8",
    keyCode: 104,
    key: "8",
    code: "Numpad8",
    notes: "",
  },
  {
    keyName: "numpad 9",
    keyCode: 105,
    key: "9",
    code: "Numpad9",
    notes: "",
  },
  {
    keyName: "multiply",
    keyCode: 106,
    key: "*",
    code: "NumpadMultiply",
    notes: "",
  },
  {
    keyName: "add",
    keyCode: 107,
    key: "+",
    code: "NumpadAdd",
    notes: "",
  },
  {
    keyName: "subtract",
    keyCode: 109,
    key: "–",
    code: "NumpadSubtract",
    notes: "",
  },
  {
    keyName: "decimal point",
    keyCode: 110,
    key: ".",
    code: "NumpadDecimal",
    notes: "",
  },
  {
    keyName: "divide",
    keyCode: 111,
    key: "/",
    code: "NumpadDivide",
    notes: "",
  },
  {
    keyName: "f1",
    keyCode: 112,
    key: "F1",
    code: "F1",
    notes: "",
  },
  {
    keyName: "f2",
    keyCode: 113,
    key: "F2",
    code: "F2",
    notes: "",
  },
  {
    keyName: "f3",
    keyCode: 114,
    key: "F3",
    code: "F3",
    notes: "",
  },
  {
    keyName: "f4",
    keyCode: 115,
    key: "F4",
    code: "F4",
    notes: "",
  },
  {
    keyName: "f5",
    keyCode: 116,
    key: "F5",
    code: "F5",
    notes: "",
  },
  {
    keyName: "f6",
    keyCode: 117,
    key: "F6",
    code: "F6",
    notes: "",
  },
  {
    keyName: "f7",
    keyCode: 118,
    key: "F7",
    code: "F7",
    notes: "",
  },
  {
    keyName: "f8",
    keyCode: 119,
    key: "F8",
    code: "F8",
    notes: "",
  },
  {
    keyName: "f9",
    keyCode: 120,
    key: "F9",
    code: "F9",
    notes: "",
  },
  {
    keyName: "f10",
    keyCode: 121,
    key: "F10",
    code: "F10",
    notes: "",
  },
  {
    keyName: "f11",
    keyCode: 122,
    key: "F11",
    code: "F11",
    notes: "",
  },
  {
    keyName: "f12",
    keyCode: 123,
    key: "F12",
    code: "F12",
    notes: "",
  },
  {
    keyName: "num lock",
    keyCode: 144,
    key: "NumLock",
    code: "NumLock",
    notes: "",
  },
  {
    keyName: "scroll lock",
    keyCode: 145,
    key: "ScrollLock",
    code: "ScrollLock",
    notes: "",
  },
  {
    keyName: "audio volume mute",
    keyCode: 173,
    key: "AudioVolumeMute",
    code: "",
    notes:
      "⚠️ The <code>event.which</code> value is 181 in Firefox. Also FF provides the code value",
  },
  {
    keyName: "audio volume down",
    keyCode: 174,
    key: "AudioVolumeDown",
    code: "",
    notes:
      "⚠️ The <code>event.which</code> value is 182 in Firefox. Also FF provides the code value",
  },
  {
    keyName: "audio volume up",
    keyCode: 175,
    key: "AudioVolumeUp",
    code: "",
    notes:
      "⚠️ The <code>event.which</code> value is 183 in Firefox. Also FF provides the code value",
  },
  {
    keyName: "media player",
    keyCode: 181,
    key: "LaunchMediaPlayer",
    code: "",
    notes:
      "⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value",
  },
  {
    keyName: "launch application 1",
    keyCode: 182,
    key: "LaunchApplication1",
    code: "",
    notes:
      "⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value",
  },
  {
    keyName: "launch application 2",
    keyCode: 183,
    key: "LaunchApplication2",
    code: "",
    notes:
      "⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value",
  },
  {
    keyName: "semi-colon",
    keyCode: 186,
    key: ";",
    code: "Semicolon",
    notes: "⚠️ The <code>event.which</code> value is 59 in Firefox",
  },
  {
    keyName: "equal sign",
    keyCode: 187,
    key: "=",
    code: "Equal",
    notes: "⚠️ The <code>event.which</code> value is 61 in Firefox",
  },
  {
    keyName: "comma",
    keyCode: 188,
    key: ",",
    code: "Comma",
    notes: "",
  },
  {
    keyName: "dash",
    keyCode: 189,
    key: "–",
    code: "Minus",
    notes: "⚠️ The <code>event.which</code> value is 173 in Firefox",
  },
  {
    keyName: "period",
    keyCode: 190,
    key: ".",
    code: "Period",
    notes: "",
  },
  {
    keyName: "forward slash",
    keyCode: 191,
    key: "/",
    code: "Slash",
    notes: "",
  },
  {
    keyName: "Backquote/Grave accent",
    keyCode: 192,
    key: "`",
    code: "Backquote",
    notes: "",
  },
  {
    keyName: "open bracket",
    keyCode: 219,
    key: "[",
    code: "BracketLeft",
    notes: "",
  },
  {
    keyName: "back slash",
    keyCode: 220,
    key: '"',
    code: "Backslash",
    notes: "",
  },
  {
    keyName: "close bracket",
    keyCode: 221,
    key: "]",
    code: "BracketRight",
    notes: "",
  },
  {
    keyName: "single quote",
    keyCode: 222,
    key: "‘",
    code: "Quote",
    notes: "",
  },
];

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
    id: "delete",
  },
  9: {
    id: "tab",
  },
  // 12: {
  //   'clear',
  //   id: '',
  // },
  13: {
    id: "enter",
  },
  16: {
    id: "shift",
    checkSide: true,
    // DOM_KEY_LOCATION_LEFT
    // DOM_KEY_LOCATION_RIGHT
  },
  17: {
    id: "control",
    checkSide: true,
  },
  18: {
    id: "alt",
    checkSide: true,
  },
  // 19: {
  //   'pause/break',
  //   id: '',
  // },
  20: {
    id: "capsLock",
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
    id: "esc",
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
    id: "space",
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
    id: "arrowLeft",
  },
  38: {
    id: "arrowUp",
  },
  39: {
    id: "arrowRight",
  },
  40: {
    id: "arrowDown",
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
    id: "delete",
  },
  // 47: {
  //   'help',
  //   id: '',
  // },
  48: {
    id: "0",
  },
  49: {
    id: "1",
  },
  50: {
    id: "2",
  },
  51: {
    id: "3",
  },
  52: {
    id: "4",
  },
  53: {
    id: "5",
  },
  54: {
    id: "6",
  },
  55: {
    id: "7",
  },
  56: {
    id: "8",
  },
  57: {
    id: "9",
  },
  58: {
    // ':',
    id: "semicolon",
  },
  59: {
    // 'semicolon (firefox), equals',
    id: "equals",
  },
  60: {
    // '<',
    id: "comma",
  },
  61: {
    // 'equals (firefox)',
    id: "equals",
  },
  // 63: {
  //   'ß',
  //   id: '',
  // },
  64: {
    // '@ (firefox)',
    id: "2",
  },
  65: {
    id: "a",
  },
  66: {
    id: "b",
  },
  67: {
    id: "c",
  },
  68: {
    id: "d",
  },
  69: {
    id: "e",
  },
  70: {
    id: "f",
  },
  71: {
    id: "g",
  },
  72: {
    id: "h",
  },
  73: {
    id: "i",
  },
  74: {
    id: "j",
  },
  75: {
    id: "k",
  },
  76: {
    id: "l",
  },
  77: {
    id: "m",
  },
  78: {
    id: "n",
  },
  79: {
    id: "o",
  },
  80: {
    id: "p",
  },
  81: {
    id: "q",
  },
  82: {
    id: "r",
  },
  83: {
    id: "s",
  },
  84: {
    id: "t",
  },
  85: {
    id: "u",
  },
  86: {
    id: "v",
  },
  87: {
    id: "w",
  },
  88: {
    id: "x",
  },
  89: {
    id: "y",
  },
  90: {
    id: "z",
  },
  91: {
    // 'Windows Key / Left ⌘ / Chromebook Search key',
    id: "cmdLeft",
  },
  92: {
    // 'right window key',
    id: "cmdRight",
  },
  93: {
    // 'Windows Menu / Right ⌘',
    id: "cmdRight",
  },
  // 95: {
  //  '// sleep',
  //   id: '',
  // },
  96: {
    // 'numpad 0',
    id: "0",
  },
  97: {
    // 'numpad 1',
    id: "1",
  },
  98: {
    // 'numpad 2',
    id: "2",
  },
  99: {
    // 'numpad 3',
    id: "3",
  },
  100: {
    // 'numpad 4',
    id: "4",
  },
  101: {
    // 'numpad 5',
    id: "5",
  },
  102: {
    // 'numpad 6',
    id: "6",
  },
  103: {
    // 'numpad 7',
    id: "7",
  },
  104: {
    // 'numpad 8',
    id: "8",
  },
  105: {
    // 'numpad 9',
    id: "9",
  },
  106: {
    // 'multiply',
    id: "8",
  },
  107: {
    // 'add',
    id: "equals",
  },
  108: {
    // 'numpad period (firefox)',
    id: "dot",
  },
  109: {
    // 'subtract',
    id: "minus",
  },
  110: {
    // 'decimal point',
    id: "dot",
  },
  111: {
    // 'divide',
    id: "slash",
  },
  112: {
    id: "f1",
  },
  113: {
    id: "f2",
  },
  114: {
    id: "f3",
  },
  115: {
    id: "f4",
  },
  116: {
    id: "f5",
  },
  117: {
    id: "f6",
  },
  118: {
    id: "f7",
  },
  119: {
    id: "f8",
  },
  120: {
    id: "f9",
  },
  121: {
    id: "f10",
  },
  122: {
    id: "f11",
  },
  123: {
    id: "f12",
  },
  124: {
    id: "f13",
  },
  125: {
    id: "f14",
  },
  126: {
    id: "f15",
  },
  127: {
    id: "f16",
  },
  128: {
    id: "f17",
  },
  129: {
    id: "f18",
  },
  130: {
    id: "f19",
  },
  131: {
    id: "f20",
  },
  132: {
    id: "f21",
  },
  133: {
    id: "f22",
  },
  134: {
    id: "f23",
  },
  135: {
    id: "f24",
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
    id: "6",
  },
  161: {
    // '!',
    id: "1",
  },
  163: {
    // '#',
    id: "3",
  },
  164: {
    // '$',
    id: "4",
  },
  165: {
    // 'ù',
    id: "u",
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
    id: "f5",
  },
  169: {
    // 'closing paren (AZERTY)',
    id: "0",
  },
  170: {
    // '*',
    id: "8",
  },
  171: {
    // '~ + * key',
    id: "tilde",
  },
  // 172: {
  //   'home key',
  //   id: '',
  // },
  173: {
    // 'minus (firefox), mute/unmute',
    id: "minus",
  },
  174: {
    // 'decrease volume level',
    id: "f10",
  },
  175: {
    // 'increase volume level',
    id: "f11",
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
    id: "f8",
  },
  // 180: {
  //   'e-mail',
  //   id: '',
  // },
  181: {
    // 'mute/unmute (firefox)',
    id: "f10",
  },
  182: {
    // 'decrease volume level (firefox)',
    id: "f11",
  },
  183: {
    // 'increase volume level (firefox)',
    id: "f12",
  },
  186: {
    // 'semi-colon / ñ',
    id: "semicolon",
  },
  187: {
    // 'equal sign',
    id: "equals",
  },
  188: {
    // 'comma',
    id: "comma",
  },
  189: {
    // 'dash',
    id: "minus",
  },
  190: {
    // 'period',
    id: "dot",
  },
  191: {
    // 'forward slash / ç',
    id: "slash",
  },
  192: {
    // 'grave accent / ñ / æ / ö',
    id: "tilde",
  },
  193: {
    // '?, / or °',
    id: "slash",
  },
  194: {
    // 'numpad period (chrome)',
    id: "dot",
  },
  219: {
    // 'open bracket',
    id: "squareBracketLeft",
  },
  220: {
    // 'back slash',
    id: "backslash",
  },
  221: {
    // 'close bracket / å',
    id: "squareBracketRight",
  },
  222: {
    // 'single quote / ø / ä',
    id: "apostrophe",
  },
  223: {
    // '`',
    id: "tilde",
  },
  224: {
    // 'left or right ⌘ key (firefox)',
    id: "cmd",
    checkSide: true,
  },
  225: {
    // 'altgr',
    id: "altRight",
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
    id: "c",
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

const newObject = {};

for (let keyCode in keyCodes) {
  let found = false;
  const k = keyCodes[keyCode];

  for (let i = 0; i < keymap.length; i++) {
    const item = keymap[i];
    if (item.keyCode == keyCode) {
      // console.log(k.id, item.code);
      found = true;

      if (!k.id) {
        console.log(k);
      }

      if (k.checkSide) {
        // console.log("------ check side");
        newObject[item.code] = k.id + "Left";
        newObject[item.code.replace("Left", "Right")] = k.id + "Right";
      } else {
        newObject[item.code] = k.id;
      }
      break;
    }
  }

  if (!found) {
    console.log("not found", keyCode, k);
  }
}

console.log(newObject);
