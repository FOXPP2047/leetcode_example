/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const size = nums.length;
    return (nums[size - 1] - 1) * (nums[size - 2] - 1);
};