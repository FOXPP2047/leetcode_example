/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    const size = nums.length;
    nums.sort((a, b) => a - b);
    
    let result = 0;
    for(let i = 0; i < size - 2; ++i) {
        let left = i + 1;
        let right = size - 1;
        
        while(left < right) {
            const sumofThree = nums[i] + nums[left] + nums[right];
            if(sumofThree < target) {
                result += (right - left);
                ++left;
            } else --right;
        }
    }
    return result;
};