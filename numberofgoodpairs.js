var numIdenticalPairs = function (nums) {
  let i = 0;
  j = nums.length;
  count = 0;
  while (i < nums.length - 1) {
    if (nums[i] == nums[j]) {
      count++;
    }
    if (j == i + 1) {
      i++;
      j = nums.length;
    }
    j--;
  }
  return count;
};

// console.log(numIdenticalPairs([1, 2, 3]));

let numIdenticalPairsbest = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

var isThree = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) count++;
    if (count > 3) return false;
  }
  return count == 3;
};

console.log(isThree(5));
