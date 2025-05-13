// const arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function (Fn, thisArg) {
//   if (typeof Fn !== "function") {
//     throw new TypeError(Fn + "is not a function");
//   }

//   const result = new Array(this.length);

//   let i = 0;

//   while (i < this.length) {
//     if (this.hasOwnProperty(i)) {
//       const value = this[i];
//       const newValue = Fn.call(thisArg, value, i, this);
//       result[i] = newValue;
//     }
//     i++;
//   }

//   return result;
// };

// function getSquares(num) {
//   return num * num;
// }

// const result = arr.myMap(getSquares);

// console.log(result);

const arr = [1, 2, 3, 4, 5];

function myMap(arr, Fn) {
  let ans = [];
  if (typeof Fn !== "function") {
    throw new TypeError("not a function ");
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const newValue = Fn(value, i);
    ans[i] = newValue;
  }

  return ans;
}

const ans = myMap(arr, getSquares);

function getSquares(num, ind) {
  return num * num;
}

console.log(ans);
