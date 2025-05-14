const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (start, end) {
  let length = this.length;

  if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    let startIndex = length + start;
    start = Math.max(startIndex, 0);
  } else {
    start = Math.min(length, start);
  }

  if (end === undefined) {
    end = length;
  } else if (end < 0) {
    let endIndex = length + end;
    end = Math.max(endIndex, 0);
  } else {
    end = Math.min(length, end);
  }

  let result = [];

  for (let i = start; i < end; i++) {
    const value = this[i];
    result.push(value);
  }

  return result;
};

console.log(arr.myFilter(0));
