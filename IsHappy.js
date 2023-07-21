var isHappy = function (n) {
  let sum;
  while (n > 1) {
    let lastdigit = n % 10;
    n = Math.floor(n / 10);
    sum += lastdigit * lastdigit;
    if (sum == 0) {
      n = sum;
    }
  }
  return n == 1;
};
console.log(isHappy(456546584));

var isHappy2 = function (n) {
  while (n > 1) {
    let arr = n.toString().split(" ");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i];
    }
    n = parseInt(sum);
    // if (n === n) break;
  }
  return n == 1;
};

// console.log(isHappy2(2));
