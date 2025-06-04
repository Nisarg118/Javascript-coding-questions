// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => func.apply(this, args), wait);
  };
}

//mobi
