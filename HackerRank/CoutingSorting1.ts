import { log } from "console";

const countingSort = (arr: number[]): number[] => {
  const count: number[] = new Array(100).fill(0);
  arr.forEach((number) => {
    count[number] += 1;
  });
  return count;
};

const arr = [1, 1, 3, 2, 1];
log(countingSort(arr));
// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]
