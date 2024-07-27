import animateScrollTo from 'animated-scroll-to';

function checkHash() {
  const hash = window.location.hash.replace('#/', '');

  if (hash) {
    const posts = document.querySelector(`#posts-${ hash }`);
    const section = document.querySelector(`#section-${ hash }`);

    if (posts) {
      posts.style.height = 'auto';
      posts.setAttribute('open', 1);
      window.location.hash = '';
      animateScrollTo(section);
    }
  }
}

checkHash();

function toggleSection(posts, postsContent) {
  const isOpen = posts.getAttribute('open') === '1';
  const isAnimating = posts.getAttribute('animating') === '1';

  if (isAnimating) {
    return;
  }

  posts.style.height = `${ postsContent.offsetHeight }px`;
  posts.setAttribute('animating', 1);

  if (isOpen) {
    setTimeout(function() {
      posts.style.height = 0;

      setTimeout(function() {
        posts.setAttribute('animating', 0);
      }, ANIMATION_DURATION);
    }, 30);
    posts.setAttribute('open', 0);
  } else {
    posts.setAttribute('open', 1);

    setTimeout(function() {
      posts.style.height = 'auto';
      posts.setAttribute('animating', 0);
    }, ANIMATION_DURATION);
  }
}

const ANIMATION_DURATION = 500;
const archiveToggles = document.querySelectorAll('.Archive-title a');

for (let i = 0; i < archiveToggles.length; i++) {
  const toggle = archiveToggles[i];

  toggle.addEventListener('click', function(e) {
    e.preventDefault();

    const link = e.currentTarget;
    const posts = link.parentElement.nextElementSibling;
    const postsContent = posts.querySelector('.Archive-postsContent');

    toggleSection(posts, postsContent);
  });
}
