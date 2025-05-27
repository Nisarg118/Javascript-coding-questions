const timeoutIds = [];
const originalTimeoutFn = window.setTimeout;

window.setTimeout = function setTimeout(fn, delay) {
  const id = originalTimeoutFn(fn, delay);

  timeoutIds.push(id);

  return id;
};

function clearAllTimeout() {
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
}

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
