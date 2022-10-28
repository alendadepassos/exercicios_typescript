function containsDuplicate(nums: number[]): boolean {
    let duplicate = false;
    for (let i = 0; i < nums.length; i++) {
        for (let index = i + 1; index < nums.length; index++) {
            if (nums[i] === nums[index]) {
                duplicate = true;
                break;
            }
        }
    }
    return duplicate;
}
