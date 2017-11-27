const options = {
  extract: function(el) { return el.title; }
};

const menu = document.querySelector('.MenuModal');
const searchInput = document.querySelector('.MenuModal-input');
const modalMenu = document.querySelector('.MenuModal-menu');
const menuToggles = document.querySelectorAll('.MenuModal-toggle');
const searchResults = document.querySelector('.MenuModal-results');
const html = document.querySelector('html');

let prevSearch = '';
let timeout = null;

const MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return `<a href='${ url }' class='MenuModal-result'><div class='Container'>${ title }</div></a>`;
}

const ANIMATION_DURATION = 500;
let scrollPosition = 0;

for (let i = 0; i < menuToggles.length; i++) {
  const element = menuToggles[i];
  element.addEventListener('click', function() {
    clearTimeout(timeout);

    if (menu.style.display === 'none' || !menu.style.display) {
      menu.style.display = 'block';
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      timeout = setTimeout(function(){
        html.classList.toggle('Html--menuActive');
        searchInput.focus();

        timeout = setTimeout(function(){
          html.classList.toggle('Html--overflowHidden');
        }, ANIMATION_DURATION);
      }, 30);


    } else {
      html.classList.remove('Html--menuActive');
      html.classList.remove('Html--overflowHidden');

      window.scrollTo(0, scrollPosition);

      timeout = setTimeout(function(){
        menu.style.display = 'none';
      }, ANIMATION_DURATION);
    }
  });
}

const keyCodes = {
  UP: 38,
  DOWN: 40,
};

searchInput.addEventListener('keydown', function(e) {
  let linkToFocus = null;

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

searchInput.addEventListener('keyup', function(e) {
  const newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

  modalMenu.style.display = newSearch.length > 0 ? 'none' : '';

  if (newSearch.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    prevSearch = '';
    return;
  }

  const results = fuzzy.filter(newSearch, posts, options);

  if (results.length) {
    const html = results.map(result => renderResult(result.string, result.original.url)).join('');
    searchResults.innerHTML = html;
    const resultLinks = document.querySelectorAll('.MenuModal-result');

    for (let i = 0; i < resultLinks.length; i++) {
      const resultLink = resultLinks[i];

      resultLink.addEventListener('keydown', function(e) {
        let linkToFocus = null;

        if (e.keyCode === keyCodes.DOWN) {
          linkToFocus = resultLinks[i + 1];
        } else if (e.keyCode === keyCodes.UP) {
          linkToFocus = resultLinks[i - 1];
        }

        if (linkToFocus) {
          e.preventDefault();
          linkToFocus.focus();
        }
      });
    }
  } else {
    searchResults.innerHTML = '<div class="MenuModal-noResults"><div class="Container">No results</div></div>';
  }

  prevSearch = newSearch;

});
