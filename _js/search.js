const options = {
  extract: function(el) { return el.title; }
};

const menu = document.querySelector('.Menu');
const searchInput = document.querySelector('.Menu-input');
const menuWrapper = document.querySelector('.Menu-menuWrapper');
const menuToggles = document.querySelectorAll('.Menu-toggle');
const searchResults = document.querySelector('.Menu-results');
const html = document.querySelector('html');

let prevSearch = '';
let timeout = null;

const MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return `<div><a href="${ url }">${ title }</a></div>`;
}


for (let i = 0; i < menuToggles.length; i++) {
  const element = menuToggles[i];
  element.addEventListener('click', function() {
    clearTimeout(timeout);

    if (menu.style.display === 'none' || !menu.style.display) {
      menu.style.display = 'block';
      timeout = setTimeout(function(){
        html.classList.toggle('Html--menuActive');
        searchInput.focus();
      }, 30);
    } else {
      html.classList.remove('Html--menuActive');

      timeout = setTimeout(function(){
        menu.style.display = 'none';
      }, 500);
    }
  });
}

searchInput.addEventListener('keyup', function() {
  const newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

  menuWrapper.style.display = newSearch.length > 0 ? 'none' : '';

  if (newSearch.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    prevSearch = '';
    return;
  }

  const results = fuzzy.filter(newSearch, posts, options);

  if (results.length) {
    const html = results.map(result => renderResult(result.string, result.original.url)).join('');
    searchResults.innerHTML = html;
  } else {
    searchResults.innerHTML = '<div class="Menu-noResults">No results</div>';
  }

  prevSearch = newSearch;

});
