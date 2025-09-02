import { log } from "console";

const reverseSeq = (sequence: string): string => {
  let compSeq = "";
  for (const ncl of sequence) {
    if (ncl === "C") compSeq = compSeq + "G";
    else if (ncl === "G") compSeq = compSeq + "C";
    else if (ncl === "A") compSeq = compSeq + "T";
    else compSeq = compSeq + "A";
  }
  const revCompSeq = compSeq.split("").reverse().join("");
  return revCompSeq;
};
log(reverseSeq("ATGC"));
