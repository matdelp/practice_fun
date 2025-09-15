const diagonalDifference = (arr: number[][]): number => {
  let diff = 0;
  const k = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][i] - arr[i][k - i];
  }
  return Math.abs(diff);
};

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(matrix));
