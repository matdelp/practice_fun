// Problem 2 — Longest Substring Without Repeating Characters (Medium)
// Description
import { log } from "console";

// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstringKUnique = (s: string): number => {
  let start = 0;
  let maxLength = 0;
  const count: Map<string, number> = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    while (count.has(char)) {
      const firstLetter = s[start];
      count.delete(firstLetter);
      start++;
    }
    count.set(char, 1);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

log("Exemple 1 :", lengthOfLongestSubstringKUnique("abcabcbb")); // Output: 3   ("abc")
log("Exemple 2 :", lengthOfLongestSubstringKUnique("bbbbb")); // Output: 1   ("b")
log("Exemple 3 :", lengthOfLongestSubstringKUnique("pwwkew")); // Output: 3   ("wke")
