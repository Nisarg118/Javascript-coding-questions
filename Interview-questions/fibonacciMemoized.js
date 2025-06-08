// Q:Implement a Memoized Fibonacci Generator with a Twist

// Create a function memoFib that returns a function which returns the Nth Fibonacci number, and caches results in a private store.

// js
// Copy
// Edit
// const getFib = memoFib();

// console.log(getFib(10)); // 55
// console.log(getFib(8));  // Should return from cache

const getFib = memoFib();

console.log(getFib(10)); // 55
console.log(getFib(8)); // Should return from cache

function memoFib() {
  let arr = [0, 1];
  function fibonacci(n) {
    if (n == 0) return arr[0];
    if (n == 1) return arr[1];

    if (n < arr.length) {
      console.log("Returned from cache : ", n);
      return arr[n];
    }

    return (arr[n] = fibonacci(n - 1) + fibonacci(n - 2));
  }
  return function (num) {
    return fibonacci(num);
  };
}
