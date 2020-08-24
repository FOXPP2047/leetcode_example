/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const size = nums.length;
    
    const findPivot = (low, high) => {
        if(low > high) return -1; //doesn't find pivot
        if(low === high) return low; 
        
        let mid = Math.floor((low + high) / 2);
        
        if(mid < high && nums[mid] > nums[mid + 1]) return mid;
        if(mid > low && nums[mid] < nums[mid - 1]) return (mid - 1);
        
        if(nums[low] >= nums[mid])
            return findPivot(low, mid - 1);
        else return findPivot(mid + 1, high);
    }
    
    const binarySearch = (low, high) => {
        console.log(low, high);
        if(low > high) return -1;
            
        let mid = Math.floor((low + high) / 2);
        
        if(nums[mid] === target)
            return mid;
        if(nums[mid] > target) 
            return binarySearch(low, mid - 1);
        else return binarySearch(mid + 1, high);
    }
        
    let pivot = findPivot(0, size - 1);
    
    if(pivot === -1) return binarySearch(0, size - 1);
    if(nums[pivot] === target)
        return pivot;
    if(nums[0] <= target)
        return binarySearch(0, pivot - 1);
    else return binarySearch(pivot + 1, size - 1);
};