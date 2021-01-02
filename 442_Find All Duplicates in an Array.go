func findDuplicates(nums []int) []int {
    duplicated := map[int] int{}
    result := [] int {}
    
    for _, value := range nums {
        _, found := duplicated[value]
        
        if found == true {
            result = append(result, value)
        } else {
            duplicated[value]++
        }
    }
    
    return result
}