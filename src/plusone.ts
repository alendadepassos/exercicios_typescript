function plusOne(digits: number[]): number[] {
  for (let index = digits.length - 1; index >= 0; index--) {
    if (digits[index] < 9) {
      digits[index] = digits[index] + 1;
      break;
    } else {
      if (index === 0) {
        digits.unshift(1);
        digits[1] = 0;
      } else {
        digits[index] = 0;
      }
    }
  }
  return digits;
}
