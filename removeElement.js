// best solution

var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

console.log(removeElement([3, 2, 2, 3], 3));

// optimal solution

var removeElement = function (nums, val) {
  let count = 0;
  let newarr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newarr.push(nums[i]);
      count++;
    }
  }

  for (let i = 0; i < newarr.length; i++) {
    nums[i] = newarr[i];
  }
  return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
