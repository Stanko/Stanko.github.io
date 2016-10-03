const commentsLink = document.querySelector('.Post-commentsLink');
const comments = document.querySelector('#comments');
const postBgArchive = document.querySelector('.Post-bg--archive');

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
  animateScrollTo(getElementOffset(comments).top);
});


if (postBgArchive) {
  const id = Math.floor(Math.random() * (2 - 0)) + 0;
  const src = postBgArchive.getAttribute('data-src').replace('ID', id);
  postBgArchive.setAttribute('src', src);
}
