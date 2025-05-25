(function (w) {
  const timeoutIds = [];
  const originalTimeoutFn = window.setTimeout;

  w.setTimeout = function setTimeout(fn, delay) {
    const id = originalTimeoutFn(fn, delay);

    timeoutIds.push(id);

    return id;
  };

  w.clearAllTimeout = function clearAllTimeout() {
    while (timeoutIds.length) {
      clearTimeout(timeoutIds.pop());
    }
  };
})(window);
setTimeout(() => {
  console.log("One");
}, 1000);
setTimeout(() => {
  console.log("Two");
}, 2000);
setTimeout(() => {
  console.log("Three");
}, 3000);

clearAllTimeout();
