func intersect(nums1 []int, nums2 []int) []int {
    mapping := map[int] int{}
    result := []int {}
    
    for _, value := range nums1 {
        _, found := mapping[value]
        
        if !found {
            mapping[value] = 1
        } else {
            mapping[value]++
        }
    }
    
    for _, value := range nums2 {
        val, found := mapping[value]
        
        if found && val > 0 {
            result = append(result, value)
            mapping[value]--
        }
    }
    return result
}