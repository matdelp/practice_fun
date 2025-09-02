import { log } from "console";

const breakingRecords = (scores: number[]): number[] => {
  if (scores.length < 0) return [0, 0];
  const records: Map<string, number> = new Map();
  records.set("min", scores[0]);
  records.set("breakmin", 0);
  records.set("max", scores[0]);
  records.set("breakmax", 0);
  for (let i = 1; i < scores.length + 1; i++) {
    const currMin = records.get("min");
    const currMax = records.get("max");

    if (scores[i] < currMin!) {
      records.set("breakmin", records.get("breakmin")! + 1);
      records.set("min", scores[i]);
    } else if (scores[i] > currMax!) {
      records.set("breakmax", records.get("breakmax")! + 1);
      records.set("max", scores[i]);
    }
  }
  return [records.get("breakmax")!, records.get("breakmin")!];
};

log(breakingRecords([12, 24, 10, 24]));
