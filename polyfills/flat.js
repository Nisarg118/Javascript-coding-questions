const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]];
Array.prototype.myFlat = function (level = 1) {
  let ans = [];

  const flatten = (arr, depth) => {
    for (let element of arr) {
      if (Array.isArray(element) && depth > 0) {
        flatten(element, depth - 1);
      } else {
        ans.push(element);
      }
    }
  };

  flatten(this, level);
  return ans;
};

console.log(arr.myFlat()); // default 1 level
console.log(arr.myFlat(2)); // 2 levels
console.log(arr.myFlat(Infinity)); // full flatten
