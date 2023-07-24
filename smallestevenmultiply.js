// burte force solution
var smallestEvenMultiple = function (n) {
  let i = 1;
  while (n) {
    if (i % 2 == 0 && i % n == 0) {
      return i;
    }
    i++;
  }
};

console.log(smallestEvenMultiple(3));

// optimal solution

let smallestEvenMultiplebest = function (n) {
  if (n % 2 == 0) {
    return n;
  }
  return n * 2;
};

console.log(smallestEvenMultiplebest(6));
