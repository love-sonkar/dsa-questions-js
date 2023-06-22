function IsPowerOfTwo(n) {
  return n > 0 ? !(n & (n - 1)) : false;
}
console.log(IsPowerOfTwo(4));

// i learn somthing new here

// n & (n-1) if n is power of two then it will always return 0
// if we gave any non power of two integer it will not return 0
// so i made a if statement whare the n is greater then 0 then i will check
// the number is given by user is power of two or not if the given number is power of two it will return 0 and i check the boolen statement
// !0 then it will return true otherwise false
