/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const size = nums.length;
    let map = new Map();
    
    for(let i = 0; i < size; ++i) {
        map.set(i + 1, 1);
    }
    
    for(let i = 0; i < size; ++i) {
        map.set(nums[i], map.get(nums[i]) - 1);
    }
    
    for(let i = 0; i < size; ++i) {
        if(map.get(nums[i]) < 0) return nums[i];
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const size = nums.length;
    let map = new Map();
    
    for(let i = 0; i < size; ++i) {
        map.set(i + 1, 1);
    }
    
    for(let i = 0; i < size; ++i) {
        map.set(nums[i], map.get(nums[i]) - 1);
        
        if(map.get(nums[i]) < 0) return nums[i];
    }
    
    return -1;
};