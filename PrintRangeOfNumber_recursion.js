// create an arry with range of numbers
//input : start = 1, end = 5 -->> outpur [1,2,3,4,5]

function RangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  let numbers = RangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

console.log(RangeOfNumbers(1, 5));
