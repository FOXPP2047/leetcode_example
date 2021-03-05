/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => {return a - b});
    let diff = Number.MAX_SAFE_INTEGER;
    let size = nums.length;
    
    for(let i = 0; i < size && diff != 0; ++i) {
        let low = i + 1, high = size - 1;
        while(low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            
            if(Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }
            if(sum < target) {
                ++low;
            } else {
                --high;
            }
        }
    }
    return target - diff;
};