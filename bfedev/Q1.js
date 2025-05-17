function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedFn = curry(add);

console.log(curriedFn(1));
console.log(curriedFn(1, 2));
console.log(curriedFn(1, 2, 3));
