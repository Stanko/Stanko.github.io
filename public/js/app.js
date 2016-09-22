'use strict';

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
    commentFormInputs.forEach(function (input) {
      params.push(input.name + '=' + input.value);
    });

    overlayDiv.style.display = 'block';

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

var options = {
  extract: function extract(el) {
    return el.title;
  }
};

var search = document.querySelector('.Search');
var searchInput = document.querySelector('.Search-input');
var searchToggles = document.querySelectorAll('.Search-toggle');
var searchResults = document.querySelector('.Search-results');
var html = document.querySelector('html');

var prevSearch = '';

var MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return '<div><a href="' + url + '">' + title + '</a></div>';
}

searchToggles.forEach(function (element) {
  element.addEventListener('click', function () {
    if (search.style.display === 'none' || !search.style.display) {
      search.style.display = 'block';
      setTimeout(function () {
        html.classList.toggle('Html--searchActive');
        searchInput.focus();
      }, 10);
    } else {
      html.classList.remove('Html--searchActive');

      setTimeout(function () {
        search.style.display = 'none';
      }, 500);
    }
  });
});

searchInput.addEventListener('keyup', function () {
  var newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

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
    searchResults.innerHTML = '<div class="Search-noResults">No results</div>';
  }

  prevSearch = newSearch;
});
//# sourceMappingURL=app.js.map
