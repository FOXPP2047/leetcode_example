func countPrimes(n int) int {
    result := 0
    flags := make([] bool, n)
    
    for i := 0; i < len(flags); i++ {
        flags[i] = true
    }
    
    for i := 2; i < n; i++ {
        if flags[i] {
            result++
            
            j := 2
            for i * j < n {
                flags[i * j] = false
                j++
            }
        }
    }
    return result
}