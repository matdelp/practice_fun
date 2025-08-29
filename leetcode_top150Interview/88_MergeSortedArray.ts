import { log } from "console";

/**
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

> Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 Do not return anything, modify nums1 in-place instead.
 */

const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];
merge(a, 3, b, 3);
log("Exemple 1 :", a);

const c = [1];
const d: number[] = [];
merge(c, 1, d, 0);
log("Exemple 2 :", c);

const e = [0];
const f = [1];
merge(e, 0, f, 1);
log("Exemple 3 :", e);
