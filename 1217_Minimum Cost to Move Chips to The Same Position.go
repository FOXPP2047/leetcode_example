func minCostToMoveChips(position []int) int {
    odd := 0
    even := 0
    
    for _, value := range position {
        if value % 2 == 0 {
            even++
        } else {
            odd++
        }
    }
    
    if even < odd {
        return even
    } else {
        return odd
    }
}