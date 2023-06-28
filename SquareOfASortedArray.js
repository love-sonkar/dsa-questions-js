// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// this one is optimize
var sortedSquares = function (nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let Square = nums[i] * nums[i];
    newArray.push(Square);
  }
  for (let i in nums) {
    let Square = nums[i] * nums[i];
    newArray.push(Square);
  }
  return newArray.sort((a, b) => a - b);
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));

// solution 2

var sortedSquares = function (nums) {
  let newArray = [];
  for (let i in nums) {
    let Square = nums[i] * nums[i];
    newArray.push(Square);
  }
  return newArray.sort((a, b) => a - b);
};

console.log(sortedSquares2([-7, -3, 2, 3, 11]));
