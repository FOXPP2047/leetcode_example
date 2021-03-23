/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, a, b) => {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

const newIndex = (index, size) => {
    return (1 + 2 * index) % (size | 1);
}

const quickSelectMedian = (nums, k) => {
    const partition = (left, right) => {
        let pivot = nums[right];
        let i = left;
        
        for(let j = left; j < right; ++j) {
            if(nums[j] < pivot) {
                swap(nums, j, i);
                ++i;
            }
        }
        swap(nums, i, right);
        return i;
    }
    
    const quickRecursive = (left, right) => {
        if(left <= right) {
            let partitionIndex = partition(left, right);
            if(partitionIndex === k - 1) {
                return nums[partitionIndex];
            } else if(partitionIndex < k - 1) {
                return quickRecursive(partitionIndex + 1, right);
            } else if(partitionIndex > k - 1) {
                return quickRecursive(left, partitionIndex - 1);
            }
        }
    }
    
    return quickRecursive(0, nums.length - 1);
}

var wiggleSort = function(nums) {
    const median = quickSelectMedian(nums, Math.floor((nums.length + 1) / 2));
    let size = nums.length;
    
    let left = 0, right = size - 1, i = 0;
    
    while(i <= right) {
        if(nums[newIndex(i, size)] > median) {
            swap(nums, newIndex(left++, size), newIndex(i++, size));
        } else if(nums[newIndex(i, size)] < median) {
            swap(nums, newIndex(right--, size), newIndex(i, size));
        } else ++i;
    }
};