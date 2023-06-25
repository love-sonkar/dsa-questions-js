//test code's

// const ReverseString = function (string) {
//   let splitS = string.split(" ");
//   let stack = [];
//   for (let i of splitS) {
//     stack.push(i);
//   }

//   let ResultString = "";

//   while (stack.length) {
//     let current = stack.pop();

//     if (current) {
//       ResultString += " " + current;
//     }
//   }

//   return ResultString.trim();
// };

// console.log(ReverseString("  the sky is   blue  "));

// const ReversFunction = function (s) {
//   let splitS = s.split(" ");
//   let revreseString = "";
//   while (splitS.length) {
//     let currentVal = splitS.pop();
//     if (currentVal) {
//       revreseString += " " + currentVal;
//     }
//   }
//   return revreseString.trim();
// };

// console.log(ReversFunction("the   sky is   blue  "));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Example 1: Input: s = "A man, a plan, a canal: Panama" ==Explanation: "amanaplanacanalpanama" is a palindrome.
// Output: true

const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  if (s == " ") return true;
  for (let i = 0; i < s.length; i++) {
    let StrReverse = s.split("").reverse().join("");
    if (s[i] !== StrReverse[i]) return false;
  }
  return true;
};

console.log(isPalindrome("op"));

// const isPalindrome = function (s) {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s[i] !== s[j]) return false;
//   }
//   return true;
// };

// console.log(isPalindrome("race a car"));
