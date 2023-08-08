var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.lengh; j++) {
      if (i < j || nums[i] - nums[j] == k) {
        count++;
      }
    }
  }
  return count;
};

console.log(countKDifference([1, 2, 2, 1], 1));
