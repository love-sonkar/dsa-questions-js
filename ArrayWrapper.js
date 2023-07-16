class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }
  valueof() {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum = this.arr[i] + sum;
    }
    return sum;
  }

  toString() {
    return JSON.stringify(this.arr);
  }
}

let arr1 = new ArrayWrapper([1, 2]);
let arr2 = new ArrayWrapper([4, 3]);
console.log(arr1.valueof() + arr2.valueof());
console.log(arr1.toString());
