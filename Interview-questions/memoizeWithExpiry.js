// Time-based Memoization
// Create a memoizeWithExpiry(fn, expiry) function that memoizes any function fn such that results expire after expiry milliseconds.

// js
// Copy
// Edit
// const slowFn = (x) => {
//   console.log("Called!");
//   return x * 2;
// };

// const memoized = memoizeWithExpiry(slowFn, 2000);
// memoized(5); // Called! => 10
// memoized(5); // Cached => 10
// // After 2 seconds
// memoized(5); // Called! => 10 (expired)

function memoizeWithExpiry(fn, delay) {
  let obj = {};
  return function (...args) {
    let str = JSON.stringify(args);
    if (Object.hasOwn(obj, str)) {
      return obj[str];
    }

    obj[str] = fn.apply(this, args);

    setTimeout(() => delete obj[str], delay);

    return obj[str];
  };
}
const add = (a, b) => {
  console.log("Computing...");
  return a + b;
};

const memoAdd = memoizeWithExpiry(add, 2000);

console.log(memoAdd(2, 3)); // "Computing..." → 5
console.log(memoAdd(2, 3)); // Cached → 5
setTimeout(() => console.log(memoAdd(2, 3)), 2100); // "Computing..." again → 5
