var sumOfMultiples = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      sum += i;
    }
  }
  return sum;
};

// console.log(sumOfMultiples(9));

var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]]) {
    }
    target[index[i]] = nums[i];
  }
  return target;
};

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

var restoreString = function (s, indices) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

var reverse = function (x) {
  let num = x;
  let reverse = 0;
  if (num < 0) {
    num = -num;
  }
  while (num !== 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    reverse = reverse * 10 + lastDigit;
  }
  if (reverse > Math.pow(2, 31)) {
    return 0;
  } else {
    return x < 0 ? -reverse : reverse;
  }
};

// console.log(reverse(1563847412));

var defangIPaddr = function (address) {
  let newstr = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newstr += "[.]";
    } else {
      newstr += address[i];
    }
  }
  return newstr;
};

console.log(defangIPaddr("1.1.1.1"));
