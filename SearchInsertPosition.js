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

console.log(searchInsert([1, 3, 5, 6], 2));

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

console.log(searchInsert([], 7));
