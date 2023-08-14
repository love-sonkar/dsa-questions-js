var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        count++;
      }
    }
  }
  return count;
};

// console.log(countKDifference([1, 2, 2, 1], 1));

// this is brute forece solution
var maximizeSum = function (nums, k) {
  let score = 0;
  for (let i = 0; i < k; i++) {
    let maxindex = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[maxindex] < nums[j]) {
        maxindex = j;
      }
    }
    score += nums[maxindex];
    nums[maxindex] = nums[maxindex] + 1;
  }
  return score;
};

console.log(
  maximizeSum(
    [
      4, 4, 9, 10, 10, 9, 3, 8, 4, 2, 5, 3, 8, 6, 1, 10, 4, 5, 3, 2, 3, 9, 5, 7,
      10, 4, 9, 10, 1, 10, 4,
    ],
    6
  )
);

// this is optimul soliton
var maximizeSum2 = function (nums, k) {
  let maxnum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maxnum < nums[i]) {
      maxnum = nums[i];
    }
  }
  let score = maxnum;

  for (let i = 0; i < k - 1; i++) {
    maxnum++;
    score += maxnum;
  }
  return score;
};

console.log(maximizeSum2([5, 5, 5], 2));

var xorOperation = function (n, start) {
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ start;
    start += 2;
  }
  return xor;
};

console.log(xorOperation(4, 3));

var productExceptSelf = function (nums) {
  let res = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix *= nums[j];
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));

var minPartitions = function (n) {
  let output = n[0];
  for (let i = 1; i < n.length; i++) {
    if (output < n[i]) {
      output = n[i];
    }
  }
  return +output;
};

console.log(minPartitions("27346209830709182346"));

var rearrangeArray = function (nums) {
  let positive = [];
  let negetive = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negetive.push(nums[i]);
    }
  }
  let result = [];
  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negetive[i]);
  }
  return result;
};

console.log(rearrangeArray([-1, 1]));

var countDistinctIntegers = function (nums) {
  for (num of nums) {
    let newval = String(num);
  }
  return nums;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31]));

var createTargetArray = function (nums, index) {
  let target = [],
    max = -1;
  for (let i = 0; i < index.length; i++) {
    if (index[i] <= max) {
      for (let j = 0; j < i; j++) {
        if (index[i] <= index[j]) index[j]++;
        if (index[j] > max) max = index[j];
      }
    }
    max = Math.max(max, index[i]);
  }
  for (const i in nums) target[index[i]] = nums[i];
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

// not fully done
// var findKthLargest = function (nums, k) {
//   if (nums.length == 1) return nums[0];
//   if (nums[k] == undefined) return nums[nums.length - 1];
//   let output;

//   for (let i = k; i < nums.length; i++) {
//     if (nums[k] < nums[i]) {
//       output = nums[i];
//       break;
//     }
//   }

//   if (output === undefined) {
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[k] < nums[i]) {
//         output = nums[i];
//       }
//     }
//   }
//   return output;
// };

// console.log(findKthLargest([99, 99], 1));

var findDuplicates = function (nums) {
  let output = [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;

    if (obj[nums[i]] == 2) {
      output.push(nums[i]);
    }
  }

  return output;
};

console.log(findDuplicates([1, 1, 2]));

var singleNonDuplicate = function (nums) {
  let obj = {};
  for (num of nums) {
    if (obj[num] == undefined) {
      obj[num] = 0;
    }
    obj[num]++;
  }

  for (num of nums) {
    if (obj[num] < 2) {
      return num;
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

var singleNonDuplicate2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    } else {
      i++;
    }
  }
};

console.log(singleNonDuplicate2([1, 1, 2, 2, 3, 3, 4, 4, 8]));
