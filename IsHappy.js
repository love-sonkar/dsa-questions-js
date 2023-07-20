var isHappy = function (n) {
  while (n > 1) {
    let sum = 0;
    let lastdigit = n % 10;
    n = Math.floor(n / 10);
    sum += lastdigit * lastdigit;
    n = sum;
  }
  return n == 1;
};
// console.log(isHappy(19));

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
