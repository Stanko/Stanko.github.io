import animateScrollTo from 'animated-scroll-to';

const commentsLink = document.querySelector('.Post-commentsLink');
const postBgArchive = document.querySelector('.Post-bg--archive');
const expandToggles = document.querySelectorAll('.Expandable-toggle');
const sideNoteTriggers = document.querySelectorAll('.SideNote-trigger');

commentsLink && commentsLink.addEventListener('click', function(e) {
  e.preventDefault();
  animateScrollTo(document.querySelector('#comments'), { maxDuration: 1000 });
});


if (postBgArchive) {
  const id = Math.floor(Math.random() * (2 - 0)) + 0;
  const src = postBgArchive.getAttribute('data-src').replace('ID', id);
  postBgArchive.setAttribute('src', src);
}

for (let i = 0; i < expandToggles.length; ++i) {
  const expandToggle = expandToggles[i];

  expandToggle.addEventListener('click', (e) => {
    const button = e.currentTarget;
    const expendableStyle = button.parentElement.nextElementSibling.style;

    if (expendableStyle.display === 'none' || expendableStyle.display === '') {
      button.classList.add('Expandable-toggle--open');
      expendableStyle.display = 'block';
    } else {
      button.classList.remove('Expandable-toggle--open');
      expendableStyle.display = 'none';
    }
  });
}

for (let i = 0; i < sideNoteTriggers.length; ++i) {
  const sideNoteTrigger = sideNoteTriggers[i];

  sideNoteTrigger.addEventListener('click', (e) => {
    const button = e.currentTarget;
    const OPEN_CLASSNAME = 'SideNote-toggle--open';

    if (button.className.search(OPEN_CLASSNAME) === -1) {
      button.classList.add(OPEN_CLASSNAME);
    } else {
      button.classList.remove(OPEN_CLASSNAME);
    }
  });
}
