/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const ZERO = 0;
    const TWO = 2;
    const size = nums.length;
    let front = 0, back = size - 1;
    
    for(let i = 0; i < size; ++i) {
        if(nums[i] === ZERO) {
            let curr = nums[i];
            nums[i] = nums[front];
            nums[front] = curr;
            ++front;
        } else if(nums[i] === TWO) {
            if(i < back) {
                let curr = nums[i];
                nums[i] = nums[back];
                nums[back] = curr;
                --i;
                --back;    
            }
        }
    }
};