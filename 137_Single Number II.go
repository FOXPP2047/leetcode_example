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

func singleNumber(nums []int) int {
    result := 0
    var i uint
    for i = 0; i < 32; i++ {
        temp := 0
        for _, num := range nums {
            temp += ((num >> i) & 1)
        }

        if i < 31 {
            result = result + (temp%3)<<i
        } else {
            result = result - (temp%3)<<i
        }
    }

    return result
}