// Problem 3 — Longest Substring with At Most K Repeating Characters
// Description :
// Given a string s and an integer k, find the length of the longest substring where each character appears at least k times.

import { log } from "console";

const lengthOfLongestSubstringKMinAppearence = (
  s: string,
  k: number
): number => {
  if (s.length < k) return 0;

  const count: Map<string, number> = new Map();

  for (const item of s) {
    count.set(item, (count.get(item) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i])! < k) {
      const start = lengthOfLongestSubstringKMinAppearence(s.slice(0, i), k);
      const end = lengthOfLongestSubstringKMinAppearence(s.slice(i + 1), k);
      return Math.max(start - end);
    }
  }
  return s.length;
};

log("Exemple 1 :", lengthOfLongestSubstringKMinAppearence("aaabb", 3)); // Output: 3 ("aaa")
log("Exemple 2 :", lengthOfLongestSubstringKMinAppearence("ababbc", 2)); // Output: 5 ("ababb")
log("Exemple 3 :", lengthOfLongestSubstringKMinAppearence("bbaaacbd", 3)); // Output: 3 ("aaa")
