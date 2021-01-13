func maxProduct(nums []int) int {
    result := nums[0]
    
    max := result
    min := result
    
    for i := 1; i < len(nums); i++ {
        if nums[i] < 0 {
            max, min = min, max
        }
        
        max = compareMax(nums[i], max * nums[i])
        min = compareMin(nums[i], min * nums[i])
        
        result = compareMax(max, result)
    }
    return result
}

func compareMax(x, y int) int {
    if x > y {
        return x
    }
    return y
}

func compareMin(x, y int) int {
    if x > y {
        return y
    }
    return x
}