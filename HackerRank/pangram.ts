const pangrams = (s: string): "pangram" | "not pangram" => {
  const records: Record<string, boolean> = {};
  const str = s
    .toLowerCase()
    .split("")
    .filter((c) => c !== " ");
  str.forEach((letter) => {
    records[letter] = true;
  });

  if (Object.keys(records).length === 26) return "pangram";
  return "not pangram";
};

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
); //pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); //not pangram
