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

// console.log(isPalindrome("op UU"));

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

// var expect = function (val) {
//   let expectval = val;
//   let toBe = function (valf) {
//     if (expectval === valf) return { value: true };
//     return { error: "Not Equal" };
//   };
//   let notToBe = function (valf) {
//     if (valf !== expectval) return { value: true };
//     return { error: "Equal" };
//   };
//   return { toBe, notToBe };
// };
// console.log(expect(5).toBe("dkj"));
// console.log(expect(5).notToBe(6));

var rotate = function (nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// fizzbuzz

var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 == 0) {
      answer.push("Fizz");
    } else if (i % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(i);
    }
  }
  return answer;
};

// console.log(fizzBuzz(15));

var checkPerfectNumber = function (num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      result += i;
    }
  }
  if (result !== num) return false;
  return true;
};
// console.log(checkPerfectNumber(28));

let array = [20, 10, 8];

//this is my function to sort arry in ascending order
function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(BubbleSort([2, 0, 2, 1, 1, 0]));

const sortArrayByParityII = (arr) => {
  let res = [];
  let evenIndex = 0;
  let oddIndex = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res[evenIndex] = arr[i];
      evenIndex = evenIndex + 2;
    } else {
      res[oddIndex] = arr[i];
      oddIndex = oddIndex + 2;
    }
  }
  return res;
};

// console.log(sortArrayByParityII([3, 2, 5, 7]));

var findTheDifference = function (s, t) {
  if (s == "") return t;
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }
};
// console.log(findTheDifference("abcd", "aebcd"));
