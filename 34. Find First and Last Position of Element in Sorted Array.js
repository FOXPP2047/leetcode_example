/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1];
    const size = nums.length;
    
    if(size === 0) return result;
    
    let left = 0, right = size;
    
    while(left < right) {
        let middle = Math.floor((left + right) / 2);
        
        if(nums[middle] > target) {
            right = middle;
        } else if(nums[middle] < target) {
            left = middle + 1;
        } else {
            result[0] = middle;
            result[1] = middle;
            
            let i = middle - 1;
            let j = middle + 1;
            
            while(nums[i] === nums[middle]) {
                result[0] = i;
                --i;
            }
            while(nums[j] === nums[middle]) {
                result[1] = j;
                ++j;
            }
            break;
        }
    }
    return result;
};