/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(const i in nums) {
        let evenCount = 0;
        while(nums[i]) {
            nums[i] /= 10;
            nums[i] = Math.floor(nums[i]);
            evenCount++;
        }
        if(evenCount % 2 === 0) count++;
    }
    return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumbers = A => {
    return A.filter(x => x.toString().length % 2 == 0).length;
};