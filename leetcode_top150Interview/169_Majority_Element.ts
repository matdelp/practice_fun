/**
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

import { log } from "console";

const majorityElement = (nums: number[]): number => {
  const maj = Math.ceil(nums.length / 2);

  const record: { [key: number]: number } = {};
  for (const nbr of nums) {
    record[nbr] = (record[nbr] || 0) + 1;
    if (record[nbr] >= maj) {
      return nbr;
    }
  }
  return Number.NaN;
};

const nums1 = [3, 2, 3];
log("Exemple1:", majorityElement(nums1)); //3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
log("Exemple2:", majorityElement(nums2)); //2
