// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// returns nbr of pairs where i<j and ar[i]ar[j] divisible by k

import { log } from "console";

const divisibleSumPairs = (n: number, k: number, ar: number[]): number => {
  if (n < 2) return 0;
  const sortedAr = ar.sort((a, b) => a - b);
  log({ sortedAr });
  let count = 0;

  ar.forEach((nbr, i) => {
    for (let j = i + 1; j < n; j++) {
      const sum = nbr + sortedAr[j];
      if (sum % k === 0) {
        count++;
      }
    }
  });
  return count;
};

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4])); //4
