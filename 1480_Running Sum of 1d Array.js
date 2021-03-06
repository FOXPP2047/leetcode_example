/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const size = nums.length;
    const result = [];
    
    nums.reduce(function (prev, curr) { 
        result.push(prev);
        return prev + curr;
    });
    result.push(result[result.length - 1] + nums[size - 1]);
    
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    return nums.map(curr => sum += curr);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map(curr => sum += curr, sum = 0);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    
    for(let i = 0; i < nums.length; ++i) {
        if(i === 0) result.push(nums[i]);
        else result.push(result[i - 1] + nums[i]);
    }
    return result;
};