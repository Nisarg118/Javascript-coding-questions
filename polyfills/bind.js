Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("this is not a function");
  }
  let context = thisArg || globalThis;
  let fn = this;
  return function (...bindArgs) {
    const key = Symbol();
    context[key] = fn;
    const ans = context.key(...args, ...bindArgs);
    delete context[key];
    return ans;
  };
};

function showVillian(n1, n2, n3) {
  console.log(this.name, n1, n2, n3);
}

const villian = { name: "Dr. Doom" };

const fn = showVillian.myBind(villian, "first");
fn("second", "third");
