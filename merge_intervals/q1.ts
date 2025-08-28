// 👉 You’re given an array of intervals where intervals[i] = [start, end].
// Merge all overlapping intervals and return the result.

import { log } from "console";

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// // because [1,3] and [2,6] overlap → merged into [1,6]

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// // touching intervals count as overlapping
type Tuple = number[];

const intervalMerger = (list: Tuple[]): Tuple[] => {
  let result: Tuple[] = [];
  for (let i = 0; i < list.length; i++) {
    let current: Tuple = list[i];
    let j = i + 1;
    while (j < list.length && current[1] > list[j][0]) {
      current = [current[0], list[j][1]];
      log(current);
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
// log("ex2:", mergeIntervalifOverlap([1, 2], [2, 6])); //merge
// log("ex3:", mergeIntervalifOverlap([1, 2], [3, 6])); //don't
// log("ex4:", mergeIntervalifOverlap([2, 6], [1, 3])); //merge
