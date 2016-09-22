const options = {
  extract: function(el) { return el.title; }
};

const search = document.querySelector('.Search');
const searchInput = document.querySelector('.Search-input');
const searchToggles = document.querySelectorAll('.Search-toggle');
const searchResults = document.querySelector('.Search-results');
const html = document.querySelector('html');

let prevSearch = '';

const MIN_CHARACTERS = 1;

function renderResult(title, url) {
  return `<div><a href="${ url }">${ title }</a></div>`;
}


searchToggles.forEach(element => {
  element.addEventListener('click', function() {
    if (search.style.display === 'none' || !search.style.display) {
      search.style.display = 'block';
      setTimeout(function(){
        html.classList.toggle('Html--searchActive');
        searchInput.focus();
      }, 10);
    } else {
      html.classList.remove('Html--searchActive');

      setTimeout(function(){
        search.style.display = 'none';
      }, 500);

    }
  });
});

searchInput.addEventListener('keyup', function() {
  const newSearch = searchInput.value.trim();

  if (prevSearch === newSearch) {
    return;
  }

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
    searchResults.innerHTML = '<div class="Search-noResults">No results</div>';
  }

  prevSearch = newSearch;

});
