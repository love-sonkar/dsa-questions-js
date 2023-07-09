// brute o(n^2)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// best solution

var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;
    if (obj[nums[i]] == 2) {
      return true;
    }
  }
  return false;
};

// console.log(containsDuplicate([1, 2, 3]));

var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;
    // if (obj[nums[i]] == 1) {
    //   return obj[nums[i]];
    // }
    console.log(obj);
    if (obj[nums[i]] <= 2) {
      return nums[i];
    }
  }
};

console.log(singleNumber([2, 2, 1]));
