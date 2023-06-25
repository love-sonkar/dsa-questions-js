// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9 ===  Output: [0,1]
// [3,2,3] output = [0,2]

const twoSum = function (nums, target) {
  let output = [];
  if (nums.length <= 1) return [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        output.push(i, j);
        return output;
      }
    }
  }
  return null;
};
