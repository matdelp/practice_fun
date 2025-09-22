const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const pangrams = (s: string): "pangram" | "not pangram" => {
  const str = s
    .toLowerCase()
    .split("")
    .filter((c) => c !== " ");
  console.log(str);
  if (str.length < 26) return "not pangram";
  for (const letter of ALPHABET) {
    if (!str.includes(letter)) {
      return "not pangram";
    }
  }
  return "pangram";
};

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
); //pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); //not pangram
console.log(pangrams("We promptly")); //not pangram
