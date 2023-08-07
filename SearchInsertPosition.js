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

// console.log(missingNumber([0, 1, 3]));

var targetIndices = function (nums, target) {
  let list = [];
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) list.push(i);
  }
  return list;
};

// console.log(targetIndices([1, 2, 5, 2, 3], 3));

var majorityElement = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
console.log(majorityElement([1, 1, 1, 2, 2, 2, 2]));

var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]] !== "" && target[index[i]] !== undefined) {
      for (let j = target.length - 1; j >= target[index[i]]; j--) {
        let temp = target[j];
        target[j + 1] = temp;
      }
      target[index[i]] = nums[i];
    } else {
      target[index[i]] = nums[i];
    }
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
