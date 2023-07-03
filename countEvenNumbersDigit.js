var findNumbers = function (nums) {
  let count = 0;
  nums.map((item, i) => {
    if (item.toString().length % 2 == 0) count++;
  });
  return count;
};

console.log(findNumbers([12, 2325, 22, 9]));
