// palidrome number
// an integer is a palidrome when it reads the same forward and backword
let isPalindrome = function (x) {
  let ConvertString = String(x);
  let Reverse = ConvertString.split("").reverse();
  for (let i = 0; i < ConvertString.length; i++) {
    if (ConvertString[i] !== Reverse[i]) return false;
  }
  return true;
};

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

console.log(CheckPalidrome("A man, a plan, a canal: Panama"));

let str = "hello";
for (char in str) {
  console.log(char);
}
// console.log(str.length);
