function createScoreTracker(n) {
  let flag = true;
  return function fun() {
    if (flag) {
      flag = false;
      return n;
    }
    n++;
    return n;
  };
}
module.exports = createScoreTracker;
