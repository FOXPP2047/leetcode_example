/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a, b) => (a - b));
    const size = nums.length;
    let result = 0;
    
    for(let i = 0; i < size; i += 2) {
        result += nums[i];
    }
    return result;
};