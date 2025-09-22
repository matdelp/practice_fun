const marsExploration = (s: string): number => {
  const arr = s.split("");
  if (arr.length < 3) return 0;
  let count = 0;

  for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] !== "S") count++;
    if (arr[i + 1] !== "O") count++;
    if (arr[i + 2] !== "S") count++;
  }
  return count;
};

const S1 = "SOSSPSSQSSOR";
console.log(marsExploration(S1));
const S2 = "SOSSOT";
console.log(marsExploration(S2));
