var isUgly = function (n) {
  if (2 * 3 == n || 5 * 3 == n || 5 * 2 == n) return true;
  if (n == 1) return true;
  return false;
};

console.log(isUgly(1));
