// Q1: Object Flattening

// Write a function flattenObject(obj) that takes a nested object and returns a new object with flattened keys using dot notation.

// const input = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//     },
//   },
// };

// Output:
// { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

function flattenObject(obj, parentkey = "", ans = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentkey ? `${parentkey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      flattenObject(obj[key], newKey, ans);
    } else {
      ans[newKey] = obj[key];
    }
  }

  return ans;
}
const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(flattenObject(input));
