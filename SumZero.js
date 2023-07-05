// checking sum zero of sorted array
// input = [-5,-4,-3,-2,0,2,4,5,8 ] output = [ , ]

let SumZero = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == 0) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
};

let result = SumZero([-5, -4, -3, 0, 2, 8]);
console.log(result);
