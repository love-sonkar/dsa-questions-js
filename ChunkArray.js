var chunk = function (arr, size) {
  let result = [];
  let subarray = [];
  for (let i = 0; i < arr.length; i++) {
    subarray.push(arr[i]);
    if (subarray.length === size) {
      result.push(subarray);
      subarray = [];
    }
  }
  if (subarray.length > 0) {
    result.push(subarray);
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
