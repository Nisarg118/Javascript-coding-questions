function pipe(fns) {
  let result;
  return function (args) {
    result = args;

    for (let fn of fns) {
      result = fn.call(this, result);
    }

    return result;
  };
}
