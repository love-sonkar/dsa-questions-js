// question 2418 Sort the People

var sortPeople = function (names, heights) {
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (heights[j] < heights[j + 1]) {
        let tempnames = names[j + 1];
        names[j + 1] = names[j];
        names[j] = tempnames;
        let temp = heights[j + 1];
        heights[j + 1] = heights[j];
        heights[j] = temp;
      }
    }
  }
  return names;
};

console.log(
  sortPeople(
    [
      "IEO",
      "Sgizfdfrims",
      "QTASHKQ",
      "Vk",
      "RPJOFYZUBFSIYp",
      "EPCFFt",
      "VOYGWWNCf",
      "WSpmqvb",
    ],
    [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]
  )
);

// this solution is not optimize
