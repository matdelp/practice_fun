const arr = [1, 1, 0, -1, -1];

const PlusMinus = (arr: number[]): void => {
  let pos = 0;
  let neg = 0;
  let nul = 0;

  for (const num of arr) {
    if (num < 0) neg++;
    else if (num > 0) pos++;
    else {
      nul++;
    }
  }
  console.log("1.", (pos / arr.length).toFixed(6));
  console.log("2.", (neg / arr.length).toFixed(6));
  console.log("3.", (nul / arr.length).toFixed(6));
};

PlusMinus(arr);
