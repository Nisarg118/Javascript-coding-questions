//  Deep Freeze

// Implement a function deepFreeze(obj) that recursively freezes an object and all nested objects.

// function deepFreeze(obj) {
//   // Your code here
// }

// const data = {
//   name: "Nisarg",
//   nested: {
//     age: 24,
//     likes: {
//       language: "JS"
//     }
//   }
// };

// deepFreeze(data);
// data.nested.likes.language = "Python"; // Should not change

// console.log(data.nested.likes.language); // Still "JS"

function deepFreeze(obj) {
  // Your code here
  Object.freeze(obj);

  for (let key in obj) {
    if (
      obj[key] !== null &&
      (typeof obj[key] === "object" || typeof obj[key] === "function") &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
}

const data = {
  name: "Nisarg",
  nested: {
    age: 24,
    likes: {
      language: "JS",
    },
  },
};

deepFreeze(data);
data.nested.likes.language = "Python";

console.log(data.nested.likes.language);
