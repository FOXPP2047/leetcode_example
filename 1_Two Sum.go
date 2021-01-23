//Two Sum value finding index
func twoSum(nums []int, target int) []int {
    mapping := map[int] int{}
    
    for index, value := range nums {
        mapping[value] = index
    }
    
    result := []int {}
    
    for i, value := range nums {
        key := target - value
        
        index, found := mapping[key]
        
        if found && index != i {
            result = append(result, i)
            result = append(result, index)
            break
        }
    }
    
    return result
}