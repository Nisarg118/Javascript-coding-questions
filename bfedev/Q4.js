/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(fn, wait) {
  let timeoutId = null;
  let lastArg = null;

  return function (...args) {
    if (!timeoutId) {
      fn.apply(this, args);
      timeoutId = setTimeout(() => {
        if (lastArg) {
          fn.apply(this, lastArg);
          lastArg = null;
        }
        timeoutId = null;
      }, wait);
    } else {
      lastArg = args;
    }
  };
}
