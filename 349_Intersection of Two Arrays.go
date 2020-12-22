func intersection(nums1 []int, nums2 []int) []int {
    set := map[int] int {}
    
    result := [] int {}
    
    for _, n := range nums1 {
        _, found := set[n]
        
        if !found {
            set[n] = 1
        }
    }
    
    for _, n := range nums2 {
        _, found := set[n]
        
        if found {
            set[n]++
        }
    }
    
    for key, value := range set {
        if value >= 2 {
            result = append(result, key) 
        }
    }
    
    return result
}