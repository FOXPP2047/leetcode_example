func majorityElement(nums []int) int {
    mapping := map[int] int{}
    
    for i := range nums {
        _, found := mapping[nums[i]]
        
        if found == true {
            mapping[nums[i]] += 1
        } else {
            mapping[nums[i]] = 1
        }
    }
    
    maxKey := 0
    maxValue := 0
    
    for key, value := range mapping {
        if value > maxValue {
            maxKey = key
            maxValue = value
        }
    }
    return maxKey
}