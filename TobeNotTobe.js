var expect = function (val) {
  return {
    toBe(otherVal) {
      if (val === otherVal) return true;
      throw new Error("Not Equal");
    },
    notToBe(otherVal) {
      if (val !== otherVal) return true;
      throw new Error("Equal");
    },
  };
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
