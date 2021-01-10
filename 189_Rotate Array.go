func rotate(nums []int, k int)  {
    k %= len(nums)
    
    temp, prev := 0, 0
    
    for i := 0; i < k; i++ {
        prev = nums[len(nums) - 1]
        for j := 0; j < len(nums); j++ {
            temp = nums[j]
            nums[j] = prev
            prev = temp
        }
    }
}

func rotate(nums []int, k int)  {
    k %= len(nums)
    
    count := 0
    
    for start := 0; count < len(nums); start++ {
        curr := start
        prev := nums[start]
        
        for true {
            next := (curr + k) % len(nums)
            temp := nums[next]
            nums[next] = prev
            prev = temp
            curr = next
            count++
            if start == curr {
                break
            }
            
        }
    }
}