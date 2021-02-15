/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    dfs([], 0, nums, result);
    return result;
};

const dfs = (curr, index, nums, result) => {
    result.push(curr);
    
    for(let i = index; i < nums.length; ++i) {
        dfs(curr.concat(nums[i]), i + 1, nums, result);
    }
}