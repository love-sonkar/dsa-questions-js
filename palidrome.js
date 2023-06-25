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
