import { log } from "console";

const breakingRecords = (scores: number[]): number[] => {
  if (scores.length === 0) return [0, 0];
  let min = scores[0];
  let breakmin = 0;
  let max = scores[0];
  let breakmax = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      breakmin = breakmin + 1;
      min = scores[i];
    } else if (scores[i] > max) {
      breakmax = breakmax + 1;
      max = scores[i];
    }
  }
  return [breakmax, breakmin];
};

log(breakingRecords([12, 24, 10, 24]));
