/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    const size = nums.length;
    
    for(let i = 0; i < size; ++i) {
        map.set(nums[i], i);
    }
    
    for(let i = 0; i < size; ++i) {
        let complement = target - nums[i];
        
        if(map.has(complement) && map.get(complement) !== i)
            return [i, map.get(complement)];
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    const size = nums.length;
    
    for(let i = 0; i < size; ++i) {
        map.set(nums[i], i);
    }
    
    for(let i = 0; i < size; ++i) {
        const tar = target - nums[i];
        if(map.has(tar) && map.get(tar) !== i) return [i, map.get(tar)];
    }
};