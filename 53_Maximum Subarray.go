func maxSubArray(nums []int) int {
    size := len(nums)
    
    if size == 1 {
        return nums[0]
    }
    
    max := 0
    result := -int(^uint(0) >> 1) - 1
    
    for i := 0; i < size; i++ {
        max = compareMax(max + nums[i], nums[i])
        result = compareMax(result, max)
    }
    return result
}

func compareMax(x, y int) int {
    if x > y {
        return x
    }
    return y
}