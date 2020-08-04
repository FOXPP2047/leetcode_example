/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const size = nums.length;
    
    if(size < 3) return result;
    
    nums = nums.sort((a, b) => a - b);
    
    for(let i = 0; i < size - 2; ++i) {
        if(nums[i] > 0) return result;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
		
        let j = i + 1, k = size - 1;
        while(j < k) {
            const sumofThree = nums[i] + nums[j] + nums[k];
            if(sumofThree === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k--;
            } else if (sumofThree > 0) k--;
			else j++;
        }
    }
    return result;
};