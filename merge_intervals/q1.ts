// 👉 You’re given an array of intervals where intervals[i] = [start, end].
// Merge all overlapping intervals and return the result.
// // touching intervals count as overlapping

import { log } from "console";

type Tuple = number[];

const intervalMerger = (list: Tuple[]): Tuple[] => {
  let result: Tuple[] = [];
  for (let i = 0; i < list.length; i++) {
    let current: Tuple = list[i];
    let j = i + 1;
    while (j < list.length && current[1] >= list[j][0]) {
      if (list[j][1] < current[1]) {
        current = [current[0], current[1]];
      } else {
        current = [current[0], list[j][1]];
      }
      j++;
    }
    result = result.concat([current]);
    i = j - 1;
  }
  return result;
};

log(
  "ex1:",
  intervalMerger([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
log(
  "ex2:",
  intervalMerger([
    [1, 4],
    [4, 5],
  ])
);
log(
  "edge1:",
  intervalMerger([
    [1, 3],
    [2, 14],
    [8, 10],
    [15, 18],
  ])
);
log(
  "edge2:",
  intervalMerger([
    [1, 3],
    [2, 16],
    [8, 10],
    [15, 18],
  ])
);
