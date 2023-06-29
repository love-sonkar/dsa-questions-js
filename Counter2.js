// closure function with solution

var createCounter = function (init) {
  let OrignalVal = init;
  return {
    increment() {
      return ++init;
    },
    decrement() {
      return --init;
    },
    reset() {
      init = OrignalVal;
      return init;
    },
  };
};
