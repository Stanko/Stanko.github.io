const classNames = {
  RUNNING: "timer--running",
  PAUSED: "timer--paused",
  DONE: "timer--done",
};

document.querySelectorAll(".timer-demo").forEach(($el) => {
  const $timer = $el.querySelector(".timer");
  const $toggle = $el.querySelector(".timer-toggle");

  const $log = $el.querySelector(".timer-log");

  $toggle.addEventListener("click", () => {
    if ($timer.classList.contains(classNames.RUNNING)) {
      // Already in the running state, toggle pause class
      $timer.classList.toggle(classNames.PAUSED);
    } else {
      // Start the timer
      $timer.classList.add(classNames.RUNNING);
      $timer.classList.remove(classNames.DONE);
    }
  });

  $timer.addEventListener("animationend", () => {
    $timer.classList.add(classNames.DONE);
    $timer.classList.remove(classNames.RUNNING);

    $log.innerHTML += `Timer finished: ${new Date().toLocaleTimeString()}<br/>`;
  });

  let count = 0;
  $timer.addEventListener("animationiteration", () => {
    count++;
    $log.innerHTML += `Timer iteration ${count}: ${new Date().toLocaleTimeString()}<br/>`;
  });
});

document.querySelectorAll(".timer-chaining-demo").forEach(($el) => {
  const $timers = [...$el.querySelectorAll(".timer")];
  const $toggle = $el.querySelector(".timer-toggle");
  const $log = $el.querySelector(".timer-log");

  let activeIndex = 0;

  const playPause = () => {
    const $timer = $timers[activeIndex];

    if ($timer.classList.contains(classNames.RUNNING)) {
      // Already in the running state, toggle pause class
      $timer.classList.toggle(classNames.PAUSED);
    } else {
      // Start the timer
      $timer.classList.add(classNames.RUNNING);
      $timer.classList.remove(classNames.DONE);

      // Make sure to set next timers to the initial state
      $timers.slice(activeIndex + 1).forEach(($sibling) => {
        $sibling.classList.remove(classNames.DONE);
      });
    }
  };

  $toggle.addEventListener("click", playPause);

  $timers.forEach(($timer) => {
    $timer.addEventListener("animationend", () => {
      const $current = $timers[activeIndex];
      $current.classList.add(classNames.DONE);
      $current.classList.remove(classNames.RUNNING);

      $log.innerHTML += `Timer ${
        activeIndex + 1
      } finished: ${new Date().toLocaleTimeString()}<br/>`;

      if (activeIndex < $timers.length - 1) {
        activeIndex++;
        playPause();
      } else {
        // Reset
        activeIndex = 0;
      }
    });
  });
});
