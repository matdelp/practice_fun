// Given an array of integers, where all elements but one occur twice, find the unique element.

import { log } from "console";

const lonelyInteger = (a: number[]): number => {
  const count = new Map<number, number>();
  a.forEach((element) => {
    count.set(element, (count.get(element) || 0) + 1);
  });
  let lonely = Number.NaN;
  for (const [key, val] of count) {
    if (val === 1) {
      lonely = key;
      break;
    }
  }
  return lonely;
};

const lonelyInteger2 = (a: number[]): number => {
  return a.reduce((acc, curr) => {
    return acc ^ curr;
  }, 0);
};

const a = [1, 2, 3, 4, 3, 2, 1];
log(lonelyInteger2(a));
