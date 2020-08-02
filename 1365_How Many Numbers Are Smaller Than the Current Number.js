/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const size = nums.length;
    const result = [];
    
    for(let i = 0; i < size; ++i) {
        result.push(0);
        for(let j = 0; j < size; ++j) {
            if(i !== j && nums[i] > nums[j]) {
                result[i]++;
            }
        }
    }
    
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const size = nums.length;
    const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
    const map = new Map(sorted.map((num, index) => [num, size - index - 1]));
    return nums.map(num => map.get(num));
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const size = nums.length;
    const sortedArr = Array.from(nums).sort((a, b) => b - a);
    const map = new Map();
    
    for(let i = 0; i < size; ++i) {
        map.set(sortedArr[i], size - i - 1);
        
    }
    const result = [];
    
    for(let i = 0; i < size; ++i) {
        result.push(map.get(nums[i]));
    }
    return result;
};