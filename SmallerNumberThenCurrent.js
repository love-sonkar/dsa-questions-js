const smallerNumbersThanCurrent = function (nums) {
  if (nums.length <= 1) return [0];
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    array.push(count);
  }
  return array;
};
console.log(smallerNumbersThanCurrent([6, 6, 6]));
