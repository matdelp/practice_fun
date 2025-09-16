import { log } from "console";

const countingValleys = (steps: number, path: string): number => {
  let valleyCount = 0;
  let level = 0;
  Array.from(path).forEach((letter) => {
    if (letter === "U") level += 1;
    else level -= 1;
    if (level === 0 && letter != "D") valleyCount += 1;
  });
  return valleyCount;
};

const steps = 8;
const path = "UDDDUDUU";
log(countingValleys(steps, path)); //1
