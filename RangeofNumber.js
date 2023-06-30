function RangeOfNumbers(start, end) {
  let arr = [];
  if (start > end) return [];
  let data = start + RangeOfNumbers(start + 1, end);
  arr.push(data);
  return arr;
}

console.log(RangeOfNumbers(1, 5));
