const flippingBits = (n: number): number => {
  return ~n >>> 0;
};
console.log(flippingBits(10));
