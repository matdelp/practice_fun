// 👉 Given a string s, return the index of the first non-repeating character.
// If none exists, return -1.
// 💡 Hint:
// Count occurrences of each character.
// Scan string again, return first with count = 1.

import { log } from "console";

const FirstNonRepeatingChar = (string: string): number => {
  if (!string) return -1;
  const record: { [key: string]: number } = {};
  for (const char of string) {
    record[char] = (record[char] || 0) + 1;
  }
  let i = 0;
  for (const key in record) {
    if (record[key] !== 1) {
      i = i + 1;
      continue;
    }
    return i;
  }
  return -1;
};

log("Exemple 1 :", FirstNonRepeatingChar("leetcode")); // Output: 0   ("l" first unique)
log("Exemple 2 :", FirstNonRepeatingChar("loveleetcode")); // Output: 2   ("v" first unique)
log("Exemple 3 :", FirstNonRepeatingChar("aabb")); // Output: -1   (no unique)
