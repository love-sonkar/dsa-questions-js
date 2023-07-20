//count prime number who is strictly less then n

let CountPrimeNumber = function (n) {
  let count = 0;
  let pnumber = [];
  for (let i = 1; i <= n; i++) {
    let prime = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        prime++;
      }
    }
    if (prime == 2 && i < n) {
      pnumber.push(i);
      count++;
    }
  }
  console.log(pnumber);
  return count;
};

console.log(CountPrimeNumber(10));

function sieveOfEratosthenes(n) {
  let count = 0;
  let prime = Array.from({ length: n + 1 }, (_, i) => true);

  for (p = 2; p * p <= n; p++) {
    if (prime[p] == true) {
      for (i = p * p; i <= n; i += p) prime[i] = false;
    }
  }

  for (i = 2; i <= n; i++) {
    if (prime[i] == true && i < n) count++;
  }
  return count;
}

console.log(sieveOfEratosthenes(2));

const printPrimeNumber = function (n) {
  let primecontainer = [];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) count++;
    }
    if (count == 2) primecontainer.push(i);
  }
  return primecontainer;
};

console.log(printPrimeNumber(10));
