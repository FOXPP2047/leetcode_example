/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const size = nums.length;
    
    if(size === 0) return 0;
    
    let i = 0;
    
    for(let j = 1; j < size; ++j) {
        if(nums[j] !== nums[i]) {
            ++i;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};