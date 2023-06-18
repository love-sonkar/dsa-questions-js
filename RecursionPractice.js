//1. Write a JavaScript program to calculate the factorial of a number.

function Factorial(n) {
  if (n === 0) return 1;
  return n * Factorial(n - 1);
}

//Write a JavaScript program to compute the sum of an array of integers.

let array = [3, 5, 10];
function SumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// write a merge sort program with two array

let array1 = [2, 34, 12, 8];
let array2 = [4, 1, 42, 22, 10];

function MergeSort(arr1, arr2) {
  //this loop is for merge array
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  //this loop is for sorting
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  return arr1;
}
