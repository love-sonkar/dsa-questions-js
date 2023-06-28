//test code's

const ReverseString = function (string) {
  let splitS = string.split(" ");
  let stack = [];
  for (let i of splitS) {
    stack.push(i);
  }

  let ResultString = "";

  while (stack.length) {
    let current = stack.pop();

    if (current) {
      ResultString += " " + current;
    }
  }

  return ResultString.trim();
};

// console.log(ReverseString("  the sky is   blue  "));

const ReversFunction = function (s) {
  let splitS = s.split(" ");
  let revreseString = "";
  while (splitS.length) {
    let currentVal = splitS.pop();
    if (currentVal) {
      revreseString += " " + currentVal;
    }
  }
  return revreseString.trim();
};

// console.log(ReversFunction("the   sky is   blue  "));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Example 1: Input: s = "A man, a plan, a canal: Panama" ==Explanation: "amanaplanacanalpanama" is a palindrome.
// Output: true

const isPalindrome = function (s) {
  let lower = s;
  console.log(lower == lower.toUpperCase());
  if (lower === lower.toUpperCase()) {
    lower = lower.toLowerCase().replace(/[^a-z0-9]/gi, "");
    console.log(lower);
  }
  if (lower == "") return true;
  for (let i = 0; i < lower.length; i++) {
    let StrReverse = lower.split("").reverse().join("");
    if (lower[i] !== StrReverse[i]) return false;
  }
  return true;
};

console.log(isPalindrome("op UU"));

// const isPalindrome = function (s) {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s[i] !== s[j]) return false;
//   }
//   return true;
// };

// console.log(isPalindrome("race a car"));

// Multiply Srring

//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// var multiply = function (num1, num2) {
//   let arr = [num1, num2];
//   let multiply = arr[0] * arr[1];
//   let last = multiply.toString();
//   if (last[last.length - 1] == 0) {
//     last[last.length - 1] += 9;
//   }
//   console.log(last);
//   return multiply;
// };

// console.log(multiply("123456789", "987654321"));

//34. Find First and Last Position of Element in Sorted Array

// var searchRange = function (nums, target) {
//   if (nums.length !== 0) {
//     let array = [];
//     for (let i = 0; i < nums.length; i++) {
//       if (target == nums[i]) array.push(i);
//     }
//     if (array.length == 0) return [-1, -1];
//     return [array[0], array[array.length - 1]];
//   } else if (nums.length == 0) return [-1, -1];
//   return [-1, -1];
// };
// console.log(searchRange([0], 0));

// var sum = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(sum(-11, 5));
