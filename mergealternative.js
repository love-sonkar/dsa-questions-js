var mergeAlternately = function (word1, word2) {
  let newstring = "";
  let count = word1.length + word2.length;
  for (let i = 0; i < count; i++) {
    if (word1[i] === undefined) {
      newstring = newstring + word2[i];
    } else if (word2[i] === undefined) {
      newstring = newstring + word1[i];
    } else {
      newstring = newstring + word1[i] + word2[i];
      count--;
    }
  }
  return newstring;
};

console.log(mergeAlternately("aas", "pqcad"));

// var findDifference = function (nums1, nums2) {
//   let answer0 = [];
//   let answer1 = [];
//   for (let i = 0, j = nums2.length - 1; i < nums1.length; ) {
//     if (nums1[i] !== nums2[j]) {
//       if (j == i + 1) {
//         answer0.push(nums1[i]);
//         i++;
//       }
//     }
//     j--;
//   }
//   return answer0;
// };

// console.log(findDifference([1, 2, 3], [2, 4, 6]));

var findMedianSortedArrays = function (nums1, nums2) {
  let newarr = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] < nums2[j] || j == nums2.length) {
      newarr.push(nums1[i]);
      i++;
    } else {
      newarr.push(nums2[j]);
      j++;
    }
  }
  let length = newarr.length;
  if (length % 2 !== 0) {
    return newarr[Math.floor(length / 2)];
  } else {
    let mid = Math.floor(length / 2);
    let miden = (newarr[mid] + newarr[mid - 1]) / 2;
    return miden;
  }
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));
