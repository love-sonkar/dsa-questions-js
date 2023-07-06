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

// console.log(AnagramCheck("hiii", "catir"));

// anagram best solution
function CheckAnagram(str1, str2) {
  let check = {};
  if (str1.length !== str2.length) return false;
  for (char of str1) {
    check[char] = (check[char] || 0) + 1;
  }
  for (char of str2) {
    if (!check[char]) return false;
    check[char]--;
  }
  console.log(check);
  return true;
}

let result = CheckAnagram("hello", "hlleo");
console.log(result);
