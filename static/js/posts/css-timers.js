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

  // const playPause = () => {
  //   const $timer = $timers[activeIndex];

  //   if ($timer.classList.contains(classNames.RUNNING)) {
  //     // Already in the running state, toggle pause class
  //     $timer.classList.toggle(classNames.PAUSED);
  //   } else {
  //     // Make sure to set previous timers to done
  //     getPrevSiblings($timer).forEach(($sibling) => {
  //       $sibling.classList.add(classNames.DONE);
  //       $sibling.classList.remove(classNames.RUNNING);
  //     });
  //     // Make sure to set next timers to the initial state
  //     getNextSiblings($timer).forEach(($sibling) => {
  //       $sibling.classList.remove(classNames.RUNNING, classNames.DONE);
  //     });

  //     // Start the timer
  //     $timer.classList.add(classNames.RUNNING);
  //     $timer.classList.remove(classNames.DONE);
  //   }
  // };

  // const $jumpButtons = $el.querySelectorAll(".timer-jump");
  // const getIsPlaying = () => {
  //   let isPlaying = false;

  //   for (let i in $timers) {
  //     if (
  //       $timers[i].classList.contains(classNames.RUNNING) &&
  //       !$timers[i].classList.contains(classNames.PAUSED)
  //     ) {
  //       isPlaying = true;
  //       break;
  //     }
  //   }

  //   return isPlaying;
  // };

  // $jumpButtons.forEach(($button) => {
  //   $button.addEventListener("click", () => {
  //     const isPlaying = getIsPlaying();
  //     console.log(isPlaying);

  //     activeIndex = parseInt($button.dataset.index, 10);
  //     const $timer = $timers[activeIndex];

  //     // Make sure to set previous timers to done
  //     getPrevSiblings($timer).forEach(($sibling) => {
  //       $sibling.classList.add(classNames.DONE);
  //       $sibling.classList.remove(classNames.RUNNING);
  //     });
  //     // Make sure to set next timers to the initial state
  //     getNextSiblings($timer).forEach(($sibling) => {
  //       $sibling.classList.remove(classNames.RUNNING, classNames.DONE);
  //     });

  //     if (isPlaying) {
  //       // Start the timer
  //       $timer.classList.add(classNames.RUNNING);
  //       $timer.classList.remove(classNames.DONE);
  //     } else {
  //       $timer.classList.add(classNames.DONE);
  //     }
  //   });
  // });
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
