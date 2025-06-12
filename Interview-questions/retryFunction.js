//  Q:Retry Wrapper
// Create a function retry that takes another function fn and a number times.
// It should retry fn() up to times times if it throws an error, and return the result once successful.

// js
// Copy
// Edit
// function retry(fn, times) {
//   // Your code here
// }

// let attempt = 0;
// const unstable = () => {
//   attempt++;
//   if (attempt < 3) throw new Error("Fail");
//   return "Success";
// };

// console.log(retry(unstable, 5)); // Expected: "Success"

function retry(fn, times) {
  // Your code here
  while (times > 0) {
    try {
      return fn();
    } catch (error) {
      times--;
    }
  }
}

let attempt = 0;
const unstable = () => {
  attempt++;
  if (attempt < 3) throw new Error("Fail");
  return "Success";
};

console.log(retry(unstable, 5)); // Expected: "Success"
