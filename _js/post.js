const commentsLink = document.querySelector('.Post-commentsLink');
const comments = document.querySelector('#comments');
const postBgArchive = document.querySelector('.Post-bg--archive');
const expandToggles = document.querySelectorAll('.Expandable-toggle');

function getElementOffset(element) {
    let top = 0, left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    }
}

commentsLink && commentsLink.addEventListener('click', function(e) {
  e.preventDefault();
  animateScrollTo(getElementOffset(comments).top, { maxDuration: 1000 });
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
