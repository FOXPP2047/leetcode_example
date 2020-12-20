func sortByBits(arr []int) []int {
    sort.Slice(arr, func(a, b int) bool {
        c1 := countBit(arr[a])
        c2 := countBit(arr[b])
        
        if c1 == c2 {
            return arr[a] < arr[b]
        }
        return c1 < c2
    })
    
    return arr
}

func countBit(num int) int {
    count := 0
    for num != 0 {
        count += num & 1
        num /= 2
    }
    return count
}