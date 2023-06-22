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
