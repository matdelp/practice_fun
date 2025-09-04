import { log } from "console";

const findMedian = (arr: number[]): number => {
  const n = arr.length;
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  log(sortedArr);
  const medianIndex = Math.floor(n / 2);
  return sortedArr[medianIndex];
};

const arr1 = [0, 1, 2, 4, 6, 5, 3];
log(findMedian(arr1));
