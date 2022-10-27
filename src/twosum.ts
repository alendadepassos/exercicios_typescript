function twoSum(nums: number[], target: number): number[] {
  const msg = [];
  for (let i = 0; i < nums.length; i++) {
    for (let index = i + 1; index < nums.length; index++) {
      if (nums[i] + nums[index] === target) {
        const a: number = i;
        const b: number = index;
        msg[0] = a;
        msg[1] = b;
      }
    }
  }
  return msg;
}
