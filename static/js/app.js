(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/animated-scroll-to/lib/animated-scroll-to.js
  var require_animated_scroll_to = __commonJS({
    "node_modules/animated-scroll-to/lib/animated-scroll-to.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t2) {
          for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
            s2 = arguments[i2];
            for (var p in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p))
                t2[p] = s2[p];
          }
          return t2;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f, y2, t2, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n2) {
          return function(v) {
            return step([n2, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                return t2;
              if (y2 = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e2) {
              op = [6, e2];
              y2 = 0;
            } finally {
              f = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      function getElementOffset(el) {
        var top = 0;
        var left = 0;
        var element = el;
        do {
          top += element.offsetTop || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
        } while (element);
        return {
          top,
          left
        };
      }
      var ScrollDomElement = function() {
        function ScrollDomElement2(element) {
          this.element = element;
        }
        ScrollDomElement2.prototype.getHorizontalScroll = function() {
          return this.element.scrollLeft;
        };
        ScrollDomElement2.prototype.getVerticalScroll = function() {
          return this.element.scrollTop;
        };
        ScrollDomElement2.prototype.getMaxHorizontalScroll = function() {
          return this.element.scrollWidth - this.element.clientWidth;
        };
        ScrollDomElement2.prototype.getMaxVerticalScroll = function() {
          return this.element.scrollHeight - this.element.clientHeight;
        };
        ScrollDomElement2.prototype.getHorizontalElementScrollOffset = function(elementToScrollTo, elementToScroll) {
          return getElementOffset(elementToScrollTo).left - getElementOffset(elementToScroll).left;
        };
        ScrollDomElement2.prototype.getVerticalElementScrollOffset = function(elementToScrollTo, elementToScroll) {
          return getElementOffset(elementToScrollTo).top - getElementOffset(elementToScroll).top;
        };
        ScrollDomElement2.prototype.scrollTo = function(x, y2) {
          this.element.scrollLeft = x;
          this.element.scrollTop = y2;
        };
        return ScrollDomElement2;
      }();
      var ScrollWindow = function() {
        function ScrollWindow2() {
        }
        ScrollWindow2.prototype.getHorizontalScroll = function() {
          return window.scrollX || document.documentElement.scrollLeft;
        };
        ScrollWindow2.prototype.getVerticalScroll = function() {
          return window.scrollY || document.documentElement.scrollTop;
        };
        ScrollWindow2.prototype.getMaxHorizontalScroll = function() {
          return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth;
        };
        ScrollWindow2.prototype.getMaxVerticalScroll = function() {
          return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;
        };
        ScrollWindow2.prototype.getHorizontalElementScrollOffset = function(elementToScrollTo) {
          var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
          return scrollLeft + elementToScrollTo.getBoundingClientRect().left;
        };
        ScrollWindow2.prototype.getVerticalElementScrollOffset = function(elementToScrollTo) {
          var scrollTop = window.scrollY || document.documentElement.scrollTop;
          return scrollTop + elementToScrollTo.getBoundingClientRect().top;
        };
        ScrollWindow2.prototype.scrollTo = function(x, y2) {
          window.scrollTo(x, y2);
        };
        return ScrollWindow2;
      }();
      var activeAnimations = {
        elements: [],
        cancelMethods: [],
        add: function(element, cancelAnimation) {
          activeAnimations.elements.push(element);
          activeAnimations.cancelMethods.push(cancelAnimation);
        },
        remove: function(element, shouldStop) {
          if (shouldStop === void 0) {
            shouldStop = true;
          }
          var index = activeAnimations.elements.indexOf(element);
          if (index > -1) {
            if (shouldStop) {
              activeAnimations.cancelMethods[index]();
            }
            activeAnimations.elements.splice(index, 1);
            activeAnimations.cancelMethods.splice(index, 1);
          }
        }
      };
      var WINDOW_EXISTS = typeof window !== "undefined";
      var defaultOptions = {
        cancelOnUserAction: true,
        easing: function(t2) {
          return --t2 * t2 * t2 + 1;
        },
        elementToScroll: WINDOW_EXISTS ? window : null,
        horizontalOffset: 0,
        maxDuration: 3e3,
        minDuration: 250,
        speed: 500,
        verticalOffset: 0
      };
      function animateScrollTo2(numberOrCoordsOrElement, userOptions) {
        if (userOptions === void 0) {
          userOptions = {};
        }
        return __awaiter(this, void 0, void 0, function() {
          var x, y2, scrollToElement, options, isWindow, isElement, scrollBehaviorElement, scrollBehavior, elementToScroll, maxHorizontalScroll, initialHorizontalScroll, horizontalDistanceToScroll, maxVerticalScroll, initialVerticalScroll, verticalDistanceToScroll, horizontalDuration, verticalDuration, duration;
          return __generator(this, function(_a) {
            if (!WINDOW_EXISTS) {
              return [2, new Promise(function(resolve) {
                resolve(false);
              })];
            } else if (!window.Promise) {
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
            }
            options = __assign(__assign({}, defaultOptions), userOptions);
            isWindow = options.elementToScroll === window;
            isElement = !!options.elementToScroll.nodeName;
            if (!isWindow && !isElement) {
              throw "Element to scroll needs to be either window or DOM element.";
            }
            scrollBehaviorElement = isWindow ? document.documentElement : options.elementToScroll;
            scrollBehavior = getComputedStyle(scrollBehaviorElement).getPropertyValue("scroll-behavior");
            if (scrollBehavior === "smooth") {
              console.warn(scrollBehaviorElement.tagName + ` has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);
            }
            elementToScroll = isWindow ? new ScrollWindow() : new ScrollDomElement(options.elementToScroll);
            if (numberOrCoordsOrElement instanceof Element) {
              scrollToElement = numberOrCoordsOrElement;
              if (isElement && (!options.elementToScroll.contains(scrollToElement) || options.elementToScroll.isSameNode(scrollToElement))) {
                throw "options.elementToScroll has to be a parent of scrollToElement";
              }
              x = elementToScroll.getHorizontalElementScrollOffset(scrollToElement, options.elementToScroll);
              y2 = elementToScroll.getVerticalElementScrollOffset(scrollToElement, options.elementToScroll);
            } else if (typeof numberOrCoordsOrElement === "number") {
              x = elementToScroll.getHorizontalScroll();
              y2 = numberOrCoordsOrElement;
            } else if (Array.isArray(numberOrCoordsOrElement) && numberOrCoordsOrElement.length === 2) {
              x = numberOrCoordsOrElement[0] === null ? elementToScroll.getHorizontalScroll() : numberOrCoordsOrElement[0];
              y2 = numberOrCoordsOrElement[1] === null ? elementToScroll.getVerticalScroll() : numberOrCoordsOrElement[1];
            } else {
              throw "Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";
            }
            x += options.horizontalOffset;
            y2 += options.verticalOffset;
            maxHorizontalScroll = elementToScroll.getMaxHorizontalScroll();
            initialHorizontalScroll = elementToScroll.getHorizontalScroll();
            if (x > maxHorizontalScroll) {
              x = maxHorizontalScroll;
            }
            horizontalDistanceToScroll = x - initialHorizontalScroll;
            maxVerticalScroll = elementToScroll.getMaxVerticalScroll();
            initialVerticalScroll = elementToScroll.getVerticalScroll();
            if (y2 > maxVerticalScroll) {
              y2 = maxVerticalScroll;
            }
            verticalDistanceToScroll = y2 - initialVerticalScroll;
            horizontalDuration = Math.abs(Math.round(horizontalDistanceToScroll / 1e3 * options.speed));
            verticalDuration = Math.abs(Math.round(verticalDistanceToScroll / 1e3 * options.speed));
            duration = horizontalDuration > verticalDuration ? horizontalDuration : verticalDuration;
            if (duration < options.minDuration) {
              duration = options.minDuration;
            } else if (duration > options.maxDuration) {
              duration = options.maxDuration;
            }
            return [2, new Promise(function(resolve, reject) {
              if (horizontalDistanceToScroll === 0 && verticalDistanceToScroll === 0) {
                resolve(true);
              }
              activeAnimations.remove(options.elementToScroll, true);
              var requestID;
              var cancelAnimation = function() {
                removeListeners();
                cancelAnimationFrame(requestID);
                resolve(false);
              };
              activeAnimations.add(options.elementToScroll, cancelAnimation);
              var preventDefaultHandler = function(e2) {
                return e2.preventDefault();
              };
              var handler = options.cancelOnUserAction ? cancelAnimation : preventDefaultHandler;
              var eventOptions = options.cancelOnUserAction ? { passive: true } : { passive: false };
              var events = [
                "wheel",
                "touchstart",
                "keydown",
                "mousedown"
              ];
              var removeListeners = function() {
                events.forEach(function(eventName) {
                  options.elementToScroll.removeEventListener(eventName, handler, eventOptions);
                });
              };
              events.forEach(function(eventName) {
                options.elementToScroll.addEventListener(eventName, handler, eventOptions);
              });
              var startingTime = Date.now();
              var step = function() {
                var timeDiff = Date.now() - startingTime;
                var t2 = timeDiff / duration;
                var horizontalScrollPosition = Math.round(initialHorizontalScroll + horizontalDistanceToScroll * options.easing(t2));
                var verticalScrollPosition = Math.round(initialVerticalScroll + verticalDistanceToScroll * options.easing(t2));
                if (timeDiff < duration && (horizontalScrollPosition !== x || verticalScrollPosition !== y2)) {
                  elementToScroll.scrollTo(horizontalScrollPosition, verticalScrollPosition);
                  requestID = requestAnimationFrame(step);
                } else {
                  elementToScroll.scrollTo(x, y2);
                  cancelAnimationFrame(requestID);
                  removeListeners();
                  activeAnimations.remove(options.elementToScroll, false);
                  resolve(true);
                }
              };
              requestID = requestAnimationFrame(step);
            })];
          });
        });
      }
      exports.default = animateScrollTo2;
    }
  });

  // node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/fuzzysort/fuzzysort.js"(exports, module) {
      (function(root, UMD) {
        if (typeof define === "function" && define.amd)
          define([], UMD);
        else if (typeof module === "object" && module.exports)
          module.exports = UMD();
        else
          root.fuzzysort = UMD();
      })(exports, function UMD() {
        function fuzzysortNew(instanceOptions) {
          var fuzzysort2 = {
            single: function(search, target, options) {
              ;
              if (search == "farzher")
                return { target: "farzher was here (^-^*)/", score: 0, indexes: [0, 1, 2, 3, 4, 5, 6] };
              if (!search)
                return null;
              if (!isObj(search))
                search = fuzzysort2.getPreparedSearch(search);
              if (!target)
                return null;
              if (!isObj(target))
                target = fuzzysort2.getPrepared(target);
              var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
              var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
              return algorithm(search, target, search[0]);
            },
            go: function(search, targets, options) {
              ;
              if (search == "farzher")
                return [{ target: "farzher was here (^-^*)/", score: 0, indexes: [0, 1, 2, 3, 4, 5, 6], obj: targets ? targets[0] : null }];
              if (!search)
                return noResults;
              search = fuzzysort2.prepareSearch(search);
              var searchLowerCode = search[0];
              var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
              var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
              var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
              var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
              var resultsLen = 0;
              var limitedCount = 0;
              var targetsLen = targets.length;
              if (options && options.keys) {
                var scoreFn = options.scoreFn || defaultScoreFn;
                var keys = options.keys;
                var keysLen = keys.length;
                for (var i2 = targetsLen - 1; i2 >= 0; --i2) {
                  var obj = targets[i2];
                  var objResults = new Array(keysLen);
                  for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      objResults[keyI] = null;
                      continue;
                    }
                    if (!isObj(target))
                      target = fuzzysort2.getPrepared(target);
                    objResults[keyI] = algorithm(search, target, searchLowerCode);
                  }
                  objResults.obj = obj;
                  var score = scoreFn(objResults);
                  if (score === null)
                    continue;
                  if (score < threshold)
                    continue;
                  objResults.score = score;
                  if (resultsLen < limit) {
                    q.add(objResults);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (score > q.peek().score)
                      q.replaceTop(objResults);
                  }
                }
              } else if (options && options.key) {
                var key = options.key;
                for (var i2 = targetsLen - 1; i2 >= 0; --i2) {
                  var obj = targets[i2];
                  var target = getValue(obj, key);
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
                  if (resultsLen < limit) {
                    q.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q.peek().score)
                      q.replaceTop(result);
                  }
                }
              } else {
                for (var i2 = targetsLen - 1; i2 >= 0; --i2) {
                  var target = targets[i2];
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  if (resultsLen < limit) {
                    q.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q.peek().score)
                      q.replaceTop(result);
                  }
                }
              }
              if (resultsLen === 0)
                return noResults;
              var results = new Array(resultsLen);
              for (var i2 = resultsLen - 1; i2 >= 0; --i2)
                results[i2] = q.poll();
              results.total = resultsLen + limitedCount;
              return results;
            },
            goAsync: function(search, targets, options) {
              var canceled = false;
              var p = new Promise(function(resolve, reject) {
                ;
                if (search == "farzher")
                  return resolve([{ target: "farzher was here (^-^*)/", score: 0, indexes: [0, 1, 2, 3, 4, 5, 6], obj: targets ? targets[0] : null }]);
                if (!search)
                  return resolve(noResults);
                search = fuzzysort2.prepareSearch(search);
                var searchLowerCode = search[0];
                var q2 = fastpriorityqueue();
                var iCurrent = targets.length - 1;
                var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
                var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
                var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
                var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
                var resultsLen = 0;
                var limitedCount = 0;
                function step() {
                  if (canceled)
                    return reject("canceled");
                  var startMs = Date.now();
                  if (options && options.keys) {
                    var scoreFn = options.scoreFn || defaultScoreFn;
                    var keys = options.keys;
                    var keysLen = keys.length;
                    for (; iCurrent >= 0; --iCurrent) {
                      if (iCurrent % 1e3 === 0) {
                        if (Date.now() - startMs >= 10) {
                          isNode ? setImmediate(step) : setTimeout(step);
                          return;
                        }
                      }
                      var obj = targets[iCurrent];
                      var objResults = new Array(keysLen);
                      for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                        var key = keys[keyI];
                        var target = getValue(obj, key);
                        if (!target) {
                          objResults[keyI] = null;
                          continue;
                        }
                        if (!isObj(target))
                          target = fuzzysort2.getPrepared(target);
                        objResults[keyI] = algorithm(search, target, searchLowerCode);
                      }
                      objResults.obj = obj;
                      var score = scoreFn(objResults);
                      if (score === null)
                        continue;
                      if (score < threshold)
                        continue;
                      objResults.score = score;
                      if (resultsLen < limit) {
                        q2.add(objResults);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (score > q2.peek().score)
                          q2.replaceTop(objResults);
                      }
                    }
                  } else if (options && options.key) {
                    var key = options.key;
                    for (; iCurrent >= 0; --iCurrent) {
                      if (iCurrent % 1e3 === 0) {
                        if (Date.now() - startMs >= 10) {
                          isNode ? setImmediate(step) : setTimeout(step);
                          return;
                        }
                      }
                      var obj = targets[iCurrent];
                      var target = getValue(obj, key);
                      if (!target)
                        continue;
                      if (!isObj(target))
                        target = fuzzysort2.getPrepared(target);
                      var result = algorithm(search, target, searchLowerCode);
                      if (result === null)
                        continue;
                      if (result.score < threshold)
                        continue;
                      result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
                      if (resultsLen < limit) {
                        q2.add(result);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (result.score > q2.peek().score)
                          q2.replaceTop(result);
                      }
                    }
                  } else {
                    for (; iCurrent >= 0; --iCurrent) {
                      if (iCurrent % 1e3 === 0) {
                        if (Date.now() - startMs >= 10) {
                          isNode ? setImmediate(step) : setTimeout(step);
                          return;
                        }
                      }
                      var target = targets[iCurrent];
                      if (!target)
                        continue;
                      if (!isObj(target))
                        target = fuzzysort2.getPrepared(target);
                      var result = algorithm(search, target, searchLowerCode);
                      if (result === null)
                        continue;
                      if (result.score < threshold)
                        continue;
                      if (resultsLen < limit) {
                        q2.add(result);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (result.score > q2.peek().score)
                          q2.replaceTop(result);
                      }
                    }
                  }
                  if (resultsLen === 0)
                    return resolve(noResults);
                  var results = new Array(resultsLen);
                  for (var i2 = resultsLen - 1; i2 >= 0; --i2)
                    results[i2] = q2.poll();
                  results.total = resultsLen + limitedCount;
                  resolve(results);
                }
                isNode ? setImmediate(step) : step();
              });
              p.cancel = function() {
                canceled = true;
              };
              return p;
            },
            highlight: function(result, hOpen, hClose) {
              if (typeof hOpen == "function")
                return fuzzysort2.highlightCallback(result, hOpen);
              if (result === null)
                return null;
              if (hOpen === void 0)
                hOpen = "<b>";
              if (hClose === void 0)
                hClose = "</b>";
              var highlighted = "";
              var matchesIndex = 0;
              var opened = false;
              var target = result.target;
              var targetLen = target.length;
              var matchesBest = result.indexes;
              for (var i2 = 0; i2 < targetLen; ++i2) {
                var char = target[i2];
                if (matchesBest[matchesIndex] === i2) {
                  ++matchesIndex;
                  if (!opened) {
                    opened = true;
                    highlighted += hOpen;
                  }
                  if (matchesIndex === matchesBest.length) {
                    highlighted += char + hClose + target.substr(i2 + 1);
                    break;
                  }
                } else {
                  if (opened) {
                    opened = false;
                    highlighted += hClose;
                  }
                }
                highlighted += char;
              }
              return highlighted;
            },
            highlightCallback: function(result, cb) {
              if (result === null)
                return null;
              var target = result.target;
              var targetLen = target.length;
              var indexes = result.indexes;
              var highlighted = "";
              var matchI = 0;
              var indexesI = 0;
              var opened = false;
              var result = [];
              for (var i2 = 0; i2 < targetLen; ++i2) {
                var char = target[i2];
                if (indexes[indexesI] === i2) {
                  ++indexesI;
                  if (!opened) {
                    opened = true;
                    result.push(highlighted);
                    highlighted = "";
                  }
                  if (indexesI === indexes.length) {
                    highlighted += char;
                    result.push(cb(highlighted, matchI++));
                    highlighted = "";
                    result.push(target.substr(i2 + 1));
                    break;
                  }
                } else {
                  if (opened) {
                    opened = false;
                    result.push(cb(highlighted, matchI++));
                    highlighted = "";
                  }
                }
                highlighted += char;
              }
              return result;
            },
            prepare: function(target) {
              if (!target)
                return { target: "", _targetLowerCodes: [0], _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
              return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
            },
            prepareSlow: function(target) {
              if (!target)
                return { target: "", _targetLowerCodes: [0], _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
              return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: fuzzysort2.prepareNextBeginningIndexes(target), score: null, indexes: null, obj: null };
            },
            prepareSearch: function(search) {
              if (!search)
                search = "";
              return fuzzysort2.prepareLowerCodes(search);
            },
            getPrepared: function(target) {
              if (target.length > 999)
                return fuzzysort2.prepare(target);
              var targetPrepared = preparedCache.get(target);
              if (targetPrepared !== void 0)
                return targetPrepared;
              targetPrepared = fuzzysort2.prepare(target);
              preparedCache.set(target, targetPrepared);
              return targetPrepared;
            },
            getPreparedSearch: function(search) {
              if (search.length > 999)
                return fuzzysort2.prepareSearch(search);
              var searchPrepared = preparedSearchCache.get(search);
              if (searchPrepared !== void 0)
                return searchPrepared;
              searchPrepared = fuzzysort2.prepareSearch(search);
              preparedSearchCache.set(search, searchPrepared);
              return searchPrepared;
            },
            algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
              var targetLowerCodes = prepared._targetLowerCodes;
              var searchLen = searchLowerCodes.length;
              var targetLen = targetLowerCodes.length;
              var searchI = 0;
              var targetI = 0;
              var typoSimpleI = 0;
              var matchesSimpleLen = 0;
              for (; ; ) {
                var isMatch = searchLowerCode === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesSimple[matchesSimpleLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen)
                    break;
                  searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
                }
                ++targetI;
                if (targetI >= targetLen) {
                  for (; ; ) {
                    if (searchI <= 1)
                      return null;
                    if (typoSimpleI === 0) {
                      --searchI;
                      var searchLowerCodeNew = searchLowerCodes[searchI];
                      if (searchLowerCode === searchLowerCodeNew)
                        continue;
                      typoSimpleI = searchI;
                    } else {
                      if (typoSimpleI === 1)
                        return null;
                      --typoSimpleI;
                      searchI = typoSimpleI;
                      searchLowerCode = searchLowerCodes[searchI + 1];
                      var searchLowerCodeNew = searchLowerCodes[searchI];
                      if (searchLowerCode === searchLowerCodeNew)
                        continue;
                    }
                    matchesSimpleLen = searchI;
                    targetI = matchesSimple[matchesSimpleLen - 1] + 1;
                    break;
                  }
                }
              }
              var searchI = 0;
              var typoStrictI = 0;
              var successStrict = false;
              var matchesStrictLen = 0;
              var nextBeginningIndexes = prepared._nextBeginningIndexes;
              if (nextBeginningIndexes === null)
                nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
              var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
              if (targetI !== targetLen)
                for (; ; ) {
                  if (targetI >= targetLen) {
                    if (searchI <= 0) {
                      ++typoStrictI;
                      if (typoStrictI > searchLen - 2)
                        break;
                      if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1])
                        continue;
                      targetI = firstPossibleI;
                      continue;
                    }
                    --searchI;
                    var lastMatch = matchesStrict[--matchesStrictLen];
                    targetI = nextBeginningIndexes[lastMatch];
                  } else {
                    var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
                    if (isMatch) {
                      matchesStrict[matchesStrictLen++] = targetI;
                      ++searchI;
                      if (searchI === searchLen) {
                        successStrict = true;
                        break;
                      }
                      ++targetI;
                    } else {
                      targetI = nextBeginningIndexes[targetI];
                    }
                  }
                }
              {
                if (successStrict) {
                  var matchesBest = matchesStrict;
                  var matchesBestLen = matchesStrictLen;
                } else {
                  var matchesBest = matchesSimple;
                  var matchesBestLen = matchesSimpleLen;
                }
                var score = 0;
                var lastTargetI = -1;
                for (var i2 = 0; i2 < searchLen; ++i2) {
                  var targetI = matchesBest[i2];
                  if (lastTargetI !== targetI - 1)
                    score -= targetI;
                  lastTargetI = targetI;
                }
                if (!successStrict) {
                  score *= 1e3;
                  if (typoSimpleI !== 0)
                    score += -20;
                } else {
                  if (typoStrictI !== 0)
                    score += -20;
                }
                score -= targetLen - searchLen;
                prepared.score = score;
                prepared.indexes = new Array(matchesBestLen);
                for (var i2 = matchesBestLen - 1; i2 >= 0; --i2)
                  prepared.indexes[i2] = matchesBest[i2];
                return prepared;
              }
            },
            algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
              var targetLowerCodes = prepared._targetLowerCodes;
              var searchLen = searchLowerCodes.length;
              var targetLen = targetLowerCodes.length;
              var searchI = 0;
              var targetI = 0;
              var matchesSimpleLen = 0;
              for (; ; ) {
                var isMatch = searchLowerCode === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesSimple[matchesSimpleLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen)
                    break;
                  searchLowerCode = searchLowerCodes[searchI];
                }
                ++targetI;
                if (targetI >= targetLen)
                  return null;
              }
              var searchI = 0;
              var successStrict = false;
              var matchesStrictLen = 0;
              var nextBeginningIndexes = prepared._nextBeginningIndexes;
              if (nextBeginningIndexes === null)
                nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
              var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
              if (targetI !== targetLen)
                for (; ; ) {
                  if (targetI >= targetLen) {
                    if (searchI <= 0)
                      break;
                    --searchI;
                    var lastMatch = matchesStrict[--matchesStrictLen];
                    targetI = nextBeginningIndexes[lastMatch];
                  } else {
                    var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                    if (isMatch) {
                      matchesStrict[matchesStrictLen++] = targetI;
                      ++searchI;
                      if (searchI === searchLen) {
                        successStrict = true;
                        break;
                      }
                      ++targetI;
                    } else {
                      targetI = nextBeginningIndexes[targetI];
                    }
                  }
                }
              {
                if (successStrict) {
                  var matchesBest = matchesStrict;
                  var matchesBestLen = matchesStrictLen;
                } else {
                  var matchesBest = matchesSimple;
                  var matchesBestLen = matchesSimpleLen;
                }
                var score = 0;
                var lastTargetI = -1;
                for (var i2 = 0; i2 < searchLen; ++i2) {
                  var targetI = matchesBest[i2];
                  if (lastTargetI !== targetI - 1)
                    score -= targetI;
                  lastTargetI = targetI;
                }
                if (!successStrict)
                  score *= 1e3;
                score -= targetLen - searchLen;
                prepared.score = score;
                prepared.indexes = new Array(matchesBestLen);
                for (var i2 = matchesBestLen - 1; i2 >= 0; --i2)
                  prepared.indexes[i2] = matchesBest[i2];
                return prepared;
              }
            },
            prepareLowerCodes: function(str) {
              var strLen = str.length;
              var lowerCodes = [];
              var lower = str.toLowerCase();
              for (var i2 = 0; i2 < strLen; ++i2)
                lowerCodes[i2] = lower.charCodeAt(i2);
              return lowerCodes;
            },
            prepareBeginningIndexes: function(target) {
              var targetLen = target.length;
              var beginningIndexes = [];
              var beginningIndexesLen = 0;
              var wasUpper = false;
              var wasAlphanum = false;
              for (var i2 = 0; i2 < targetLen; ++i2) {
                var targetCode = target.charCodeAt(i2);
                var isUpper = targetCode >= 65 && targetCode <= 90;
                var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
                var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
                wasUpper = isUpper;
                wasAlphanum = isAlphanum;
                if (isBeginning)
                  beginningIndexes[beginningIndexesLen++] = i2;
              }
              return beginningIndexes;
            },
            prepareNextBeginningIndexes: function(target) {
              var targetLen = target.length;
              var beginningIndexes = fuzzysort2.prepareBeginningIndexes(target);
              var nextBeginningIndexes = [];
              var lastIsBeginning = beginningIndexes[0];
              var lastIsBeginningI = 0;
              for (var i2 = 0; i2 < targetLen; ++i2) {
                if (lastIsBeginning > i2) {
                  nextBeginningIndexes[i2] = lastIsBeginning;
                } else {
                  lastIsBeginning = beginningIndexes[++lastIsBeginningI];
                  nextBeginningIndexes[i2] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
                }
              }
              return nextBeginningIndexes;
            },
            cleanup,
            new: fuzzysortNew
          };
          return fuzzysort2;
        }
        var isNode = typeof __require !== "undefined" && typeof window === "undefined";
        var MyMap = typeof Map === "function" ? Map : function() {
          var s2 = /* @__PURE__ */ Object.create(null);
          this.get = function(k) {
            return s2[k];
          };
          this.set = function(k, val) {
            s2[k] = val;
            return this;
          };
          this.clear = function() {
            s2 = /* @__PURE__ */ Object.create(null);
          };
        };
        var preparedCache = new MyMap();
        var preparedSearchCache = new MyMap();
        var noResults = [];
        noResults.total = 0;
        var matchesSimple = [];
        var matchesStrict = [];
        function cleanup() {
          preparedCache.clear();
          preparedSearchCache.clear();
          matchesSimple = [];
          matchesStrict = [];
        }
        function defaultScoreFn(a2) {
          var max = -9007199254740991;
          for (var i2 = a2.length - 1; i2 >= 0; --i2) {
            var result = a2[i2];
            if (result === null)
              continue;
            var score = result.score;
            if (score > max)
              max = score;
          }
          if (max === -9007199254740991)
            return null;
          return max;
        }
        function getValue(obj, prop) {
          var tmp = obj[prop];
          if (tmp !== void 0)
            return tmp;
          var segs = prop;
          if (!Array.isArray(prop))
            segs = prop.split(".");
          var len = segs.length;
          var i2 = -1;
          while (obj && ++i2 < len)
            obj = obj[segs[i2]];
          return obj;
        }
        function isObj(x) {
          return typeof x === "object";
        }
        var fastpriorityqueue = function() {
          var r2 = [], o2 = 0, e2 = {};
          function n2() {
            for (var e3 = 0, n3 = r2[e3], c = 1; c < o2; ) {
              var f = c + 1;
              e3 = c, f < o2 && r2[f].score < r2[c].score && (e3 = f), r2[e3 - 1 >> 1] = r2[e3], c = 1 + (e3 << 1);
            }
            for (var a2 = e3 - 1 >> 1; e3 > 0 && n3.score < r2[a2].score; a2 = (e3 = a2) - 1 >> 1)
              r2[e3] = r2[a2];
            r2[e3] = n3;
          }
          return e2.add = function(e3) {
            var n3 = o2;
            r2[o2++] = e3;
            for (var c = n3 - 1 >> 1; n3 > 0 && e3.score < r2[c].score; c = (n3 = c) - 1 >> 1)
              r2[n3] = r2[c];
            r2[n3] = e3;
          }, e2.poll = function() {
            if (o2 !== 0) {
              var e3 = r2[0];
              return r2[0] = r2[--o2], n2(), e3;
            }
          }, e2.peek = function(e3) {
            if (o2 !== 0)
              return r2[0];
          }, e2.replaceTop = function(o3) {
            r2[0] = o3, n2();
          }, e2;
        };
        var q = fastpriorityqueue();
        return fuzzysortNew();
      });
    }
  });

  // js/debug.js
  var styleElement = '<style class="debug-styles">* { outline: 1px solid rgb(57, 102, 230, 0.2); }</style>';
  if (window.location.hash === "#debug") {
    document.body.innerHTML += styleElement;
  }
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#debug") {
      document.body.innerHTML += styleElement;
    } else {
      const element = document.querySelector(".debug-styles");
      if (element) {
        element.remove();
      }
    }
  }, false);

  // js/toggle-height.js
  function toggleHeight(element) {
    if (element.getAttribute("animating") === "true") {
      return;
    }
    const wasHidden = element.getAttribute("aria-hidden") === "true";
    const content = element.childNodes[0];
    element.setAttribute("aria-hidden", !wasHidden);
    element.setAttribute("animating", true);
    const handleTransitionEnd = () => {
      element.style.height = "";
      if (!wasHidden) {
        element.style.display = "none";
      }
      element.setAttribute("animating", false);
      element.removeEventListener("transitionend", handleTransitionEnd);
    };
    element.addEventListener("transitionend", handleTransitionEnd);
    if (wasHidden) {
      element.style.height = 0;
      element.style.display = "block";
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.height = `${content.offsetHeight}px`;
        element.style.opacity = 1;
      }, 30);
    } else {
      element.style.height = `${content.offsetHeight}px`;
      setTimeout(() => {
        element.style.height = 0;
        element.style.opacity = 0;
      }, 30);
    }
  }

  // js/archive.js
  var toggles = document.querySelectorAll(".archive__toggle");
  var slug = window.location.hash.replace("#", "").trim();
  if (slug) {
    const category = document.querySelector(`.archive__category--${slug}`);
    if (category) {
      const toggle = category.querySelector(".archive__posts");
      const posts = category.querySelector(".archive__posts");
      posts.style.display = "block";
      posts.setAttribute("aria-hidden", false);
      toggle.setAttribute("aria-expanded", true);
    }
  }
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e2) => {
      e2.preventDefault();
      const isOpening = toggle.getAttribute("aria-expanded") === "false";
      if (isOpening) {
        const url = `${window.location.pathname}${toggle.getAttribute("href")}`;
        window.history.replaceState({}, document.title, url);
      } else {
        const openCount = document.querySelectorAll(".archive__toggle[aria-expanded=true]").length;
        if (openCount === 1) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
      toggle.setAttribute("aria-expanded", isOpening);
      toggleHeight(toggle.nextSibling);
    });
  });

  // js/comments.js
  var showAllButton = document.querySelector(".comments__show-all");
  var allCommentsElement = document.querySelector(".comments__all");
  if (showAllButton) {
    showAllButton.addEventListener("click", () => {
      showAllButton.style.display = "none";
      allCommentsElement.style.display = "block";
    });
  }

  // node_modules/micromodal/dist/micromodal.es.js
  function e(e2, t2) {
    for (var o2 = 0; o2 < t2.length; o2++) {
      var n2 = t2[o2];
      n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
    }
  }
  function t(e2) {
    return function(e3) {
      if (Array.isArray(e3))
        return o(e3);
    }(e2) || function(e3) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
        return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (!e3)
        return;
      if (typeof e3 == "string")
        return o(e3, t2);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
      if (n2 === "Map" || n2 === "Set")
        return Array.from(e3);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return o(e3, t2);
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
      n2[o2] = e2[o2];
    return n2;
  }
  var n;
  var i;
  var a;
  var r;
  var s;
  var l = (n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
    function o2(e2) {
      var n2 = e2.targetModal, i3 = e2.triggers, a3 = i3 === void 0 ? [] : i3, r3 = e2.onShow, s2 = r3 === void 0 ? function() {
      } : r3, l2 = e2.onClose, c = l2 === void 0 ? function() {
      } : l2, d = e2.openTrigger, u = d === void 0 ? "data-micromodal-trigger" : d, f = e2.closeTrigger, h = f === void 0 ? "data-micromodal-close" : f, v = e2.openClass, g = v === void 0 ? "is-open" : v, m = e2.disableScroll, b = m !== void 0 && m, y2 = e2.disableFocus, p = y2 !== void 0 && y2, w = e2.awaitCloseAnimation, E = w !== void 0 && w, k = e2.awaitOpenAnimation, M = k !== void 0 && k, A = e2.debugMode, C = A !== void 0 && A;
      !function(e3, t2) {
        if (!(e3 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }(this, o2), this.modal = document.getElementById(n2), this.config = { debugMode: C, disableScroll: b, openTrigger: u, closeTrigger: h, openClass: g, onShow: s2, onClose: c, awaitCloseAnimation: E, awaitOpenAnimation: M, disableFocus: p }, a3.length > 0 && this.registerTriggers.apply(this, t(a3)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
    }
    var i2, a2, r2;
    return i2 = o2, (a2 = [{ key: "registerTriggers", value: function() {
      for (var e2 = this, t2 = arguments.length, o3 = new Array(t2), n2 = 0; n2 < t2; n2++)
        o3[n2] = arguments[n2];
      o3.filter(Boolean).forEach(function(t3) {
        t3.addEventListener("click", function(t4) {
          return e2.showModal(t4);
        });
      });
    } }, { key: "showModal", value: function() {
      var e2 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
        var o3 = function t3() {
          e2.modal.removeEventListener("animationend", t3, false), e2.setFocusToFirstNode();
        };
        this.modal.addEventListener("animationend", o3, false);
      } else
        this.setFocusToFirstNode();
      this.config.onShow(this.modal, this.activeElement, t2);
    } }, { key: "closeModal", value: function() {
      var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t2 = this.modal;
      if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e2), this.config.awaitCloseAnimation) {
        var o3 = this.config.openClass;
        this.modal.addEventListener("animationend", function e3() {
          t2.classList.remove(o3), t2.removeEventListener("animationend", e3, false);
        }, false);
      } else
        t2.classList.remove(this.config.openClass);
    } }, { key: "closeModalById", value: function(e2) {
      this.modal = document.getElementById(e2), this.modal && this.closeModal();
    } }, { key: "scrollBehaviour", value: function(e2) {
      if (this.config.disableScroll) {
        var t2 = document.querySelector("body");
        switch (e2) {
          case "enable":
            Object.assign(t2.style, { overflow: "" });
            break;
          case "disable":
            Object.assign(t2.style, { overflow: "hidden" });
        }
      }
    } }, { key: "addEventListeners", value: function() {
      this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
    } }, { key: "removeEventListeners", value: function() {
      this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
    } }, { key: "onClick", value: function(e2) {
      (e2.target.hasAttribute(this.config.closeTrigger) || e2.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e2.preventDefault(), e2.stopPropagation(), this.closeModal(e2));
    } }, { key: "onKeydown", value: function(e2) {
      e2.keyCode === 27 && this.closeModal(e2), e2.keyCode === 9 && this.retainFocus(e2);
    } }, { key: "getFocusableNodes", value: function() {
      var e2 = this.modal.querySelectorAll(n);
      return Array.apply(void 0, t(e2));
    } }, { key: "setFocusToFirstNode", value: function() {
      var e2 = this;
      if (!this.config.disableFocus) {
        var t2 = this.getFocusableNodes();
        if (t2.length !== 0) {
          var o3 = t2.filter(function(t3) {
            return !t3.hasAttribute(e2.config.closeTrigger);
          });
          o3.length > 0 && o3[0].focus(), o3.length === 0 && t2[0].focus();
        }
      }
    } }, { key: "retainFocus", value: function(e2) {
      var t2 = this.getFocusableNodes();
      if (t2.length !== 0)
        if (t2 = t2.filter(function(e3) {
          return e3.offsetParent !== null;
        }), this.modal.contains(document.activeElement)) {
          var o3 = t2.indexOf(document.activeElement);
          e2.shiftKey && o3 === 0 && (t2[t2.length - 1].focus(), e2.preventDefault()), !e2.shiftKey && t2.length > 0 && o3 === t2.length - 1 && (t2[0].focus(), e2.preventDefault());
        } else
          t2[0].focus();
    } }]) && e(i2.prototype, a2), r2 && e(i2, r2), o2;
  }(), a = null, r = function(e2) {
    if (!document.getElementById(e2))
      return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e2, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e2, '"></div>')), false;
  }, s = function(e2, t2) {
    if (function(e3) {
      e3.length <= 0 && (console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
    }(e2), !t2)
      return true;
    for (var o2 in t2)
      r(o2);
    return true;
  }, { init: function(e2) {
    var o2 = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e2), n2 = t(document.querySelectorAll("[".concat(o2.openTrigger, "]"))), r2 = function(e3, t2) {
      var o3 = [];
      return e3.forEach(function(e4) {
        var n3 = e4.attributes[t2].value;
        o3[n3] === void 0 && (o3[n3] = []), o3[n3].push(e4);
      }), o3;
    }(n2, o2.openTrigger);
    if (o2.debugMode !== true || s(n2, r2) !== false)
      for (var l2 in r2) {
        var c = r2[l2];
        o2.targetModal = l2, o2.triggers = t(c), a = new i(o2);
      }
  }, show: function(e2, t2) {
    var o2 = t2 || {};
    o2.targetModal = e2, o2.debugMode === true && r(e2) === false || (a && a.removeEventListeners(), (a = new i(o2)).showModal());
  }, close: function(e2) {
    e2 ? a.closeModalById(e2) : a.closeModal();
  } });
  typeof window != "undefined" && (window.MicroModal = l);
  var micromodal_es_default = l;

  // js/menu.js
  var ANIMATION_DURATION = 500;
  var searchInput = document.querySelector(".search__input");
  var page = document.querySelector("#page");
  var y;
  var timeout;
  micromodal_es_default.init({
    onShow: () => {
      y = window.scrollY;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.classList.add("html--overflow-hidden");
        page.style.marginTop = `-${y}px`;
        searchInput.focus();
      }, ANIMATION_DURATION);
    },
    onClose: () => {
      document.documentElement.classList.remove("html--overflow-hidden");
      page.style.marginTop = "";
      window.scrollTo({
        top: y
      });
    },
    awaitCloseAnimation: true,
    disableFocus: true
  });

  // js/scroll-to.js
  var import_animated_scroll_to = __toESM(require_animated_scroll_to());
  var scrollToLinks = document.querySelectorAll(".scroll-to");
  if (scrollToLinks.length) {
    scrollToLinks.forEach((link) => {
      link.addEventListener("click", function(e2) {
        e2.preventDefault();
        const element = document.querySelector(link.getAttribute("href"));
        (0, import_animated_scroll_to.default)(element, { maxDuration: 750 });
      });
    });
  }

  // js/search.js
  var import_fuzzysort = __toESM(require_fuzzysort());
  var searchInput2 = document.querySelector(".search__input");
  var searchResults = document.querySelector(".search__results");
  var modalNav = document.querySelector(".modal-nav");
  var previousSearchTerm;
  var MIN_CHARACTERS = 1;
  var RESULT_FOCUS_CLASS = "search__result--focused";
  var MAX_RESULTS = 15;
  searchInput2.value = "";
  searchInput2.addEventListener("keyup", function(e2) {
    const searchTerm = searchInput2.value.trim();
    if (previousSearchTerm === searchTerm) {
      return;
    }
    if (searchTerm.length < MIN_CHARACTERS) {
      searchResults.innerHTML = "";
      previousSearchTerm = "";
      modalNav.style.display = "block";
      return;
    }
    modalNav.style.display = "none";
    previousSearchTerm = searchTerm;
    const results = import_fuzzysort.default.go(searchTerm, searchData, {
      key: "title",
      limit: MAX_RESULTS,
      threshold: -5e4
    });
    if (results.length === 0) {
      searchResults.innerHTML = `<div class="search__no-results"><div class="container">No results found for "${searchTerm}"</div></div>`;
    } else {
      const html = results.map((result, index) => {
        return `<a class="search__result ${index === 0 ? RESULT_FOCUS_CLASS : ""}" href="${result.obj.url}">
        <div class="container">
        <div class="search__result-eyebrow">${result.obj.eyebrow}</div>
        <div class="search__result-title">
        ${import_fuzzysort.default.highlight(result)}<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" class="post-arrow" aria-hidden="true">
          <path d="M 0 10 30 10 20 0 30 10 20 20" />
        </svg>
        </div>
        </div>
        </a>`;
      }).join("\n");
      searchResults.innerHTML = html;
    }
  });
  searchInput2.addEventListener("keydown", function(e2) {
    const current = searchResults.querySelector(`.${RESULT_FOCUS_CLASS}`);
    if (e2.code === "Enter") {
      e2.preventDefault();
      current.click();
      return;
    }
    let item = null;
    const isUp = e2.code === "ArrowUp";
    const isDown = e2.code === "ArrowDown";
    if (isDown || isUp) {
      e2.preventDefault();
      item = isDown ? current.nextElementSibling : current.previousElementSibling;
    }
    if (item) {
      e2.preventDefault();
      item.classList.add(RESULT_FOCUS_CLASS);
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      if (current) {
        current.classList.remove(RESULT_FOCUS_CLASS);
      }
    }
  });

  // js/sidenote.js
  var sidenoteTriggers = document.querySelectorAll(".sidenote__trigger");
  sidenoteTriggers.forEach((trigger) => {
    const note = trigger.nextElementSibling;
    trigger.addEventListener("click", () => {
      trigger.classList.toggle("sidenote__trigger--expanded");
    });
  });

  // js/spoiler.js
  var spoilers = document.querySelectorAll(".spoiler");
  spoilers.forEach((spoiler) => {
    const toggleButton = spoiler.querySelector(".spoiler__toggle");
    const showLabel = spoiler.querySelector(".spoiler__show");
    const hideLabel = spoiler.querySelector(".spoiler__hide");
    const content = spoiler.querySelector(".spoiler__content");
    toggleButton.addEventListener("click", () => {
      const wasExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      const isExpanded = !wasExpanded;
      showLabel.style.display = isExpanded ? "none" : "";
      hideLabel.style.display = isExpanded ? "" : "none";
      content.style.display = isExpanded ? "" : "none";
      toggleButton.setAttribute("aria-expanded", isExpanded);
      content.setAttribute("aria-hidden", !isExpanded);
    });
  });
})();
