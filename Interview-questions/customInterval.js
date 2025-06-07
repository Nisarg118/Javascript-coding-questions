// Q: Implement Custom setInterval Using setTimeout

// Recreate the behavior of setInterval using only setTimeout.

// function customInterval(callback, delay) {
//   // Your code here
// }

// let count = 0;
// customInterval(() => {
//   console.log("Count:", ++count);
//   if (count === 3) {
//     // stop interval here
//   }
// }, 1000);

function customInterval(fn, delay) {
  // Your code here
  let timerId;
  function temp() {
    timerId = setTimeout(() => {
      fn();
      temp();
    }, delay);
  }

  temp();
  return function myClearTimeInterval() {
    clearTimeout(timerId);
  };
}

let count = 0;
let stop = customInterval(() => {
  console.log("Count:", ++count);
  if (count === 3) {
    stop();
  }
}, 1000);
