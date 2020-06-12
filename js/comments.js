const commentForm = document.querySelector('.CommentForm');
const commentFormInputs = document.querySelectorAll('.CommentForm-input');
const slugInput = document.querySelector('.CommentForm-input--slug');
const optionsSlugInput = document.querySelector('.CommentForm-input--optionsSlug');
const nameInput = document.querySelector('.CommentForm-input--name');
const catchInput = document.querySelector('.CommentForm-input--catch');
const emailInput = document.querySelector('.CommentForm-input--email');
const messageInput = document.querySelector('.CommentForm-input--message');
const errorMessagesDiv = document.querySelector('.CommentForm-errorMessages');
const sendFailedDiv = document.querySelector('.CommentForm-sendFailed');
const sendSucceededDiv = document.querySelector('.CommentForm-sendSucceeded');
const overlayDiv = document.querySelector('.CommentForm-overlay');

function post(url, data, callback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.status !== 200) {
      errorCallback(xhr.responseText);
    }
  };
  xhr.send(encodeURI(data));
}

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessagesDiv.innerHTML = '';
    sendFailedDiv.style.display = 'none';
    sendSucceededDiv.style.display = 'none';

    const slug = slugInput.value.trim();
    const optionsSlug = optionsSlugInput.value.trim();
    const name = nameInput.value.trim();
    const catchValue = catchInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const spKey = '__s_p__';
    const sp = localStorage.getItem(spKey);

    let error = false;
    const messages = [];
    const spamFilter = ['bully', 'bullies', 'bullying', 'abuser', 'violent', 'criminal'];

    if (slug === '' || slug !== optionsSlug || catchValue !== '') {
      return false;
    }

    if (name.length < 2) {
      error = true;
      messages.push('Please enter name');
    }

    if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
      error = true;
      messages.push('Please enter valid email');
    }

    if (message.length < 2) {
      error = true;
      messages.push('Please enter message');
    }

    if (error) {
      errorMessagesDiv.innerHTML = messages.join('<br>');
      return false;
    }

    for (let i = 0; i < spamFilter.length; i++) {
      const spamWord = spamFilter[i];
      if (
        sp ||
        name.toLowerCase().indexOf(spamWord) >= 0 ||
        email.toLowerCase().indexOf(spamWord) >= 0 ||
        message.toLowerCase().indexOf(spamWord) >= 0
      ) {
        commentForm.reset();
        localStorage.setItem(spKey, '_');
        sendSucceededDiv.style.display = 'block';
        return false;
      }
    }

    const params = [];

    for (let i = 0; i < commentFormInputs.length; i++) {
      const input = commentFormInputs[i];
      params.push(`${ input.name }=${ input.value }`);
    }

    overlayDiv.style.display = 'flex';

    post(
      e.target.getAttribute('data-action'),
      params.join('&'),
      function(text){
        commentForm.reset();
        sendSucceededDiv.style.display = 'block';
        overlayDiv.style.display = 'none';
      },
      function(text){
        sendFailedDiv.style.display = 'block';
        overlayDiv.style.display = 'none';
      }
    );
  });
}
