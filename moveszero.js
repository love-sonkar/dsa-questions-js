var moveZeroes = function (nums) {
  let dummy = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      dummy[dummy.length] = nums[i];
    } else {
      count++;
    }
  }
  for (let i = 0; i < dummy.length + count; i++) {
    if (i >= dummy.length) {
      nums[i] = 0;
    } else {
      nums[i] = dummy[i];
    }
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

let movingZero = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }

  return nums;
};
console.log(movingZero([0, 0, 0, 0, 1, 0, 3, 12]));
