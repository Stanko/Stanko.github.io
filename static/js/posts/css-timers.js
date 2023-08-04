function initTimer($el) {
  const $timer = $el.querySelector(".timer");
  const $startStop = $el.querySelector(".timer-start-stop");

  const $log = $el.querySelector(".timer-log");

  const classNames = {
    RUNNING: "timer--running",
    PAUSED: "timer--paused",
    DONE: "timer--done",
  };

  console.log($startStop);

  $startStop.addEventListener("click", () => {
    if ($timer.classList.contains(classNames.RUNNING)) {
      // Already in the running state, toggle pause class
      $timer.classList.toggle(classNames.PAUSED);
    } else {
      // Start the timer
      $timer.classList.add(classNames.RUNNING);
    }
  });

  $timer.addEventListener("animationend", () => {
    $timer.classList.add(classNames.DONE);
    $timer.classList.remove(classNames.RUNNING);

    $log.innerHTML += `Timer finished: ${new Date().toLocaleTimeString()}<br/>`;
  });
}

document.querySelectorAll(".timer-demo").forEach(($el) => {
  initTimer($el);
});

// const $restart = document.querySelector(".timer-restart");

// const startStop = () => {
//   if ($timer.classList.contains(classNames.RUNNING)) {
//     // Already in the running state, toggle pause class
//     $timer.classList.toggle(classNames.PAUSED);
//   } else {
//     // Start the timer
//     $timer.classList.add(classNames.RUNNING);
//   }
// };

// $restart.addEventListener("click", () => {
//   $timer.classList.remove(classNames.PAUSED, classNames.RUNNING);

//   // https://stackoverflow.com/a/47184426
//   requestAnimationFrame(() => {
//     setTimeout(() => {
//       startStop();
//     }, 0);
//   });
// });
