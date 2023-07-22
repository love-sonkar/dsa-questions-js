var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else return digits;
  }
  // this unshift is because if we get [9,9,9] in input so all we have to do is plus one but when we add 1 in last it becomes 10 but in condition if we get any number who is greater then 9 so we put 0 in his place
  // so our digits become [0,0,0] so for fixing we unshift(1) that's why we use unshift function to put 1 in front of the array
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9]));
