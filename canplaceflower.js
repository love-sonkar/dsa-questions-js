var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1) {
      if (
        flowerbed[i == flowerbed.length - 1 ? i : i + 1] == 0 &&
        flowerbed[i == 0 ? i : i - 1] == 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  console.log(flowerbed);
  return n <= 0 ? true : false;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));

// this solution is not so good because when the i pointer is in 0th position and we do i-1 we get undefined and we compare with undefined value is some case the code is break that's why this solution is not recommended
var canPlaceFlowers2 = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] !== 1 &&
      flowerbed[i - 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n <= 0 ? true : false;
};

console.log(canPlaceFlowers2([0, 1, 0, 0, 1], 1));
