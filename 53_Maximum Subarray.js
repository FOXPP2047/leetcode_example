/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const size = nums.length;
    
    if(size === 1)
        return nums[0];
    let accum = 0;
    let max = -Number.MAX_VALUE;

    for(let i = 0; i < size; ++i) {
        accum = Math.max(accum + nums[i], nums[i]);
        max = Math.max(max, accum);
    }
    return max;
};