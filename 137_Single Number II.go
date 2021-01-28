func singleNumber(nums []int) int {
    table := map[int] int{}
    
    for _, value := range nums {
        _, found := table[value]
        
        if found {
            table[value]++
        } else {
            table[value] = 1
        }
    }
    
    for key, value := range table {
        if value == 1 {
            return key
        }
    }
    return -1
}