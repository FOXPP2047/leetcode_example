func minFlips(target string) int {
    result := 0
    prev := "0"
    
    for i := range target {
        if prev != string(target[i]) {
            result++
            
            prev = string(target[i])
        }
    }
    return result
}