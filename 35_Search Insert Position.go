func searchInsert(nums []int, target int) int {
    size := len(nums)
    result := 0
    
    for i := 0; i < size; i++ {
        if target <= nums[i] {
            result = i
            break
        }
        
        if i == size - 1 {
            result = size
        }
    }
    
    return result
}