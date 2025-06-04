function flatArray(arr, level) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      ans.push(arr[i]);
    } else {
      if (level > 0) {
        let temp = flatArray(arr[i], level - 1);
        ans.push(...temp);
      } else {
        ans.push(arr[i]);
      }
    }
  }
  return ans;
}

console.log(flatArray([1, [2, 3, [4, [5]]], 6], 1));
