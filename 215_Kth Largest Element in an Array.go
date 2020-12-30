func findKthLargest(nums []int, k int) int {
    sort.Slice(nums, func(a, b int) bool {
        return nums[a] > nums[b]
    })
    
    return nums[k - 1]
}