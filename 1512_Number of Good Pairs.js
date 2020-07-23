/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    const size = nums.length;
    
    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(nums[i] === nums[j])
                result++;
        }
    }
    return result;
};