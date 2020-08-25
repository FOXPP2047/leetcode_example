/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    const size = nums.length;
    
    map.set(0, 1);
    
    for(let i = 0; i < size; ++i) {
        sum += nums[i];
        if(map.has(sum - k)) count += map.get(sum - k);
        if(map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    
    return count; 
};