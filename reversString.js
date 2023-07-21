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

// console.log(lengthOfLastWord("hih alkjsd al  kajklsdf aseasdfsfai"));

// reverse array

var reverseString = function (s) {
  let newa = [];
  for (char in s) {
    newa[char] = s[s.length - 1 - char];
  }
  return newa;
};

// console.log(reverseString(["h", "e", "l", "l", "o"]));

var reverseString2 = function (s) {
  let data = [...s];
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log((s[j] = data[i]));
    j++;
  }
  return s;
};

// console.log(reverseString2(["h", "e", "l", "l", "o"]));

var integerReplacement = function (n) {
  let count = 0;
  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n - 1;
    }
    count++;
  }
  return count;
};

console.log(integerReplacement(65535));
