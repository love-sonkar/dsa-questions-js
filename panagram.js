var checkIfPangram = function (sentence) {
  let obj = {};
  for (char of sentence) {
    if (!obj[char]) {
      obj[char] = 1;
    }
    obj[char]++;
  }
  if (Object.keys(obj).length == 26) {
    return true;
  }
  return false;
};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

var divideArray = function (nums) {
  let obj = {};
  for (num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (num of nums) {
    if (obj[num] % 2 !== 0) return false;
  }
  return true;
};

// console.log(divideArray([3, 1, 3, 2, 2, 2, 2]));

var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] == nums[i]) {
      nums[i] = "_";
      index++;
    }
  }
  console.log(nums.sort());
  return index + 1;
};

// console.log(removeDuplicates([1, 1, 2]));

var divide = function (dividend, divisor) {
  let div = dividend / divisor;
  let result = Math.floor(div % 10);
  return result;
};

// console.log(divide(7, -3));

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 1));

var reverseOnlyLetters = function (s) {
  let lastElement = s.length - 1;
  for (let i = 0; i < lastElement; i++) {
    if (
      s[i].toUpperCase() === s[i].toLowerCase() ||
      s[lastElement].toUpperCase() === s[lastElement].toLowerCase()
    ) {
      console.log(i);
      let temp = s[lastElement];
      s[i] = s[lastElement];
      s[lastElement] = temp;
      lastElement--;
    }
    console.log(lastElement);
  }
  return s;
};

// console.log(reverseOnlyLetters("ab-cd"));

var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack[this.stack.length] = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let remove = this.stack[this.stack.length - 1];
  this.stack.length = this.stack.length - 1;
  return remove;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.empty()) return [];
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.stack.length == 0) return true;
  return false;
};

let myStack = new MyStack();

myStack.top(), // return 2
  myStack.push(1),
  myStack.push(2),
  myStack.pop(), // return 2
  myStack.empty();
// return False

var addDigits = function (num) {
  while (num >= 10) {
    let lastElement = num % 10;
    let firstElement = Math.floor(num / 10);
    num = lastElement + firstElement;
  }
  return num;
};

console.log(addDigits(10));
