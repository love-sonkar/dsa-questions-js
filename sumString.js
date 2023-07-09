function SumString(num1, num2) {
  let res = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry != 0) {
    let ival = i >= 0 ? num1.charAt(i) - 0 : 0;
    let jval = j >= 0 ? num2.charAt(j) - 0 : 0;
    let sum = ival + jval + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res;
}

console.log(SumString("2801", "120"));
