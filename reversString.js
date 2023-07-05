function ReverseString(str) {
  str = str.split("");
  let data = [];
  for (let i = str.length - 1; i >= 0; i--) {
    data[data.length] = str[i];
  }
  return data;
}

// one line reversestring
function StringReverse(str) {
  return str.split("").reverse();
}

var arrayStringsAreEqual = function (word1, word2) {
  let x = word1.toString().replace(/[,]/g, "");
  let y = word2.toString().replace(/[,]/g, "");
  if (x === y) return true;
  return false;
};

// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("hih alkjsd al  kajklsdf aseasdfsfai"));

let obj = {};
console.log(Object.keys(obj) == 0);
