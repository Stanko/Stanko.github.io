import uFuzzy from '@leeoniya/ufuzzy';

const searchInput = document.querySelector('.menu__search-input');
const searchResults = document.querySelector('.menu__results');
const navLinks = document.querySelector('.menu__links');

let previousSearchTerm;

const MIN_CHARACTERS = 1;
const RESULT_FOCUS_CLASS = 'menu__result--focused';
const MAX_RESULTS = 20;

const fuzzy = new uFuzzy({
  intraIns: Infinity,
});

const searchData = window.searchData;

// uFuzzy works only with arrays of strings and returns indexes
const titles = searchData.map((item) => item.t);

// Clean search input on page refresh
searchInput.value = '';

export function search() {
  const searchTerm = searchInput.value.trim();

  // Same search, do nothing
  if (previousSearchTerm === searchTerm) {
    return;
  }

  // Empty results when search term is too short
  if (searchTerm.length < MIN_CHARACTERS) {
    searchResults.innerHTML = '';
    previousSearchTerm = '';
    navLinks.style.display = '';
    return;
  }

  navLinks.style.display = 'none';
  previousSearchTerm = searchTerm;

  const indexes = (fuzzy.filter(titles, searchTerm) || []).slice(
    0,
    MAX_RESULTS
  );

  if (indexes.length === 0) {
    searchResults.innerHTML = `<div class="menu__no-results">
      <div class="container">
      <p>No results found for <span class="arrow-title">"${searchTerm}"</span></p>
      <p class="text-neutral-500 text-sm">Search is using fuzzy matching and searches only through page titles.</p>
      </div>
      </div>`;
  } else {
    const info = fuzzy.info(indexes, titles, searchTerm);
    const order = fuzzy.sort(info, titles, searchTerm);
    const results = order.map((sortIndex) => {
      const index = indexes[sortIndex];
      const item = searchData[index];

      return {
        url: item.u,
        title: uFuzzy.highlight(item.t, info.ranges[sortIndex]),
        eyebrow: item.e,
      };
    });

    const html = results
      .map((result, index) => {
        return `<a class="menu__result ${
          index === 0 ? RESULT_FOCUS_CLASS : ''
        }" href="${result.url}">
        <div class="container">
        <div class="menu__result-eyebrow text-sm text-neutral-500">${
          result.eyebrow
        }</div>
        <div class="menu__result-title arrow-title">
        ${
          result.title
        }<svg viewBox="0 0 30 20" aria-hidden="true" class="arrow-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 10 30 10 20 0 30 10 20 20" />
        </svg>
        </div>
        </div>
        </a>`;
      })
      .join('\n');
    searchResults.innerHTML = html;
  }
}

searchInput.addEventListener('keyup', search);

searchInput.addEventListener('keydown', function (e) {
  const current = searchResults.querySelector(`.${RESULT_FOCUS_CLASS}`);

  // On enter, open the focused link
  if (e.code === 'Enter') {
    e.preventDefault();
    current.click();
    return;
  }

  let item = null;
  const isUp = e.code === 'ArrowUp';
  const isDown = e.code === 'ArrowDown';

  // On up and down arrows
  // find the next/previous element
  if (isDown || isUp) {
    e.preventDefault();

    item = isDown
      ? current?.nextElementSibling
      : current?.previousElementSibling;
  }

  if (item) {
    e.preventDefault();
    item.classList.add(RESULT_FOCUS_CLASS);

    item.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (current) {
      current.classList.remove(RESULT_FOCUS_CLASS);
    }
  }
});
