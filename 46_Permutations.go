func permute(nums []int) [][]int {
    result := [][]int {}
    dfs(&result, nums, 0, len(nums))    
    return result
}

func dfs (result *[][] int, nums [] int, begin int, size int) {
    
    if begin >= size {
        temp := make([] int, size)
        copy(temp, nums)
        *result = append(*result, temp)
        fmt.Println(*result)
        return
    }
    
    for i := begin; i < size; i++ {
        nums[begin], nums[i] = nums[i], nums[begin]
        fmt.Println("nums : ", nums, ", begin : ", begin, ", i : ", i)
        dfs(result, nums, begin + 1, size)
        nums[begin], nums[i] = nums[i], nums[begin]
    } 
}
