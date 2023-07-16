var countDigits = function (num) {
  let count = 0;
  let ConvertStr = num.toString();
  for (let i = 0; i < ConvertStr.length; i++) {
    if (num % ConvertStr[i] == 0) {
      count++;
    }
  }
  return count;
};
// console.log(countDigits(121));

var maximum69Number = function (num) {
  let maximumval = num;
  let str = num.toString();
  for (char in str) {
    str = str[char] === "9" ? "6" : "9";
    console.log(str);
  }
  //   return maximumval;
};

console.log(maximum69Number(9669));
