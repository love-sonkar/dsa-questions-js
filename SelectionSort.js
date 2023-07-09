function SelectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minval = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[minval] > arr[j]) {
        minval = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minval];
    arr[minval] = temp;
  }
  return arr;
}

console.log(SelectionSort([1, 15, 11, 10, 8, 2]));

var removeStars = function (s) {
  let newarr = [];
  for (char of s) {
    if (char === "*") {
      newarr.pop();
    } else {
      newarr.push(char);
    }
  }
  let str = newarr.join("");
  return str;
};

console.log(removeStars("leet**cod*e"));

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  return (this.stack[this.stack.length] = val);
};

MinStack.prototype.topval = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.pop = function () {
  return (this.stack.length = this.stack.length - 1);
};

let hh = new MinStack();

hh.push(4);
hh.push(4);
hh.push(4);
hh.pop();
console.log(hh.topval());

console.log(hh);
