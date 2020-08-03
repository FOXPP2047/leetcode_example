/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const size = nums.length;
    let leftMultiply = 1;
    let rightMultiply = 1;
    let result = new Array(size);
    
    for(let i = size - 1; i >= 0; --i) {
        result[i] = rightMultiply;
        rightMultiply *= nums[i];
    }
    
    for(let i = 0; i < size; ++i) {
        result[i] *= leftMultiply;
        leftMultiply *= nums[i];
    }
    return result;
};