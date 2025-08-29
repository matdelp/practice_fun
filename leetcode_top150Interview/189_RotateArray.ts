/**
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

import { log } from "console";

const rotate = (nums: number[], k: number): void => {
  const shift = k % nums.length;
  const rotation = nums.splice(nums.length - shift);
  nums.splice(0, 0, ...rotation);
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);
log("Exemple1:", nums1); //[5,6,7,1,2,3,4]

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
log("Exemple2:", nums2); //[3,99,-1,-100]

const nums3 = [1, 2];
const k3 = 7;
rotate(nums3, k3);
log("Exemple2:", nums3); //[2,1]
