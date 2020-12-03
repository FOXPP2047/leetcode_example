/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const size = nums.length;
    
    if(size === 0) return 0;
    
    let map = new Map();
    
    for(let i = 0; i < size; ++i) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else map.set(nums[i], 1);
    }
    
    let result = -1;
    
    for(let [key, value] of map) {
        if(value === 1) result = key;
    }
        
    return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    return result;
};