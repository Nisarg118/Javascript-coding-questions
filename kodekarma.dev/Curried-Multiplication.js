const multiply = (a) => {
  return function (b) {
    if (b === undefined) {
      return a;
    } else {
      return multiply(a * b);
    }
  };
};

module.exports = multiply;
