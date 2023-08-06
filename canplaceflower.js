var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1) {
      if (
        flowerbed[i == flowerbed.length - 1 ? i : i + 1] == 0 &&
        flowerbed[i == 0 ? i : i - 1] == 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  console.log(flowerbed);
  return n <= 0 ? true : false;
};

// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));

// this solution is not so good because when the i pointer is in 0th position and we do i-1 we get undefined and we compare with undefined value is some case the code is break that's why this solution is not recommended
var canPlaceFlowers2 = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] !== 1 &&
      flowerbed[i - 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n <= 0 ? true : false;
};

// console.log(canPlaceFlowers2([0, 1, 0, 0, 1], 1));

var compress = function (chars) {
  let j = 0;
  let count = 1;
  for (let i = 1; i <= chars.length; i++, count++) {
    if (i == chars.length || chars[i] !== chars[i - 1]) {
      chars[j] = chars[i - 1];
      j++;
      if (count >= 2) {
        for (count of count.toString()) {
          chars[j] = count;
          j++;
        }
      }
      count = 0;
    }
  }
  chars.length = j;
  return j;
};

// console.log(compress(["a", "a", "b", "b", "c", "c"]));

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[low]) {
      if (target <= nums[mid] && target >= nums[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(search([5, 1, 3], 3));

var findMin = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[0];
};

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return nums[i];
    }
  }
};

// console.log(findDuplicate([1, 3, 4, 2, 3]));

var mostWordsFound = function (sentences) {
  let maxword = sentences[0].split(" ").length;
  for (let i = 1; i < sentences.length; i++) {
    length = sentences[i].split(" ").length;
    if (maxword < length) {
      maxword = length;
    }
  }
  return maxword;
};

// console.log(
//   mostWordsFound([
//     "w jrpihe zsyqn l dxchifbxlasaehj",
//     "qstd zui nbbohtuk",
//     "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
//   ])
// );

var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  // this is my solution
  // for (let i = 0; i < jewels.length; i++) {
  //   for (let j = 0; j < stones.length; j++) {
  //     if (jewels[i] == stones[j]) {
  //       count++;
  //     }
  //   }
  // }
  return count;
};

console.log(numJewelsInStones("ZA", "ZAZAABAXXX"));

var subtractProductAndSum = function (n) {
  let multi = 1;
  let sum = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    n = Math.floor(n / 10);
    sum += lastdigit;
    multi *= lastdigit;
  }
  return multi - sum;
};

console.log(subtractProductAndSum(100));

var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let result = accounts[i].reduce((acc, curr) => acc + curr);
    if (result > max) {
      max = result;
    }
  }
  return max;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

var runningSum = function (nums) {
  let resultarray = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    resultarray[i] = nums[i] + sum;
    sum += nums[i];
  }
  return resultarray;
};

console.log(runningSum([1, 1, 1, 1, 1]));

var decode = function (encoded, first) {
  let result = [first];
  let xor = first;
  for (let i = 0; i < encoded.length; i++) {
    xor = xor ^ encoded[i];
    result.push(xor);
  }
  return result;
};

console.log(decode([6, 2, 7, 3], 4));
