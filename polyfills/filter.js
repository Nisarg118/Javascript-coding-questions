// function myFilter(arr, Fn, thisArg) {
//   if (typeof Fn !== "function") {
//     throw new Error("Fn is not a function");
//   }
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];

//     const newValue = Fn.call(thisArg, value, i, arr);

//     newValue && ans.push(value);
//   }

//   return ans;
// }

// function evenNo(num, ind, arr) {
//   return num % this == 0;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// obj = { hey: 2 };

// let newArray = myFilter(arr, evenNo, obj.hey);

// console.log(newArray);

function evenNo(num, ind, arr) {
  return num % this == 0;
}

Array.prototype.myFilter = function (Fn, thisArg) {
  if (typeof Fn !== "function") {
    throw new Error("Fn is not function");
  }

  let i = 0;
  let ans = [];
  while (i < this.length) {
    if (this.hasOwnProperty(i)) {
      const value = this[i];
      const newValue = Fn.call(thisArg, value, i, this);
      if (newValue) {
        ans.push(value);
      }
    }
    i++;
  }
  return ans;
};

let arr = [1, 2, 3, 4, 5, 6];
let obj = { hey: 2 };

let newArr = arr.myFilter(evenNo, obj.hey);

console.log(newArr);
