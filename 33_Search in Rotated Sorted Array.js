/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const size = nums.length;
    
    //binary search for pivot
    const findPivot = (low, high) => {
        if(low > high) return -1; //doesn't find pivot
        if(low === high) return low; 
        
        let mid = Math.floor((low + high) / 2);
        
        if(mid < high && nums[mid] > nums[mid + 1]) return mid;
        if(mid > low && nums[mid] < nums[mid - 1]) return (mid - 1);
        
        //if the value of lowest index is bigger than the value of mid
        //that means the pivot will show from low to mid - 1
        if(nums[low] >= nums[mid])
            return findPivot(low, mid - 1);
        //else the pivot will show from mid + 1 to high
        else return findPivot(mid + 1, high);
    }
    
    const binarySearch = (low, high) => {
        if(low > high) return -1;
            
        let mid = Math.floor((low + high) / 2);
        
        if(nums[mid] === target)
            return mid;
        if(nums[mid] > target) 
            return binarySearch(low, mid - 1);
        else return binarySearch(mid + 1, high);
    } //find pivot first
        
    let pivot = findPivot(0, size - 1);
    
    //this means not rotated array
    if(pivot === -1) return binarySearch(0, size - 1);
    if(nums[pivot] === target)
        return pivot;
    if(nums[0] <= target)
        return binarySearch(0, pivot - 1);
    else return binarySearch(pivot + 1, size - 1);
};