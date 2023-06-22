function AnagramCheck(str1, str2) {
  str1.split("").sort();
  str2.split("").sort();
  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) return true;
    }
  }
  return false;
}

console.log(AnagramCheck("hiii", "catir"));
