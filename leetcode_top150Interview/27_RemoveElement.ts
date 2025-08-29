/**
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
The remaining elements of nums are not important as well as the size of nums.
Return k.
 */

import { log } from "console";

const removeElement = (nums: number[], val: number): number => {
  const filtered = nums.filter((a) => a !== val);
  nums.splice(0, nums.length, ...filtered);
  return nums.length;
};

const nums1 = [3, 2, 2, 3];
const val1 = 3;
log("Exemple1:", removeElement(nums1, val1)); //2

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
log("Exemple2:", removeElement(nums2, val2)); //5
