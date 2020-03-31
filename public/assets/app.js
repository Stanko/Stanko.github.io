// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"comments.js":[function(require,module,exports) {
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
      params.push("".concat(input.name, "=").concat(input.value));
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
},{}],"fuzzy.js":[function(require,module,exports) {
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
  window.fuzzy = fuzzy; // prefix & suffix for score calculation
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
  }; // Return all elements of `array` that have a fuzzy
  // match against `pattern`.


  fuzzy.simpleFilter = function (pattern, array) {
    return array.filter(function (string) {
      return fuzzy.test(pattern, string);
    });
  }; // Does `pattern` fuzzy match `string`?


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
  }; // The normal entry point. Filters `arr` for matches against `pattern`.
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
    }, []) // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function (a, b) {
      var compare = b.score - a.score;
      if (compare) return compare;
      return a.index - b.index;
    });
  };
})();
},{}],"../node_modules/animated-scroll-to/lib/animated-scroll-to.js":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // --------- SCROLL INTERFACES
// ScrollDomElement and ScrollWindow have identical interfaces

var ScrollDomElement =
/** @class */
function () {
  function ScrollDomElement(element) {
    this.element = element;
  }

  ScrollDomElement.prototype.getHorizontalScroll = function () {
    return this.element.scrollLeft;
  };

  ScrollDomElement.prototype.getVerticalScroll = function () {
    return this.element.scrollTop;
  };

  ScrollDomElement.prototype.getMaxHorizontalScroll = function () {
    return this.element.scrollWidth - this.element.clientWidth;
  };

  ScrollDomElement.prototype.getMaxVerticalScroll = function () {
    return this.element.scrollHeight - this.element.clientHeight;
  };

  ScrollDomElement.prototype.getHorizontalElementScrollOffset = function (elementToScrollTo) {
    return elementToScrollTo.getBoundingClientRect().left + this.element.scrollLeft - this.element.getBoundingClientRect().left;
  };

  ScrollDomElement.prototype.getVerticalElementScrollOffset = function (elementToScrollTo) {
    return elementToScrollTo.getBoundingClientRect().top + this.element.scrollTop - this.element.getBoundingClientRect().top;
  };

  ScrollDomElement.prototype.scrollTo = function (x, y) {
    this.element.scrollLeft = x;
    this.element.scrollTop = y;
  };

  return ScrollDomElement;
}();

var ScrollWindow =
/** @class */
function () {
  function ScrollWindow() {}

  ScrollWindow.prototype.getHorizontalScroll = function () {
    return window.scrollX || document.documentElement.scrollLeft;
  };

  ScrollWindow.prototype.getVerticalScroll = function () {
    return window.scrollY || document.documentElement.scrollTop;
  };

  ScrollWindow.prototype.getMaxHorizontalScroll = function () {
    return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth;
  };

  ScrollWindow.prototype.getMaxVerticalScroll = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;
  };

  ScrollWindow.prototype.getHorizontalElementScrollOffset = function (elementToScrollTo) {
    var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    return scrollLeft + elementToScrollTo.getBoundingClientRect().left;
  };

  ScrollWindow.prototype.getVerticalElementScrollOffset = function (elementToScrollTo) {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    return scrollTop + elementToScrollTo.getBoundingClientRect().top;
  };

  ScrollWindow.prototype.scrollTo = function (x, y) {
    window.scrollTo(x, y);
  };

  return ScrollWindow;
}(); // --------- KEEPING TRACK OF ACTIVE ANIMATIONS


var activeAnimations = {
  elements: [],
  cancelMethods: [],
  add: function (element, cancelAnimation) {
    activeAnimations.elements.push(element);
    activeAnimations.cancelMethods.push(cancelAnimation);
  },
  stop: function (element) {
    var index = activeAnimations.elements.indexOf(element);

    if (index > -1) {
      // Stop animation
      activeAnimations.cancelMethods[index](); // Remove it

      activeAnimations.elements.splice(index, 1);
      activeAnimations.cancelMethods.splice(index, 1);
    }
  }
}; // --------- CHECK IF CODE IS RUNNING IN A BROWSER

var WINDOW_EXISTS = typeof window !== 'undefined'; // --------- ANIMATE SCROLL TO

var defaultOptions = {
  cancelOnUserAction: true,
  easing: function (t) {
    return --t * t * t + 1;
  },
  elementToScroll: WINDOW_EXISTS ? window : null,
  horizontalOffset: 0,
  maxDuration: 3000,
  minDuration: 250,
  speed: 500,
  verticalOffset: 0
};

function animateScrollTo(numberOrCoordsOrElement, userOptions) {
  if (userOptions === void 0) {
    userOptions = {};
  } // Check for server rendering


  if (!WINDOW_EXISTS) {
    // @ts-ignore
    // If it still gets called on server, return Promise for API consistency
    return new Promise(function (resolve) {
      resolve(false); // Returning false on server
    });
  } else if (!window.Promise) {
    throw 'Browser doesn\'t support Promises, and animated-scroll-to depends on it, please provide a polyfill.';
  }

  var x;
  var y;
  var scrollToElement;

  var options = __assign(__assign({}, defaultOptions), userOptions);

  var isWindow = options.elementToScroll === window;
  var isElement = !!options.elementToScroll.nodeName;

  if (!isWindow && !isElement) {
    throw 'Element to scroll needs to be either window or DOM element.';
  }

  var elementToScroll = isWindow ? new ScrollWindow() : new ScrollDomElement(options.elementToScroll);

  if (numberOrCoordsOrElement instanceof Element) {
    scrollToElement = numberOrCoordsOrElement;
    x = elementToScroll.getHorizontalElementScrollOffset(scrollToElement);
    y = elementToScroll.getVerticalElementScrollOffset(scrollToElement);
  } else if (typeof numberOrCoordsOrElement === 'number') {
    x = elementToScroll.getHorizontalScroll();
    y = numberOrCoordsOrElement;
  } else if (Array.isArray(numberOrCoordsOrElement) && numberOrCoordsOrElement.length === 2) {
    x = numberOrCoordsOrElement[0] === null ? elementToScroll.getHorizontalScroll() : numberOrCoordsOrElement[0];
    y = numberOrCoordsOrElement[1] === null ? elementToScroll.getVerticalScroll() : numberOrCoordsOrElement[1];
  } else {
    // ERROR
    throw 'Wrong function signature. Check documentation.\n' + 'Available method signatures are:\n' + '  animateScrollTo(y:number, options)\n' + '  animateScrollTo([x:number | null, y:number | null], options)\n' + '  animateScrollTo(scrollToElement:Element, options)';
  } // Add offsets


  x += options.horizontalOffset;
  y += options.verticalOffset; // Horizontal scroll distance

  var maxHorizontalScroll = elementToScroll.getMaxHorizontalScroll();
  var initialHorizontalScroll = elementToScroll.getHorizontalScroll(); // If user specified scroll position is greater than maximum available scroll

  if (x > maxHorizontalScroll) {
    x = maxHorizontalScroll;
  } // Calculate distance to scroll


  var horizontalDistanceToScroll = x - initialHorizontalScroll; // Vertical scroll distance distance

  var maxVerticalScroll = elementToScroll.getMaxVerticalScroll();
  var initialVerticalScroll = elementToScroll.getVerticalScroll(); // If user specified scroll position is greater than maximum available scroll

  if (y > maxVerticalScroll) {
    y = maxVerticalScroll;
  } // Calculate distance to scroll


  var verticalDistanceToScroll = y - initialVerticalScroll; // Calculate duration of the scroll

  var horizontalDuration = Math.abs(Math.round(horizontalDistanceToScroll / 1000 * options.speed));
  var verticalDuration = Math.abs(Math.round(verticalDistanceToScroll / 1000 * options.speed));
  var duration = horizontalDuration > verticalDuration ? horizontalDuration : verticalDuration; // Set minimum and maximum duration

  if (duration < options.minDuration) {
    duration = options.minDuration;
  } else if (duration > options.maxDuration) {
    duration = options.maxDuration;
  } // @ts-ignore


  return new Promise(function (resolve, reject) {
    // Scroll is already in place, nothing to do
    if (horizontalDistanceToScroll === 0 && verticalDistanceToScroll === 0) {
      // Resolve promise with a boolean hasScrolledToPosition set to true
      resolve(true);
    } // Cancel existing animation if it is already running on the same element


    activeAnimations.stop(options.elementToScroll); // To cancel animation we have to store request animation frame ID 

    var requestID; // Cancel animation handler

    var cancelAnimation = function () {
      removeListeners();
      cancelAnimationFrame(requestID); // Resolve promise with a boolean hasScrolledToPosition set to false

      resolve(false);
    }; // Registering animation so it can be canceled if function
    // gets called again on the same element


    activeAnimations.add(options.elementToScroll, cancelAnimation); // Prevent user actions handler

    var preventDefaultHandler = function (e) {
      return e.preventDefault();
    };

    var handler = options.cancelOnUserAction ? cancelAnimation : preventDefaultHandler; // If animation is not cancelable by the user, we can't use passive events

    var eventOptions = options.cancelOnUserAction ? {
      passive: true
    } : {
      passive: false
    };
    var events = ['wheel', 'touchstart', 'keydown', 'mousedown']; // Function to remove listeners after animation is finished

    var removeListeners = function () {
      events.forEach(function (eventName) {
        options.elementToScroll.removeEventListener(eventName, handler);
      });
    }; // Add listeners


    events.forEach(function (eventName) {
      options.elementToScroll.addEventListener(eventName, handler, eventOptions);
    }); // Animation

    var startingTime = Date.now();

    var step = function () {
      var timeDiff = Date.now() - startingTime;
      var t = timeDiff / duration;
      var horizontalScrollPosition = Math.round(initialHorizontalScroll + horizontalDistanceToScroll * options.easing(t));
      var verticalScrollPosition = Math.round(initialVerticalScroll + verticalDistanceToScroll * options.easing(t));

      if (timeDiff < duration && (horizontalScrollPosition !== x || verticalScrollPosition !== y)) {
        // If scroll didn't reach desired position or time is not elapsed
        // Scroll to a new position
        elementToScroll.scrollTo(horizontalScrollPosition, verticalScrollPosition); // And request a new step

        requestID = requestAnimationFrame(step);
      } else {
        // If the time elapsed or we reached the desired offset
        // Set scroll to the desired offset (when rounding made it to be off a pixel or two)
        // Clear animation frame to be sure
        elementToScroll.scrollTo(x, y);
        cancelAnimationFrame(requestID); // Remove listeners

        removeListeners(); // Resolve promise with a boolean hasScrolledToPosition set to true

        resolve(true);
      }
    }; // Start animating scroll


    requestID = requestAnimationFrame(step);
  });
}

exports.default = animateScrollTo; // Support for direct usage in browsers
// This is mostly to keep it similar to v1
// Don't forget to include Promise polyfill for IE
// <script src="https://unpkg.com/es6-promise/dist/es6-promise.auto.min.js"></script>
// https://github.com/stefanpenner/es6-promise

if (WINDOW_EXISTS) {
  window.animateScrollTo = animateScrollTo;
}
},{}],"jump.js":[function(require,module,exports) {
"use strict";

var _animatedScrollTo = _interopRequireDefault(require("animated-scroll-to"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jumpToContent = document.querySelector('.Header-jumpToContent');
var jumpToTop = document.querySelector('.Footer-jumpToTop');
jumpToContent && jumpToContent.addEventListener('click', function (e) {
  (0, _animatedScrollTo.default)(document.querySelector('.Header').offsetHeight, {
    maxDuration: 500
  });
});
jumpToTop && jumpToTop.addEventListener('click', function (e) {
  (0, _animatedScrollTo.default)(0, {
    maxDuration: 500
  });
});
},{"animated-scroll-to":"../node_modules/animated-scroll-to/lib/animated-scroll-to.js"}],"keyboard.js":[function(require,module,exports) {
var keyCodes = {
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
    id: 'delete'
  },
  9: {
    id: 'tab'
  },
  // 12: {
  //   'clear',
  //   id: '',
  // },
  13: {
    id: 'enter'
  },
  16: {
    id: 'shift',
    checkSide: true // DOM_KEY_LOCATION_LEFT
    // DOM_KEY_LOCATION_RIGHT

  },
  17: {
    id: 'control',
    checkSide: true
  },
  18: {
    id: 'alt',
    checkSide: true
  },
  // 19: {
  //   'pause/break',
  //   id: '',
  // },
  20: {
    id: 'capsLock'
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
    id: 'esc'
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
    id: 'space'
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
    id: 'arrowLeft'
  },
  38: {
    id: 'arrowUp'
  },
  39: {
    id: 'arrowRight'
  },
  40: {
    id: 'arrowDown'
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
    id: 'delete'
  },
  // 47: {
  //   'help',
  //   id: '',
  // },
  48: {
    id: '0'
  },
  49: {
    id: '1'
  },
  50: {
    id: '2'
  },
  51: {
    id: '3'
  },
  52: {
    id: '4'
  },
  53: {
    id: '5'
  },
  54: {
    id: '6'
  },
  55: {
    id: '7'
  },
  56: {
    id: '8'
  },
  57: {
    id: '9'
  },
  58: {
    // ':',
    id: 'semicolon'
  },
  59: {
    // 'semicolon (firefox), equals',
    id: 'equals'
  },
  60: {
    // '<',
    id: 'comma'
  },
  61: {
    // 'equals (firefox)',
    id: 'equals'
  },
  // 63: {
  //   'ß',
  //   id: '',
  // },
  64: {
    // '@ (firefox)',
    id: '2'
  },
  65: {
    id: 'a'
  },
  66: {
    id: 'b'
  },
  67: {
    id: 'c'
  },
  68: {
    id: 'd'
  },
  69: {
    id: 'e'
  },
  70: {
    id: 'f'
  },
  71: {
    id: 'g'
  },
  72: {
    id: 'h'
  },
  73: {
    id: 'i'
  },
  74: {
    id: 'j'
  },
  75: {
    id: 'k'
  },
  76: {
    id: 'l'
  },
  77: {
    id: 'm'
  },
  78: {
    id: 'n'
  },
  79: {
    id: 'o'
  },
  80: {
    id: 'p'
  },
  81: {
    id: 'q'
  },
  82: {
    id: 'r'
  },
  83: {
    id: 's'
  },
  84: {
    id: 't'
  },
  85: {
    id: 'u'
  },
  86: {
    id: 'v'
  },
  87: {
    id: 'w'
  },
  88: {
    id: 'x'
  },
  89: {
    id: 'y'
  },
  90: {
    id: 'z'
  },
  91: {
    // 'Windows Key / Left ⌘ / Chromebook Search key',
    id: 'cmdLeft'
  },
  92: {
    // 'right window key',
    id: 'cmdRight'
  },
  93: {
    // 'Windows Menu / Right ⌘',
    id: 'cmdRight'
  },
  // 95: {
  //  '// sleep',
  //   id: '',
  // },
  96: {
    // 'numpad 0',
    id: '0'
  },
  97: {
    // 'numpad 1',
    id: '1'
  },
  98: {
    // 'numpad 2',
    id: '2'
  },
  99: {
    // 'numpad 3',
    id: '3'
  },
  100: {
    // 'numpad 4',
    id: '4'
  },
  101: {
    // 'numpad 5',
    id: '5'
  },
  102: {
    // 'numpad 6',
    id: '6'
  },
  103: {
    // 'numpad 7',
    id: '7'
  },
  104: {
    // 'numpad 8',
    id: '8'
  },
  105: {
    // 'numpad 9',
    id: '9'
  },
  106: {
    // 'multiply',
    id: '8'
  },
  107: {
    // 'add',
    id: 'equals'
  },
  108: {
    // 'numpad period (firefox)',
    id: 'dot'
  },
  109: {
    // 'subtract',
    id: 'minus'
  },
  110: {
    // 'decimal point',
    id: 'dot'
  },
  111: {
    // 'divide',
    id: 'slash'
  },
  112: {
    id: 'f1'
  },
  113: {
    id: 'f2'
  },
  114: {
    id: 'f3'
  },
  115: {
    id: 'f4'
  },
  116: {
    id: 'f5'
  },
  117: {
    id: 'f6'
  },
  118: {
    id: 'f7'
  },
  119: {
    id: 'f8'
  },
  120: {
    id: 'f9'
  },
  121: {
    id: 'f10'
  },
  122: {
    id: 'f11'
  },
  123: {
    id: 'f12'
  },
  124: {
    id: 'f13'
  },
  125: {
    id: 'f14'
  },
  126: {
    id: 'f15'
  },
  127: {
    id: 'f16'
  },
  128: {
    id: 'f17'
  },
  129: {
    id: 'f18'
  },
  130: {
    id: 'f19'
  },
  131: {
    id: 'f20'
  },
  132: {
    id: 'f21'
  },
  133: {
    id: 'f22'
  },
  134: {
    id: 'f23'
  },
  135: {
    id: 'f24'
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
    id: '6'
  },
  161: {
    // '!',
    id: '1'
  },
  163: {
    // '#',
    id: '3'
  },
  164: {
    // '$',
    id: '4'
  },
  165: {
    // 'ù',
    id: 'u'
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
    id: 'f5'
  },
  169: {
    // 'closing paren (AZERTY)',
    id: '0'
  },
  170: {
    // '*',
    id: '8'
  },
  171: {
    // '~ + * key',
    id: 'tilde'
  },
  // 172: {
  //   'home key',
  //   id: '',
  // },
  173: {
    // 'minus (firefox), mute/unmute',
    id: 'minus'
  },
  174: {
    // 'decrease volume level',
    id: 'f10'
  },
  175: {
    // 'increase volume level',
    id: 'f11'
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
    id: 'f8'
  },
  // 180: {
  //   'e-mail',
  //   id: '',
  // },
  181: {
    // 'mute/unmute (firefox)',
    id: 'f10'
  },
  182: {
    // 'decrease volume level (firefox)',
    id: 'f11'
  },
  183: {
    // 'increase volume level (firefox)',
    id: 'f12'
  },
  186: {
    // 'semi-colon / ñ',
    id: 'semicolon'
  },
  187: {
    // 'equal sign',
    id: 'equals'
  },
  188: {
    // 'comma',
    id: 'comma'
  },
  189: {
    // 'dash',
    id: 'minus'
  },
  190: {
    // 'period',
    id: 'dot'
  },
  191: {
    // 'forward slash / ç',
    id: 'slash'
  },
  192: {
    // 'grave accent / ñ / æ / ö',
    id: 'tilde'
  },
  193: {
    // '?, / or °',
    id: 'slash'
  },
  194: {
    // 'numpad period (chrome)',
    id: 'dot'
  },
  219: {
    // 'open bracket',
    id: 'squareBracketLeft'
  },
  220: {
    // 'back slash',
    id: 'backslash'
  },
  221: {
    // 'close bracket / å',
    id: 'squareBracketRight'
  },
  222: {
    // 'single quote / ø / ä',
    id: 'apostrophe'
  },
  223: {
    // '`',
    id: 'tilde'
  },
  224: {
    // 'left or right ⌘ key (firefox)',
    id: 'cmd',
    checkSide: true
  },
  225: {
    // 'altgr',
    id: 'altRight'
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
    id: 'c'
  } // 233: {
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
  var key = keyCodes[e.keyCode];

  if (key && key.id) {
    var keySelector = "#Key--".concat(key.id);

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
},{}],"post.js":[function(require,module,exports) {
"use strict";

var _animatedScrollTo = _interopRequireDefault(require("animated-scroll-to"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentsLink = document.querySelector('.Post-commentsLink');
var postBgArchive = document.querySelector('.Post-bg--archive');
var expandToggles = document.querySelectorAll('.Expandable-toggle');
var sideNoteTriggers = document.querySelectorAll('.SideNote-trigger');
commentsLink && commentsLink.addEventListener('click', function (e) {
  e.preventDefault();
  (0, _animatedScrollTo.default)(document.querySelector('#comments'), {
    maxDuration: 500
  });
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
},{"animated-scroll-to":"../node_modules/animated-scroll-to/lib/animated-scroll-to.js"}],"search.js":[function(require,module,exports) {
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
  return "<a href='".concat(url, "' class='MenuModal-result'><div class='Container'>").concat(title, "</div></a>");
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
    searchResults.innerHTML = '<div class="MenuModal-noResults"><div class="Container">No results</div></div>';
  }

  prevSearch = newSearch;
});
},{}],"archive.js":[function(require,module,exports) {
"use strict";

var _animatedScrollTo = _interopRequireDefault(require("animated-scroll-to"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkHash() {
  var hash = window.location.hash.replace('#/', '');

  if (hash) {
    var posts = document.querySelector("#posts-".concat(hash));
    var section = document.querySelector("#section-".concat(hash));

    if (posts) {
      posts.style.height = 'auto';
      posts.setAttribute('open', 1);
      window.location.hash = '';
      (0, _animatedScrollTo.default)(section);
    }
  }
}

checkHash();

function toggleSection(posts, postsContent) {
  var isOpen = posts.getAttribute('open') === '1';
  var isAnimating = posts.getAttribute('animating') === '1';

  if (isAnimating) {
    return;
  }

  posts.style.height = "".concat(postsContent.offsetHeight, "px");
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
},{"animated-scroll-to":"../node_modules/animated-scroll-to/lib/animated-scroll-to.js"}],"../node_modules/window-scroll-manager/index.js":[function(require,module,exports) {
var define;
'use strict';

(function() {
  var instance = null;
  var instancesCount = 0;
  var ticking = false;

  var EVENT_NAME = 'window-scroll';

  var isWindowDefined = typeof window !== 'undefined';

  // ------------------------------------------------
  // Passive events support detection
  // ------------------------------------------------
  function detectPassiveEvents() {
    if (isWindowDefined && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function() { passive = true; }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), because Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function() {};
      window.addEventListener('TEST_PASSIVE_EVENT_SUPPORT', noop, options);
      window.removeEventListener('TEST_PASSIVE_EVENT_SUPPORT', noop, options);

      return passive;
    }

    return false;
  }

  var supportsPassiveEvents = detectPassiveEvents();

  // ------------------------------------------------
  // Custom Event detection
  // ------------------------------------------------
  var supportsCustomEvents = isWindowDefined && typeof window.CustomEvent === 'function';

  // ------------------------------------------------
  // Scroll manager
  // ------------------------------------------------
  function ScrollManager() {
    if (typeof window === 'undefined') {
      // Silently return null if it is used on server
      return null;
    }

    // Increase reference count
    instancesCount++;

    // If singleton instance exists, return it rather than creating a new one
    if (instance) {
      return instance;
    }

    // Save singleton instance
    instance = this;

    // Bind handlers
    this.handleScroll = this.handleScroll.bind(this);

    // Use passive listener when supported with fallback to capture option
    this.eventListenerOptions = supportsPassiveEvents ? { passive: true } : true;

    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll, this.eventListenerOptions);
  }

  ScrollManager.prototype.removeListener = function() {
    instancesCount--;

    // There is not components listening to our event
    if (instancesCount === 0) {
      this.destroy();
    }
  };

  ScrollManager.prototype.destroy = function() {
    // Remove event listener
    window.removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);

    // Clear singleton instance and count
    instance = null;
    instancesCount = 0;
  };

  ScrollManager.prototype.getScrollPosition = function() {
    // Get scroll position, with IE fallback
    var scrollPositionY = window.scrollY || document.documentElement.scrollTop;
    var scrollPositionX = window.scrollX || document.documentElement.scrollLeft;

    // Disable overscrolling in safari
    if (scrollPositionY < 0) {
      scrollPositionY = 0;
    }
    if (scrollPositionX < 0) {
      scrollPositionX = 0;
    }

    return {
      // Alias for scrollPositionY for backwards compatibility
      scrollPosition: scrollPositionY,
      scrollPositionY: scrollPositionY,
      scrollPositionX: scrollPositionX
    };
  };

  ScrollManager.prototype.handleScroll = function() {
    // Fire the event only once per requestAnimationFrame
    if (!ticking) {
      ticking = true;

      var event;

      if (supportsCustomEvents) {
        event = new CustomEvent(EVENT_NAME, {
          detail: this.getScrollPosition()
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(EVENT_NAME, false, false, this.getScrollPosition());
      }

      window.dispatchEvent(event);

      window.requestAnimationFrame(function() {
        ticking = false;
      });
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    ScrollManager.default = ScrollManager;
    module.exports = ScrollManager;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) { // eslint-disable-line no-undef
    // register as 'window-scroll-manager', consistent with npm package name
    define('window-scroll-manager', [], function() { // eslint-disable-line no-undef
      return ScrollManager;
    });
  } else {
    window.ScrollManager = ScrollManager;
  }
}).call(this);

},{}],"parallax.js":[function(require,module,exports) {
"use strict";

var _windowScrollManager = _interopRequireDefault(require("window-scroll-manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sm = new _windowScrollManager.default();
var headerTitle = document.querySelector('.Header-title');
var headerAbout = document.querySelector('.Header-about');
window.addEventListener('window-scroll', function (e) {
  var windowHeight = window.innerHeight;

  if (e.detail.scrollPosition < windowHeight) {
    var transform = "translateY(-".concat(e.detail.scrollPosition / 4, "px)");
    var opacity = 1 - e.detail.scrollPosition / windowHeight;
    headerTitle.style.transform = transform;
    headerTitle.style.opacity = opacity;

    if (headerAbout) {
      headerAbout.style.transform = transform;
    }
  }
});
},{"window-scroll-manager":"../node_modules/window-scroll-manager/index.js"}],"header-anchors.js":[function(require,module,exports) {
var headers = document.querySelectorAll('.Post h2, .Post h3, .Post h4, .Post h5');

if (headers) {
  headers.forEach(function (header) {
    header.innerHTML = "<a href=\"#".concat(header.id, "\" class=\"Post-headerAnchor\">\n        <img src=\"/public/img/link.svg\" />\n      </a>").concat(header.innerHTML);
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../public/fonts/MarvinVisions-Bold.eot":[["MarvinVisions-Bold.fea6c7f7.eot","../public/fonts/MarvinVisions-Bold.eot"],"../public/fonts/MarvinVisions-Bold.eot"],"./../public/fonts/MarvinVisions-Bold.woff2":[["MarvinVisions-Bold.fdbfef8d.woff2","../public/fonts/MarvinVisions-Bold.woff2"],"../public/fonts/MarvinVisions-Bold.woff2"],"./../public/fonts/MarvinVisions-Bold.woff":[["MarvinVisions-Bold.2a772435.woff","../public/fonts/MarvinVisions-Bold.woff"],"../public/fonts/MarvinVisions-Bold.woff"],"./../public/fonts/Merriweather-Regular.eot":[["Merriweather-Regular.77d24ab0.eot","../public/fonts/Merriweather-Regular.eot"],"../public/fonts/Merriweather-Regular.eot"],"./../public/fonts/Merriweather-Regular.woff2":[["Merriweather-Regular.969df671.woff2","../public/fonts/Merriweather-Regular.woff2"],"../public/fonts/Merriweather-Regular.woff2"],"./../public/fonts/Merriweather-Regular.woff":[["Merriweather-Regular.5bfd8d98.woff","../public/fonts/Merriweather-Regular.woff"],"../public/fonts/Merriweather-Regular.woff"],"./../public/fonts/Merriweather-BlackItalic.eot":[["Merriweather-BlackItalic.a06fc799.eot","../public/fonts/Merriweather-BlackItalic.eot"],"../public/fonts/Merriweather-BlackItalic.eot"],"./../public/fonts/Merriweather-BlackItalic.woff2":[["Merriweather-BlackItalic.aeb0881a.woff2","../public/fonts/Merriweather-BlackItalic.woff2"],"../public/fonts/Merriweather-BlackItalic.woff2"],"./../public/fonts/Merriweather-BlackItalic.woff":[["Merriweather-BlackItalic.4f60d589.woff","../public/fonts/Merriweather-BlackItalic.woff"],"../public/fonts/Merriweather-BlackItalic.woff"],"./../public/fonts/Merriweather-Italic.eot":[["Merriweather-Italic.97af7d2c.eot","../public/fonts/Merriweather-Italic.eot"],"../public/fonts/Merriweather-Italic.eot"],"./../public/fonts/Merriweather-Italic.woff2":[["Merriweather-Italic.a612e293.woff2","../public/fonts/Merriweather-Italic.woff2"],"../public/fonts/Merriweather-Italic.woff2"],"./../public/fonts/Merriweather-Italic.woff":[["Merriweather-Italic.a2ff943e.woff","../public/fonts/Merriweather-Italic.woff"],"../public/fonts/Merriweather-Italic.woff"],"./../public/fonts/Merriweather-Bold.eot":[["Merriweather-Bold.e0afb307.eot","../public/fonts/Merriweather-Bold.eot"],"../public/fonts/Merriweather-Bold.eot"],"./../public/fonts/Merriweather-Bold.woff2":[["Merriweather-Bold.5b0faa7b.woff2","../public/fonts/Merriweather-Bold.woff2"],"../public/fonts/Merriweather-Bold.woff2"],"./../public/fonts/Merriweather-Bold.woff":[["Merriweather-Bold.d3883c03.woff","../public/fonts/Merriweather-Bold.woff"],"../public/fonts/Merriweather-Bold.woff"],"./../public/fonts/Merriweather-LightItalic.eot":[["Merriweather-LightItalic.3fa38d6a.eot","../public/fonts/Merriweather-LightItalic.eot"],"../public/fonts/Merriweather-LightItalic.eot"],"./../public/fonts/Merriweather-LightItalic.woff2":[["Merriweather-LightItalic.66892089.woff2","../public/fonts/Merriweather-LightItalic.woff2"],"../public/fonts/Merriweather-LightItalic.woff2"],"./../public/fonts/Merriweather-LightItalic.woff":[["Merriweather-LightItalic.2349fc9f.woff","../public/fonts/Merriweather-LightItalic.woff"],"../public/fonts/Merriweather-LightItalic.woff"],"./../public/fonts/Merriweather-BoldItalic.eot":[["Merriweather-BoldItalic.80ff0994.eot","../public/fonts/Merriweather-BoldItalic.eot"],"../public/fonts/Merriweather-BoldItalic.eot"],"./../public/fonts/Merriweather-BoldItalic.woff2":[["Merriweather-BoldItalic.c80ffe51.woff2","../public/fonts/Merriweather-BoldItalic.woff2"],"../public/fonts/Merriweather-BoldItalic.woff2"],"./../public/fonts/Merriweather-BoldItalic.woff":[["Merriweather-BoldItalic.2e69fe43.woff","../public/fonts/Merriweather-BoldItalic.woff"],"../public/fonts/Merriweather-BoldItalic.woff"],"./../public/fonts/Merriweather-Light.eot":[["Merriweather-Light.e1c28d25.eot","../public/fonts/Merriweather-Light.eot"],"../public/fonts/Merriweather-Light.eot"],"./../public/fonts/Merriweather-Light.woff2":[["Merriweather-Light.545dc799.woff2","../public/fonts/Merriweather-Light.woff2"],"../public/fonts/Merriweather-Light.woff2"],"./../public/fonts/Merriweather-Light.woff":[["Merriweather-Light.540dca26.woff","../public/fonts/Merriweather-Light.woff"],"../public/fonts/Merriweather-Light.woff"],"./../public/fonts/Merriweather-Black.eot":[["Merriweather-Black.56b571f6.eot","../public/fonts/Merriweather-Black.eot"],"../public/fonts/Merriweather-Black.eot"],"./../public/fonts/Merriweather-Black.woff2":[["Merriweather-Black.cf541322.woff2","../public/fonts/Merriweather-Black.woff2"],"../public/fonts/Merriweather-Black.woff2"],"./../public/fonts/Merriweather-Black.woff":[["Merriweather-Black.b451631b.woff","../public/fonts/Merriweather-Black.woff"],"../public/fonts/Merriweather-Black.woff"],"./../public/img/notebook.jpg":[["notebook.e4c19d50.jpg","../public/img/notebook.jpg"],"../public/img/notebook.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.js":[function(require,module,exports) {
"use strict";

require("./comments");

require("./fuzzy");

require("./jump");

require("./keyboard");

require("./post");

require("./search");

require("./archive");

require("./parallax");

require("./header-anchors");

require("../sass/style.scss");
},{"./comments":"comments.js","./fuzzy":"fuzzy.js","./jump":"jump.js","./keyboard":"keyboard.js","./post":"post.js","./search":"search.js","./archive":"archive.js","./parallax":"parallax.js","./header-anchors":"header-anchors.js","../sass/style.scss":"../sass/style.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54848" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)