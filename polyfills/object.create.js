const superHero = {
  name: "Silver surfer",
};

Object.prototype.myCreate = function (parentObject, valuesObject) {
  function f() {}

  f.prototype = parentObject;

  const newObj = new f();

  Object.defineProperties(newObj, valuesObject);

  return newObj;
};

const obj = Object.myCreate(superHero, { origin: { value: "asdasd" } });

console.log(obj);
