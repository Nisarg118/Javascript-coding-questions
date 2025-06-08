// Q:Implement a function deepClone that performs a deep copy of an object, including arrays and nested objects — but assume no circular references yet.

// const obj = {
//   name: "Nisarg",
//   details: {
//     age: 24,
//     skills: ["JS", "Node", { name: "MongoDB" }],
//   },
// };

// const clone = deepClone(obj);

// console.log(clone);
// console.log(clone === obj); // false
// console.log(clone.details === obj.details); // false
// console.log(clone.details.skills === obj.details.skills); // false
// console.log(clone.details.skills[2] === obj.details.skills[2]); // false

const obj = {
  name: "Nisarg",
  details: {
    age: 24,
    skills: ["JS", "Node", { name: "MongoDB" }],
  },
};

const clone = deepClone(obj);

console.log(clone);
console.log(clone === obj); // false
console.log(clone.details === obj.details); // false
console.log(clone.details.skills === obj.details.skills); // false
console.log(clone.details.skills[2] === obj.details.skills[2]); // false

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let ans = {};

  if (Array.isArray(obj)) {
    return obj.map((element) => deepClone(element));
  }

  for (let key in obj) {
    ans[key] = deepClone(obj[key]);
  }
  return ans;
}
