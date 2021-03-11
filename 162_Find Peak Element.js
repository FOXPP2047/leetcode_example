/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   const search = (left, right) => {
       if (left === right) return left;
       let mid = left + parseInt((right - left) / 2);
       
       if(nums[mid] > nums[mid + 1]) {
           return search(left, mid);
       } else return search(mid + 1, right);
   }
   return search(0, nums.length - 1);
};