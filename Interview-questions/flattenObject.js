const input = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: {
      code: 12345,
      plus4: [1, 2, 3, { greeting: "Hello" }],
    },
  },
};

function flattenObject(obj, parentKey = "") {
  let ans = {};

  for (let key in obj) {
    let value = obj[key];

    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (value !== null && typeof value === "object") {
      const returnedObject = flattenObject(value, newKey);
      Object.assign(ans, returnedObject);
    } else {
      ans[newKey] = value;
    }
  }

  return ans;
}

console.log(flattenObject(input));
