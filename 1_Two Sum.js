/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //This is citrix question
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
        let value = target - nums[i];
        
        if(map.has(value) && map.get(value) !== i) return [i, map.get(value)];
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
    
    for(let i = 0; i < size; i++) {
        let complement = target - nums[i];
        
        if(map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(nums[i], i);
    }
    return null
};