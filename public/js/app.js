'use strict';

function animateScrollTo(desiredOffset) {
  var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var defaultOptions = {
    speed: 500,
    minDuration: 250,
    maxDuration: 3000,
    cancelOnUserAction: true
  };

  var options = {};

  Object.keys(defaultOptions).forEach(function (key) {
    options[key] = userOptions[key] ? userOptions[key] : defaultOptions[key];
  });

  // get cross browser scroll position
  var initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
  // cross browser document height minus window height
  var maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;

  // If the scroll position is greater than maximum available scroll
  if (desiredOffset > maxScroll) {
    desiredOffset = maxScroll;
  }

  // Calculate diff to scroll
  var diff = desiredOffset - initialScrollPosition;

  // Do nothing if the page is already there
  if (diff === 0) {
    return;
  }

  // Calculate duration of the scroll
  var duration = Math.abs(Math.round(diff / 1000 * options.speed));

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
    handleUserEvent = function handleUserEvent(e) {
      cancelAnimationFrame(requestID);
    };
    window.addEventListener('keydown', handleUserEvent);
  } else {
    // Set handler to prevent user actions while scroll is active
    handleUserEvent = function handleUserEvent(e) {
      e.preventDefault();
    };
    window.addEventListener('scroll', handleUserEvent);
  }

  window.addEventListener('wheel', handleUserEvent);
  window.addEventListener('touchstart', handleUserEvent);

  var step = function step() {
    var timeDiff = Date.now() - startingTime;
    var t = timeDiff / duration - 1;
    var easing = t * t * t + 1;
    var scrollPosition = Math.round(initialScrollPosition + diff * easing);

    if (timeDiff < duration && scrollPosition !== desiredOffset) {
      // If scroll didn't reach desired offset or time is not elapsed
      // Scroll to a new position
      // And request a new step

      window.scrollTo(0, scrollPosition);
      requestID = requestAnimationFrame(step);
    } else {
      // If the time elapsed or we reached the desired offset
      // Set scroll to the desired offset (when rounding made it to be off a pixel or two)
      // Clear animation frame to be sure
      window.scrollTo(0, desiredOffset);
      cancelAnimationFrame(requestID);

      // Remove listeners
      window.removeEventListener('wheel', handleUserEvent);
      window.removeEventListener('touchstart', handleUserEvent);

      if (options.cancelOnUserAction) {
        window.removeEventListener('keydown', handleUserEvent);
      } else {
        window.removeEventListener('scroll', handleUserEvent);
      }
    }
  };

  // Start animating scroll
  requestID = requestAnimationFrame(step);
}

var commentForm = document.querySelector('.CommentForm');
var commentFormInputs = document.querySelectorAll('.CommentForm-input');
var slugInput = document.querySelector('.CommentForm-input--slug');
var optionsSlugInput = document.querySelector('.CommentForm-input--optionsSlug');
var nameInput = document.querySelector('.CommentForm-input--name');
var lastNameInput = document.querySelector('.CommentForm-input--lastName');
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
    var lastName = lastNameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    var error = false;
    var fatalError = false;
    var messages = [];

    if (slug === '' || slug !== optionsSlug || lastName !== '') {
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

var commentsLink = document.querySelector('.Post-commentsLink');
var comments = document.querySelector('#comments');
var postBgArchive = document.querySelector('.Post-bg--archive');

function getElementOffset(element) {
  var top = 0,
      left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

commentsLink && commentsLink.addEventListener('click', function (e) {
  e.preventDefault();
  animateScrollTo(getElementOffset(comments).top);
});

if (postBgArchive) {
  var id = Math.floor(Math.random() * (2 - 0)) + 0;
  var src = postBgArchive.getAttribute('data-src').replace('ID', id);
  postBgArchive.setAttribute('src', src);
}

var options = {
  extract: function extract(el) {
    return el.title;
  }
};

var menu = document.querySelector('.Menu');
var searchInput = document.querySelector('.Menu-input');
var menuWrapper = document.querySelector('.Menu-menuWrapper');
var menuToggles = document.querySelectorAll('.Menu-toggle');
var searchResults = document.querySelector('.Menu-results');
var html = document.querySelector('html');

var prevSearch = '';
var timeout = null;

var MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return '<div><a href="' + url + '">' + title + '</a></div>';
}

for (var i = 0; i < menuToggles.length; i++) {
  var element = menuToggles[i];
  element.addEventListener('click', function () {
    clearTimeout(timeout);

    if (menu.style.display === 'none' || !menu.style.display) {
      menu.style.display = 'block';
      timeout = setTimeout(function () {
        html.classList.toggle('Html--menuActive');
        searchInput.focus();
      }, 30);
    } else {
      html.classList.remove('Html--menuActive');

      timeout = setTimeout(function () {
        menu.style.display = 'none';
      }, 500);
    }
  });
}

searchInput.addEventListener('keyup', function () {
  var newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

  menuWrapper.style.display = newSearch.length > 0 ? 'none' : '';

  if (newSearch.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    prevSearch = '';
    return;
  }

  var results = fuzzy.filter(newSearch, posts, options);

  if (results.length) {
    var _html = results.map(function (result) {
      return renderResult(result.string, result.original.url);
    }).join('');
    searchResults.innerHTML = _html;
  } else {
    searchResults.innerHTML = '<div class="Menu-noResults">No results</div>';
  }

  prevSearch = newSearch;
});
//# sourceMappingURL=app.js.map
