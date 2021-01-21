func isPowerOfThree(n int) bool {
    if n < 1 {
        return false
    }
    
    for n % 3 == 0 {
        n /= 3
    }
    
    if n == 1 {
        return true
    } else {
        return false
    }
}