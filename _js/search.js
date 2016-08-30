const options = {
  extract: function(el) { return el.title; }
};

const searchInput = document.querySelector('.Search-input');
const searchResults = document.querySelector('.Search-results');

let prevSearch = '';

const MIN_CHARACTERS = 2;

function renderResult(title, url) {
  return `<div><a href="${ url }">${ title }</a></div>`;
}

searchInput.addEventListener('keyup', function() {
  const newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

  if (newSearch.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    return;
  }

  const results = fuzzy.filter(newSearch, posts, options);
  const html = results.map(result => renderResult(result.string, result.original.url)).join('');

  prevSearch = newSearch;
  searchResults.innerHTML = html;
});
