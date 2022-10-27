function containsDuplicate(nums: number[]): boolean {
    let duplicate : boolean;
    for (let i = 0; i < nums.length; i++) {
        for (let index = 1; index < nums.length; index++) {
            if (nums[i] === nums[index]) {
                duplicate = true;
                break;
            } else {
                duplicate = false;
            }
        }
    }
    return duplicate;
}
