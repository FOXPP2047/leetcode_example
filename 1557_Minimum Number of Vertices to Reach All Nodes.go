func findSmallestSetOfVertices(n int, edges [][]int) []int {
    indeg := make([] int, n)
    
    for _, node := range edges {
        indeg[node[1]]++
    }
    
    result := []int {}
    
    for index, value := range indeg {
        if value == 0 {
            result = append(result, index)
        }
    }
    
    return result
}