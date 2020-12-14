func reverse(x int) int {
    
    var max int = int(math.Pow(2, 31) - 1)
    var min int = -max
    
    result := 0
    isNegative := false
    
    if x < 0 {
        isNegative = true
        x = -x
    }
    
    for x > 0 {
        remain := x % 10
        result *= 10
        result += remain
        x = x / 10
    }
    
    if isNegative == true {
        result = -result
    }
    
    if result > max || result < min {
        return 0
    }
    
    return result
}