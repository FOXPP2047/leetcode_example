/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.length = nums.length;
};

/** 
 * @param {number} target
 * @return {number}
 */
let real_count = 0;
Solution.prototype.pick = function(target) {
    if(this.length === 1) return 0;
    let result = 0;
    let count = 0;
    ++real_count;
    for(let i = 0; i < this.length; ++i) {
        if(this.nums[i] === target) {
            if(Math.floor(Math.random() * (++count)) === 0) result = i;
        }
    }
    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */