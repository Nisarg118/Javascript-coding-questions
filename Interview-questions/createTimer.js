// 🧠 Challenge: Create a createTimer() Function
// 🔧 Requirements:
// When called, it should return an object with:

// start() → Starts the timer

// stop() → Stops the timer and returns the time elapsed in seconds

// reset() → Resets the timer to 0

// getElapsed() → Returns how much time has passed (without stopping)

// Internals like startTime, endTime, and isRunning must be private.

// No use of class or this.

// 🧪 Example usage:
// const timer = createTimer();

// timer.start();

// setTimeout(() => {
//   console.log(timer.getElapsed()); // ~2 (seconds)
//   console.log(timer.stop());       // ~2 (seconds)
//   console.log(timer.getElapsed()); // same as above (since it’s stopped)

//   timer.reset();
//   console.log(timer.getElapsed()); // 0
// }, 2000);

function createTimer() {
  let startTime = 0;
  let stopTime = 0;
  let elapsed = stopTime;
  return {
    start: function () {
      if (startTime) {
        startTime = Date.now() - elapsed; //This is not exact time for subsequent starts.it helps in calculating cooldown period between stop to start in an example -> start-stop-start
        stopTime = 0;
      } else {
        startTime = Date.now();
      }
    },
    stop: function () {
      if (stopTime) return Math.floor(elapsed / 1000);
      stopTime = Date.now();
      elapsed = stopTime - startTime;
      return Math.floor(elapsed / 1000);
    },
    reset: function () {
      startTime = 0;
      stopTime = 0;
      elapsed = 0;
    },
    getElapsed: function () {
      if (startTime === 0) {
        return 0;
      } else if (stopTime === 0) {
        return Math.floor((Date.now() - startTime) / 1000);
      } else if (stopTime) {
        return Math.floor(elapsed / 1000);
      }
    },
  };
}

const timer = createTimer();

timer.start();

setTimeout(() => {
  timer.stop();

  setTimeout(() => {
    timer.start();
    setTimeout(() => {
      console.log(timer.getElapsed());
    }, 2000);
  }, 2000);
}, 2000);
