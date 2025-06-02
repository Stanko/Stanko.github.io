var video5 = document.querySelector('#line-video-5');
var video100 = document.querySelector('#line-video-100');
var stickyVideosElement = document.querySelector('#sticky-videos');
var DURATION = 5; // videos are 5 seconds long

function scrubVideos() {
  var time = window.scrollY * 0.005;

  video5.currentTime = time;
  video100.currentTime = time;

  console.log(video5.currentTime, time);

  // Hide video when scrolled after it ended,
  // and after it was in the viewport some more time
  if (time > DURATION * 1.25) {
    stickyVideosElement.style.opacity = 0;
    stickyVideosElement.style.pointerEvents = 'none';
  } else {
    stickyVideosElement.style.opacity = 1;
    stickyVideosElement.style.pointerEvents = 'all';
  }
}

scrubVideos();
window.addEventListener('scroll', scrubVideos, { passive: true });
