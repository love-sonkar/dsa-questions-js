var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == val) {
      nums[i] = "_";
    } else {
      count++;
    }
  }
  nums.sort();
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3));
