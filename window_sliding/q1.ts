// Q1. Sliding Window (Medium)

// You are given a string s and an integer k.
// Return the length of the longest substring that contains at most k distinct characters.

// Input: s = "eceba", k = 2
// Output: 3  ("ece")

const k = 2;
const s = "aaaaaaecebabamaaat";

// ➡️ We define a function.
// It takes a string s and an integer k.
// It will return a number = the maximum length.

const lengthOfLongestSubstringKDistinct = (s: string, k: number): number => {
  if (k === 0 || s.length === 0) return 0; //if k=0, meaning the string is empty, retrun 0

  let left = 0; //start of the sliding window on the left of view point.
  let maxLength = 0; //longest valid window length
  const letterCount: Map<string, number> = new Map(); //Map that keeps track of how many time a letter will appear in the current window

  for (let right = 0; right < s.length; right++) {
    //Loop through the array (string input) with "right" as the index, which is the end of the window
    letterCount.set(s[right], (letterCount.get(s[right]) || 0) + 1);
    //set the letter to right position into Map,
    //.get gives how many times we've seen this letter so far (if not in Map, returns undefined, which will be 0 because of "||0")
    //Add +1 to set the count for this letter
    while (letterCount.size > k) {
      //Map.size gives the nbr of different keys in the Map, here dif letters in the window, if superior to k, shrink the window from the left
      const leftLetter = s[left];
      letterCount.set(leftLetter, letterCount.get(leftLetter)! - 1);
      // we take the left letter of the window and reduce it's count by one becasue we move forward to the right
      if (letterCount.get(leftLetter) === 0) {
        letterCount.delete(leftLetter);
        //if the count for this letter is now 0 remove this one from the map
      }
      left++;
      //moves the start form 1 until it's again k different letters
    }
    maxLength = Math.max(maxLength, right - left + 1);
    //update the maw length so far, Window length being (right - left + 1)
  }
  return maxLength;
};

console.log(lengthOfLongestSubstringKDistinct(s, k));
