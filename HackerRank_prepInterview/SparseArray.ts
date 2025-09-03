/*
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

import { log } from "console";

const matchingStrings = (strings: string[], queries: string[]): number[] => {
  if (strings.length === 0) return [];
  let results: number[] = [];
  const count = new Map();
  strings.forEach((str) => {
    count.set(str, (count.get(str) || 0) + 1);
  });
  log(count);
  queries.forEach((entry) => {
    if (count.has(entry)) results.push(count.get(entry));
    else results.push(0);
  });
  return results;
};

log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])); // expected output : [2,1,0]
log(
  matchingStrings(
    [
      "abcde",
      "sdaklfj",
      "asdjf",
      "na",
      "basdn",
      "sdaklfj",
      "asdjf",
      "na",
      "asdjf",
      "na",
      "basdn",
      "sdaklfj",
      "asdjf",
    ],
    ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
  )
); // expected output : [1,3,4,3,2

log(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"])); // expected output : [1,0,1]
