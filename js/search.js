// TODO consider switching to https://github.com/leeoniya/uFuzzy
import uFuzzy from "@leeoniya/ufuzzy";

const searchInput = document.querySelector(".search__input");
const searchResults = document.querySelector(".search__results");
const modalNav = document.querySelector(".modal-nav");

let previousSearchTerm;

const MIN_CHARACTERS = 1;
const RESULT_FOCUS_CLASS = "search__result--focused";
const MAX_RESULTS = 15;

const fuzzy = new uFuzzy({
  intraIns: Infinity,
});

// uFuzzy works only with arrays of strings and returns indexes
const titles = searchData.map((item) => item.t);

// Clean search input on page refresh
searchInput.value = "";

export function search() {
  const searchTerm = searchInput.value.trim();

  // Same search, do nothing
  if (previousSearchTerm === searchTerm) {
    return;
  }

  // Empty results when search term is too short
  if (searchTerm.length < MIN_CHARACTERS) {
    searchResults.innerHTML = "";
    previousSearchTerm = "";
    modalNav.style.display = "block";
    return;
  }

  modalNav.style.display = "none";
  previousSearchTerm = searchTerm;

  const indexes = fuzzy.filter(titles, searchTerm).slice(0, MAX_RESULTS);

  if (indexes.length === 0) {
    searchResults.innerHTML = `<div class="search__no-results"><div class="container">No results found for "${searchTerm}"</div></div>`;
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
        return `<a class="search__result ${
          index === 0 ? RESULT_FOCUS_CLASS : ""
        }" href="${result.url}">
        <div class="container">
        <div class="search__result-eyebrow">${result.eyebrow}</div>
        <div class="search__result-title">
        ${
          result.title
        }<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" class="post-arrow" aria-hidden="true">
          <path d="M 0 10 30 10 20 0 30 10 20 20" />
        </svg>
        </div>
        </div>
        </a>`;
      })
      .join("\n");
    searchResults.innerHTML = html;
  }
}

searchInput.addEventListener("keyup", search);

searchInput.addEventListener("keydown", function (e) {
  const current = searchResults.querySelector(`.${RESULT_FOCUS_CLASS}`);

  // On enter, open the focused link
  if (e.code === "Enter") {
    e.preventDefault();
    current.click();
    return;
  }

  let item = null;
  const isUp = e.code === "ArrowUp";
  const isDown = e.code === "ArrowDown";

  // On up and down arrows
  // find the next/previous element
  if (isDown || isUp) {
    e.preventDefault();

    item = isDown ? current.nextElementSibling : current.previousElementSibling;
  }

  if (item) {
    e.preventDefault();
    item.classList.add(RESULT_FOCUS_CLASS);

    item.scrollIntoView({ behavior: "smooth", block: "center" });

    if (current) {
      current.classList.remove(RESULT_FOCUS_CLASS);
    }
  }
});
