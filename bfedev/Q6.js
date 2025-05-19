const obj = {
  name: "Silver Surfer",
  outer() {
    const inner = () => {
      console.log("inner this:", this); // arrow functions inherit `this`
    };
    inner();
  },
};

obj.outer();
