function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    } else {
      return sum(a + b);
    }
  };
}

const result = sum(1)(2)();

console.log(result);
