function debounce(fn, wait) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => fn.call(...args), wait);
  };
}


