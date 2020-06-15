/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = [];
    const size = nums.length;
    for(let i = 0; i < size; ++i) {
        if(result[index[i]] == null) {
            result[index[i]] = nums[i];
        }
            
        else {
            for(let j = result.length; j >= index[i] + 1; --j) {
                result[j] = result[j - 1];
            }
            result[index[i]] = nums[i];
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = []
    for(const i in nums) {
        result.splice(index[i], 0, nums[i])
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = [], max = -1
    for(let i = 0; i < index.length; ++i) {
        if(index[i] <= max){
            for(let j = 0; j < i; ++j){
                if(index[i] <= index[j])
                    index[j]++
                if(index[j] > max)
                    max = index[j]
            }            
        }
        max = Math.max(max, index[i])
    }
    for(const i in nums)
        result[index[i]] = nums[i]
    return result
};