// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return i;
};

// console.log(searchInsert([1, 3, 5, 6], 3));

// my old solution

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) return i;
//     if (nums[i] > target) return i;
//   }
//   return nums.length;
// };

var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
};

// console.log(searchInsert([], 7));

var missingNumber = function (nums) {
  let n = nums.length;
  let expectedsum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return expectedsum - sum;
};

console.log(missingNumber([0, 1, 3]));
