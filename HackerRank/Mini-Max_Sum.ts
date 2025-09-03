// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

import { log } from "console";

const miniMaxSum = (arr: number[]): void => {
  let sumList = [];

  for (let i = 0; i < arr.length; i++) {
    const currSum = arr.reduce((a, b) => a + b, 0) - arr[i];
    sumList.push(currSum);
  }
  log(Math.min(...sumList), Math.max(...sumList));
};

const arrEx = [1, 2, 3, 4, 5];
miniMaxSum(arrEx);
