// Q: Deep Object Comparison

// Write a function deepEqual(obj1, obj2) that returns true if the objects are deeply equal.

// deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }) // true
// deepEqual({ a: 1 }, { a: 1, b: undefined })             // false
// Edge Cases:

// Handle nested objects and arrays.

// Functions and circular references not required.

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1 }, { a: 1, b: undefined })); // false

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }

  return keys1.every(function (key) {
    return deepEqual(obj1[key], obj2[key]);
  });
}
