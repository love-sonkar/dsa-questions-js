let findsqr = function (n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    if (i * i <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
};

// console.log(findsqr(8));

var isPerfectSquare = function (num) {
  for (let i = 0; i <= num; i++) {
    let sqr = i * i;
    if (sqr == num) {
      return true;
    } else if (sqr > num) {
      return false;
    }
  }
};
