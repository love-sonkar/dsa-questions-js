//  1051. Height Checker

var heightChecker = function (heights) {
  let count = 0;
  let SortHeights = [...heights].sort((a, b) => a - b);
  console.log(SortHeights);
  for (let i = 0; i < heights.length; i++) {
    if (SortHeights[i] != heights[i]) {
      count++;
    }
  }
  return count;
};

console.log(heightChecker([-1, -3, 4, 2, 1, 3]));
