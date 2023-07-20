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

console.log(twoSum([5, 25, 75], 100));

// optimal solution

var twoSumbest = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (numbers[i] + numbers[j] !== target) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return [i + 1, j + 1];
};

console.log(twoSumbest([5, 25, 75], 100));
