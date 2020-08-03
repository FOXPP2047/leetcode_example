/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    const size = nums.length;
    
    for(let i = 0; i < size; ++i) {
        if(!map.get(nums[i])) map.set(nums[i], 1);
        else return true;
    }
    return false;
};