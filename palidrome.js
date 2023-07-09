// palidrome number
// an integer is a palidrome when it reads the same forward and backword
// time complexcity is o(n^2) because we use split and reverse function

let isPalindrome = function (x) {
  let ConvertString = String(x);
  let Reverse = ConvertString.split("").reverse();
  for (let i = 0; i < ConvertString.length; i++) {
    if (ConvertString[i] !== Reverse[i]) return false;
  }
  return true;
};

// best solution for integer value
// time complexcity is o(n)

function PalidromeInt(x) {
  let reverse = 0;
  let num = x;
  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + lastDigit;
  }
  if (x == reverse) return true;
  return false;
}

console.log(PalidromeInt(12211));

// palidrome string

function CheckPalidrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9+]+/gi, "");
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(CheckPalidrome("A man, a plan, a canal: Panama"));
