function fun(arg1, arg2) {
  return `hello ${this.name} ${arg1} ${arg2}`;
}

const person = {
  name: "Hey",
};

Function.prototype.myCall = function (obj, ...args) {
  obj.fn = this;
  const ans = obj.fn(...args);
  delete obj.fn;
  return ans;
};

console.log(fun.myCall(person, "this", "is"));
