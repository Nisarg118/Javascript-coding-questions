const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new Error("Fn is not a function");
  }

  if (this === null) {
    throw new error("Invalid data");
  }

  if (!this.length && !initialValue) {
    throw new Error("Reduce of empty array with no initialValue");
  }

  const init = initialValue ? initialValue : this[0];
  let index = initialValue ? 0 : 1;
  let acc = init;
  while (index < this.length) {
    const nextValue = this[index];
    acc = callbackFn(acc, nextValue, index, this);
    index++;
  }
  return acc;
};

function ad(acc, next, ind, arr) {
  return acc + next;
}

let ans = arr.myReduce(ad, 0);

console.log(ans);
