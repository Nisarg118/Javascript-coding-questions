function deepClone(obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  if (typeof obj === "object") {
    let ans = {};
    for (let key in obj) {
      ans[key] = deepClone(obj[key]);
    }
    return ans;
  }
  return obj;
}

const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: { city: "Delhi", zip: 123456 },
};

const clone = deepClone(original);

// Test cases:
console.log(clone); // same content
console.log(clone === original); // false ✅
console.log(clone.address === original.address); // false ✅
console.log(clone.hobbies === original.hobbies); // false ✅
