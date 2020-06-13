/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];
    let next = 0;
    let size = nums.length;
    
    for (let i = 0; i < size; i += 2) {
        next = i + 1;
        for (let j = 0; j < nums[i]; ++j) {
            result.push(nums[next]);
        }
    }
    
    return result;
};