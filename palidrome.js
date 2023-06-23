// palidrome number
// an integer is a palidrome when it reads the same forward and backword

function palidrome(int) {
  let arr = String(int).split("");
  let end = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[end]) {
      return true;
    } else {
      return false;
    }
    end--;
  }
}

console.log(palidrome(44144));

//let's simplified this

function PalidromeFunc(int) {
  let arr = String(int).split("");
  const ReverseInt = String(int).split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ReverseInt[i]) return false;
  }
  return true;
}

console.log(PalidromeFunc(45355));
