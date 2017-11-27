/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  'use strict';

  // desiredOffset - page offset to scroll to
  // speed - duration of the scroll per 1000px
  function __ANIMATE_SCROLL_TO(desiredOffset) {
    var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (desiredOffset instanceof HTMLElement) {
      if (userOptions.element && userOptions.element instanceof HTMLElement) {
        desiredOffset = (desiredOffset.getBoundingClientRect().top + userOptions.element.scrollTop)
          - userOptions.element.getBoundingClientRect().top;
      } else {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        desiredOffset = scrollTop + desiredOffset.getBoundingClientRect().top;
      }
    }

    var defaultOptions = {
      speed: 500,
      minDuration: 250,
      maxDuration: 1500,
      cancelOnUserAction: true,
      element: window,
      onComplete: undefined,
    };

    var options = {};

    Object.keys(defaultOptions).forEach(function(key) {
      options[key] = userOptions[key] ? userOptions[key] : defaultOptions[key];
    });

    options.isWindow = options.element === window;

    var initialScrollPosition = null;
    var maxScroll = null;

    if (options.isWindow) {
      // get cross browser scroll position
      initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
      // cross browser document height minus window height
      maxScroll = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ) - window.innerHeight;
    } else {
      // DOM element
      initialScrollPosition = options.element.scrollTop;
      maxScroll = options.element.scrollHeight - options.element.clientHeight;
    }

    // If the scroll position is greater than maximum available scroll
    if (desiredOffset > maxScroll) {
      desiredOffset = maxScroll;
    }

    // Calculate diff to scroll
    var diff = desiredOffset - initialScrollPosition;

    // Do nothing if the page is already there
    if (diff === 0) {
      // Execute callback if there is any
      if (options.onComplete && typeof options.onComplete === 'function') {
        options.onComplete()
      }

      return;
    }

    // Calculate duration of the scroll
    var duration = Math.abs(Math.round((diff / 1000) * options.speed));

    // Set minimum and maximum duration
    if (duration < options.minDuration) {
      duration = options.minDuration;
    } else if (duration > options.maxDuration) {
      duration = options.maxDuration;
    }

    var startingTime = Date.now();

    // Request animation frame ID
    var requestID = null;

    // Method handler
    var handleUserEvent = null;

    if (options.cancelOnUserAction) {
      // Set handler to cancel scroll on user action
      handleUserEvent = function() {
        removeListeners();
        cancelAnimationFrame(requestID);
      };
      window.addEventListener('keydown', handleUserEvent);
      window.addEventListener('mousedown', handleUserEvent);
    } else {
      // Set handler to prevent user actions while scroll is active
      handleUserEvent = function(e) { e.preventDefault(); };
      window.addEventListener('scroll', handleUserEvent);
    }

    window.addEventListener('wheel', handleUserEvent);
    window.addEventListener('touchstart', handleUserEvent);

    var removeListeners = function () {
      window.removeEventListener('wheel', handleUserEvent);
      window.removeEventListener('touchstart', handleUserEvent);

      if (options.cancelOnUserAction) {
        window.removeEventListener('keydown', handleUserEvent);
        window.removeEventListener('mousedown', handleUserEvent);
      } else {
        window.removeEventListener('scroll', handleUserEvent);
      }
    };

    var step = function () {
      var timeDiff = Date.now() - startingTime;
      var t = (timeDiff / duration) - 1;
      var easing = t * t * t + 1;
      var scrollPosition = Math.round(initialScrollPosition + (diff * easing));

      if (timeDiff < duration && scrollPosition !== desiredOffset) {
        // If scroll didn't reach desired offset or time is not elapsed
        // Scroll to a new position
        // And request a new step

        if (options.isWindow) {
          options.element.scrollTo(0, scrollPosition);
        } else {
          options.element.scrollTop = scrollPosition;
        }

        requestID = requestAnimationFrame(step);
      } else {
        // If the time elapsed or we reached the desired offset
        // Set scroll to the desired offset (when rounding made it to be off a pixel or two)
        // Clear animation frame to be sure
        if (options.isWindow) {
          options.element.scrollTo(0, desiredOffset);
        } else {
          options.element.scrollTop = desiredOffset;
        }
        cancelAnimationFrame(requestID);

        // Remove listeners
        removeListeners();

        // Animation is complete, execute callback if there is any
        if (options.onComplete && typeof options.onComplete === 'function') {
          options.onComplete()
        }
      }
    };

    // Start animating scroll
    requestID = requestAnimationFrame(step);
  }

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = __ANIMATE_SCROLL_TO;
      exports = module.exports;
    }
    exports.default = __ANIMATE_SCROLL_TO;
  } else if (window) {
    window.animateScrollTo = __ANIMATE_SCROLL_TO;
  }
}).call(this);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var commentForm = document.querySelector('.CommentForm');
var commentFormInputs = document.querySelectorAll('.CommentForm-input');
var slugInput = document.querySelector('.CommentForm-input--slug');
var optionsSlugInput = document.querySelector('.CommentForm-input--optionsSlug');
var nameInput = document.querySelector('.CommentForm-input--name');
var catchInput = document.querySelector('.CommentForm-input--catch');
var emailInput = document.querySelector('.CommentForm-input--email');
var messageInput = document.querySelector('.CommentForm-input--message');
var errorMessagesDiv = document.querySelector('.CommentForm-errorMessages');
var sendFailedDiv = document.querySelector('.CommentForm-sendFailed');
var sendSucceededDiv = document.querySelector('.CommentForm-sendSucceeded');
var overlayDiv = document.querySelector('.CommentForm-overlay');

function post(url, data, callback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.status !== 200) {
      errorCallback(xhr.responseText);
    }
  };
  xhr.send(encodeURI(data));
}

if (commentForm) {
  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMessagesDiv.innerHTML = '';
    sendFailedDiv.style.display = 'none';
    sendSucceededDiv.style.display = 'none';

    var slug = slugInput.value.trim();
    var optionsSlug = optionsSlugInput.value.trim();
    var name = nameInput.value.trim();
    var catchValue = catchInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    var error = false;
    var fatalError = false;
    var messages = [];

    if (slug === '' || slug !== optionsSlug || catchValue !== '') {
      fatalError = true;
    }

    if (name.length < 2) {
      error = true;
      messages.push('Please enter name');
    }

    if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
      error = true;
      messages.push('Please enter valid email');
    }

    if (message.length < 2) {
      error = true;
      messages.push('Please enter message');
    }

    if (fatalError) {
      return false;
    }

    if (error) {
      errorMessagesDiv.innerHTML = messages.join('<br>');
      return false;
    }

    var params = [];

    for (var i = 0; i < commentFormInputs.length; i++) {
      var input = commentFormInputs[i];
      params.push(input.name + '=' + input.value);
    }

    overlayDiv.style.display = 'flex';

    post(e.target.getAttribute('data-action'), params.join('&'), function (text) {
      commentForm.reset();
      sendSucceededDiv.style.display = 'block';
      overlayDiv.style.display = 'none';
    }, function (text) {
      sendFailedDiv.style.display = 'block';
      overlayDiv.style.display = 'none';
    });
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/mattyork/fuzzy/tree/master/lib

/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */

(function () {

  var root = this;

  var fuzzy = {};

  window.fuzzy = fuzzy;

  // prefix & suffix for score calculation
  // need this in order to split matching & scoring in two phases
  var PREFIX = '<strong>';
  var SUFFIX = '</strong>';

  var calculateScore = function calculateScore(string) {
    return string.split(PREFIX).length - 1 + (string.split(SUFFIX + PREFIX).length - 1) * 10;
  };

  var recursiveMatch = function recursiveMatch(pattern, string, compareString) {
    if (pattern.length === 0 || string.length === 0 || pattern.length > string.length) {
      return [string];
    }

    var result = [];

    for (var idx = 0; idx < string.length; idx++) {
      if (pattern[0] === compareString[idx]) {
        var ch = PREFIX + string[idx] + SUFFIX;

        var arr = recursiveMatch(pattern.slice(1), string.slice(idx + 1), compareString.slice(idx + 1));

        arr = arr.map(function (str) {
          return string.slice(0, idx) + ch + str;
        });

        result[result.length] = arr;
      }
    }

    return [].concat.apply([], result); // flatten
  };

  // Return all elements of `array` that have a fuzzy
  // match against `pattern`.
  fuzzy.simpleFilter = function (pattern, array) {
    return array.filter(function (string) {
      return fuzzy.test(pattern, string);
    });
  };

  // Does `pattern` fuzzy match `string`?
  fuzzy.test = function (pattern, string) {
    return fuzzy.match(pattern, string) !== null;
  };

  fuzzy.match = function (pattern, string, opts) {
    opts = opts || {};

    /**
      pre - prefix
      post - suffix
      compareString - String to compare against. This might be a
        lowercase version of the raw string
    **/
    var pre = opts.pre || '<strong>',
        post = opts.post || '</strong>',
        compareString = opts.caseSensitive && string || string.toLowerCase();

    pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

    var result = recursiveMatch(pattern, string, compareString).filter(function (el) {
      return el.split(PREFIX).length - 1 === pattern.length;
    });

    if (result.length === 0) {
      return null;
    }

    return result.map(function (el) {
      return {
        rendered: el.split(PREFIX).join(pre).split(SUFFIX).join(post),
        score: calculateScore(el)
      };
    }).reduce(function (prev, next) {
      return prev.score > next.score ? prev : next;
    });
  };

  // The normal entry point. Filters `arr` for matches against `pattern`.
  // It returns an array with matching values of the type:
  //
  //     [{
  //         string:   '<b>lah' // The rendered string
  //       , index:    2        // The index of the element in `arr`
  //       , original: 'blah'   // The original element in `arr`
  //     }]
  //
  // `opts` is an optional argument bag. Details:
  //
  //    opts = {
  //        // string to put before a matching character
  //        pre:     '<b>'
  //
  //        // string to put after matching character
  //      , post:    '</b>'
  //
  //        // Optional function. Input is an entry in the given arr`,
  //        // output should be the string to test `pattern` against.
  //        // In this example, if `arr = [{crying: 'koala'}]` we would return
  //        // 'koala'.
  //      , extract: function(arg) { return arg.crying; }
  //    }
  fuzzy.filter = function (pattern, arr, opts) {
    if (!arr || arr.length === 0) {
      return [];
    }
    if (typeof pattern !== 'string') {
      return arr;
    }
    opts = opts || {};
    return arr.reduce(function (prev, element, idx, arr) {
      var str = element;
      if (opts.extract) {
        str = opts.extract(element);
      }
      var rendered = fuzzy.match(pattern, str, opts);
      if (rendered != null) {
        prev[prev.length] = {
          string: rendered.rendered,
          score: rendered.score,
          index: idx,
          original: element
        };
      }
      return prev;
    }, [])

    // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function (a, b) {
      var compare = b.score - a.score;
      if (compare) return compare;
      return a.index - b.index;
    });
  };
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animatedScrollTo = __webpack_require__(0);

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jumpToContent = document.querySelector('.Header-jumpToContent');
var jumpToTop = document.querySelector('.Footer-jumpToTop');

jumpToContent && jumpToContent.addEventListener('click', function (e) {
  (0, _animatedScrollTo2.default)(document.querySelector('.Header').offsetHeight, { maxDuration: 500 });
});

jumpToTop && jumpToTop.addEventListener('click', function (e) {
  (0, _animatedScrollTo2.default)(0, { maxDuration: 500 });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keyCodes = {
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
    className: 'delete'
  },
  9: {
    className: 'tab'
  },
  // 12: {
  //   // 'clear',
  //   className: '',
  // },
  13: {
    className: 'enter'
  },
  16: {
    className: 'shift',
    checkSide: true
    // DOM_KEY_LOCATION_LEFT
    // DOM_KEY_LOCATION_RIGHT
  },
  17: {
    className: 'control',
    checkSide: true
  },
  18: {
    className: 'alt',
    checkSide: true
  },
  // 19: {
  //   // 'pause/break',
  //   className: '',
  // },
  20: {
    className: 'capsLock'
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
    className: 'esc'
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
    className: 'space'
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
    className: 'arrowLeft'
  },
  38: {
    className: 'arrowUp'
  },
  39: {
    className: 'arrowRight'
  },
  40: {
    className: 'arrowDown'
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
    className: 'delete'
  },
  // 47: {
  //   // 'help',
  //   className: '',
  // },
  48: {
    className: '0'
  },
  49: {
    className: '1'
  },
  50: {
    className: '2'
  },
  51: {
    className: '3'
  },
  52: {
    className: '4'
  },
  53: {
    className: '5'
  },
  54: {
    className: '6'
  },
  55: {
    className: '7'
  },
  56: {
    className: '8'
  },
  57: {
    className: '9'
  },
  58: {
    // ':',
    className: 'semicolon'
  },
  59: {
    // 'semicolon (firefox), equals',
    className: 'equals'
  },
  60: {
    // '<',
    className: 'comma'
  },
  61: {
    // 'equals (firefox)',
    className: 'equals'
  },
  // 63: {
  //   // 'ß',
  //   className: '',
  // },
  64: {
    // '@ (firefox)',
    className: '2'
  },
  65: {
    className: 'a'
  },
  66: {
    className: 'b'
  },
  67: {
    className: 'c'
  },
  68: {
    className: 'd'
  },
  69: {
    className: 'e'
  },
  70: {
    className: 'f'
  },
  71: {
    className: 'g'
  },
  72: {
    className: 'h'
  },
  73: {
    className: 'i'
  },
  74: {
    className: 'j'
  },
  75: {
    className: 'k'
  },
  76: {
    className: 'l'
  },
  77: {
    className: 'm'
  },
  78: {
    className: 'n'
  },
  79: {
    className: 'o'
  },
  80: {
    className: 'p'
  },
  81: {
    className: 'q'
  },
  82: {
    className: 'r'
  },
  83: {
    className: 's'
  },
  84: {
    className: 't'
  },
  85: {
    className: 'u'
  },
  86: {
    className: 'v'
  },
  87: {
    className: 'w'
  },
  88: {
    className: 'x'
  },
  89: {
    className: 'y'
  },
  90: {
    className: 'z'
  },
  91: {
    // 'Windows Key / Left ⌘ / Chromebook Search key',
    className: 'cmdLeft'
  },
  92: {
    // 'right window key',
    className: 'cmdRight'
  },
  93: {
    // 'Windows Menu / Right ⌘',
    className: 'cmdRight'
  },
  // 95: {
  //  '// sleep',
  //   className: '',
  // },
  96: {
    // 'numpad 0',
    className: '0'
  },
  97: {
    // 'numpad 1',
    className: '1'
  },
  98: {
    // 'numpad 2',
    className: '2'
  },
  99: {
    // 'numpad 3',
    className: '3'
  },
  100: {
    // 'numpad 4',
    className: '4'
  },
  101: {
    // 'numpad 5',
    className: '5'
  },
  102: {
    // 'numpad 6',
    className: '6'
  },
  103: {
    // 'numpad 7',
    className: '7'
  },
  104: {
    // 'numpad 8',
    className: '8'
  },
  105: {
    // 'numpad 9',
    className: '9'
  },
  106: {
    // 'multiply',
    className: '8'
  },
  107: {
    // 'add',
    className: 'equals'
  },
  108: {
    // 'numpad period (firefox)',
    className: 'dot'
  },
  109: {
    // 'subtract',
    className: 'minus'
  },
  110: {
    // 'decimal point',
    className: 'dot'
  },
  111: {
    // 'divide',
    className: 'slash'
  },
  112: {
    className: 'f1'
  },
  113: {
    className: 'f2'
  },
  114: {
    className: 'f3'
  },
  115: {
    className: 'f4'
  },
  116: {
    className: 'f5'
  },
  117: {
    className: 'f6'
  },
  118: {
    className: 'f7'
  },
  119: {
    className: 'f8'
  },
  120: {
    className: 'f9'
  },
  121: {
    className: 'f10'
  },
  122: {
    className: 'f11'
  },
  123: {
    className: 'f12'
  },
  124: {
    className: 'f13'
  },
  125: {
    className: 'f14'
  },
  126: {
    className: 'f15'
  },
  127: {
    className: 'f16'
  },
  128: {
    className: 'f17'
  },
  129: {
    className: 'f18'
  },
  130: {
    className: 'f19'
  },
  131: {
    className: 'f20'
  },
  132: {
    className: 'f21'
  },
  133: {
    className: 'f22'
  },
  134: {
    className: 'f23'
  },
  135: {
    className: 'f24'
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
    className: '6'
  },
  161: {
    // '!',
    className: '1'
  },
  163: {
    // '#',
    className: '3'
  },
  164: {
    // '$',
    className: '4'
  },
  165: {
    // 'ù',
    className: 'u'
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
    className: 'f5'
  },
  169: {
    // 'closing paren (AZERTY)',
    className: '0'
  },
  170: {
    // '*',
    className: '8'
  },
  171: {
    // '~ + * key',
    className: 'tilde'
  },
  // 172: {
  //   // 'home key',
  //   className: '',
  // },
  173: {
    // 'minus (firefox), mute/unmute',
    className: 'minus'
  },
  174: {
    // 'decrease volume level',
    className: 'f10'
  },
  175: {
    // 'increase volume level',
    className: 'f11'
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
    className: 'f8'
  },
  // 180: {
  //   // 'e-mail',
  //   className: '',
  // },
  181: {
    // 'mute/unmute (firefox)',
    className: 'f10'
  },
  182: {
    // 'decrease volume level (firefox)',
    className: 'f11'
  },
  183: {
    // 'increase volume level (firefox)',
    className: 'f12'
  },
  186: {
    // 'semi-colon / ñ',
    className: 'semicolon'
  },
  187: {
    // 'equal sign',
    className: 'equals'
  },
  188: {
    // 'comma',
    className: 'comma'
  },
  189: {
    // 'dash',
    className: 'minus'
  },
  190: {
    // 'period',
    className: 'dot'
  },
  191: {
    // 'forward slash / ç',
    className: 'slash'
  },
  192: {
    // 'grave accent / ñ / æ / ö',
    className: 'tilde'
  },
  193: {
    // '?, / or °',
    className: 'slash'
  },
  194: {
    // 'numpad period (chrome)',
    className: 'dot'
  },
  219: {
    // 'open bracket',
    className: 'squareBracketLeft'
  },
  220: {
    // 'back slash',
    className: 'backslash'
  },
  221: {
    // 'close bracket / å',
    className: 'squareBracketRight'
  },
  222: {
    // 'single quote / ø / ä',
    className: 'apostrophe'
  },
  223: {
    // '`',
    className: 'tilde'
  },
  224: {
    // 'left or right ⌘ key (firefox)',
    className: 'cmd',
    checkSide: true
  },
  225: {
    // 'altgr',
    className: 'altRight'
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
    className: 'c'
  }
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
  var key = keyCodes[e.keyCode];

  if (key && key.className) {
    var keySelector = '#Key--' + key.className;

    if (key.checkSide && KeyboardEvent) {
      if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        keySelector += 'Left';
      } else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        keySelector += 'Right';
      }
    }

    var keyElement = document.querySelector(keySelector);

    return keyElement;
  }
}

document.addEventListener('keydown', function (e) {
  var keyElement = getKeyElement(e);

  if (keyElement) {
    keyElement.setAttribute('class', 'Key Key--active');
  }
});

document.addEventListener('keyup', function (e) {
  var keyElement = getKeyElement(e);

  if (keyElement) {
    keyElement.setAttribute('class', 'Key');
  }
});

function removeActiveKeyClass() {
  var keyElements = document.querySelectorAll('.Key--active');

  for (var i = 0; i < keyElements.length; i++) {
    keyElements[i].setAttribute('class', 'Key');
  }
}

window.addEventListener('blur', removeActiveKeyClass);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animatedScrollTo = __webpack_require__(0);

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentsLink = document.querySelector('.Post-commentsLink');
var postBgArchive = document.querySelector('.Post-bg--archive');
var expandToggles = document.querySelectorAll('.Expandable-toggle');
var sideNoteTriggers = document.querySelectorAll('.SideNote-trigger');

commentsLink && commentsLink.addEventListener('click', function (e) {
  e.preventDefault();
  (0, _animatedScrollTo2.default)(document.querySelector('#comments'), { maxDuration: 500 });
});

if (postBgArchive) {
  var id = Math.floor(Math.random() * (2 - 0)) + 0;
  var src = postBgArchive.getAttribute('data-src').replace('ID', id);
  postBgArchive.setAttribute('src', src);
}

for (var i = 0; i < expandToggles.length; ++i) {
  var expandToggle = expandToggles[i];

  expandToggle.addEventListener('click', function (e) {
    var button = e.currentTarget;
    var expendableStyle = button.parentElement.nextElementSibling.style;

    if (expendableStyle.display === 'none' || expendableStyle.display === '') {
      button.classList.add('Expandable-toggle--open');
      expendableStyle.display = 'block';
    } else {
      button.classList.remove('Expandable-toggle--open');
      expendableStyle.display = 'none';
    }
  });
}

for (var _i = 0; _i < sideNoteTriggers.length; ++_i) {
  var sideNoteTrigger = sideNoteTriggers[_i];

  sideNoteTrigger.addEventListener('click', function (e) {
    var button = e.currentTarget;
    var OPEN_CLASSNAME = 'SideNote-toggle--open';

    if (button.className.search(OPEN_CLASSNAME) === -1) {
      button.classList.add(OPEN_CLASSNAME);
    } else {
      button.classList.remove(OPEN_CLASSNAME);
    }
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var options = {
  extract: function extract(el) {
    return el.title;
  }
};

var menu = document.querySelector('.MenuModal');
var searchInput = document.querySelector('.MenuModal-input');
var modalMenu = document.querySelector('.MenuModal-menu');
var menuToggles = document.querySelectorAll('.MenuModal-toggle');
var searchResults = document.querySelector('.MenuModal-results');
var html = document.querySelector('html');

var prevSearch = '';
var timeout = null;

var MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return '<a href=\'' + url + '\' class=\'MenuModal-result\'><div class=\'Container\'>' + title + '</div></a>';
}

var ANIMATION_DURATION = 500;
var scrollPosition = 0;

for (var i = 0; i < menuToggles.length; i++) {
  var element = menuToggles[i];
  element.addEventListener('click', function () {
    clearTimeout(timeout);

    if (menu.style.display === 'none' || !menu.style.display) {
      menu.style.display = 'block';
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      timeout = setTimeout(function () {
        html.classList.toggle('Html--menuActive');
        searchInput.focus();

        timeout = setTimeout(function () {
          html.classList.toggle('Html--overflowHidden');
        }, ANIMATION_DURATION);
      }, 30);
    } else {
      html.classList.remove('Html--menuActive');
      html.classList.remove('Html--overflowHidden');

      window.scrollTo(0, scrollPosition);

      timeout = setTimeout(function () {
        menu.style.display = 'none';
      }, ANIMATION_DURATION);
    }
  });
}

var keyCodes = {
  UP: 38,
  DOWN: 40
};

searchInput.addEventListener('keydown', function (e) {
  var linkToFocus = null;

  if (e.keyCode === keyCodes.DOWN) {
    linkToFocus = searchResults.querySelector('a:first-child');
  } else if (e.keyCode === keyCodes.UP) {
    linkToFocus = searchResults.querySelector('a:last-child');
  }

  if (linkToFocus) {
    e.preventDefault();
    linkToFocus.focus();
  }
});

searchInput.addEventListener('keyup', function (e) {
  var newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

  modalMenu.style.display = newSearch.length > 0 ? 'none' : '';

  if (newSearch.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    prevSearch = '';
    return;
  }

  var results = fuzzy.filter(newSearch, posts, options);

  if (results.length) {
    (function () {
      var html = results.map(function (result) {
        return renderResult(result.string, result.original.url);
      }).join('');
      searchResults.innerHTML = html;
      var resultLinks = document.querySelectorAll('.MenuModal-result');

      var _loop = function _loop(_i) {
        var resultLink = resultLinks[_i];
        console.log(resultLink);

        resultLink.addEventListener('keydown', function (e) {
          var linkToFocus = null;

          if (e.keyCode === keyCodes.DOWN) {
            linkToFocus = resultLinks[_i + 1];
          } else if (e.keyCode === keyCodes.UP) {
            linkToFocus = resultLinks[_i - 1];
          }

          if (linkToFocus) {
            e.preventDefault();
            linkToFocus.focus();
          }
        });
      };

      for (var _i = 0; _i < resultLinks.length; _i++) {
        _loop(_i);
      }
    })();
  } else {
    searchResults.innerHTML = '<div class="Menu-noResults">No results</div>';
  }

  prevSearch = newSearch;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animatedScrollTo = __webpack_require__(0);

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkHash() {
  var hash = window.location.hash.replace('#/', '');

  if (hash) {
    var posts = document.querySelector('#posts-' + hash);
    var section = document.querySelector('#section-' + hash);

    if (posts) {
      posts.style.height = 'auto';
      (0, _animatedScrollTo2.default)(section);
    }
  }

  window.location.hash = '';
}

// window.addEventListener('hashchange', function(e) {
//   checkHash();
// });

checkHash();

function toggleSection(posts, postsContent) {
  var isOpen = posts.getAttribute('open') === '1';
  var isAnimating = posts.getAttribute('animating') === '1';

  if (isAnimating) {
    return;
  }

  posts.style.height = postsContent.offsetHeight + 'px';
  posts.setAttribute('animating', 1);

  if (isOpen) {
    setTimeout(function () {
      posts.style.height = 0;

      setTimeout(function () {
        posts.setAttribute('animating', 0);
      }, ANIMATION_DURATION);
    }, 30);
    posts.setAttribute('open', 0);
  } else {
    posts.setAttribute('open', 1);

    setTimeout(function () {
      posts.style.height = 'auto';
      posts.setAttribute('animating', 0);
    }, ANIMATION_DURATION);
  }
}

var ANIMATION_DURATION = 500;
var archiveToggles = document.querySelectorAll('.Archive-title a');

for (var i = 0; i < archiveToggles.length; i++) {
  var toggle = archiveToggles[i];

  toggle.addEventListener('click', function (e) {
    e.preventDefault();

    var link = e.currentTarget;
    var posts = link.parentElement.nextElementSibling;
    var postsContent = posts.querySelector('.Archive-postsContent');

    toggleSection(posts, postsContent);
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);