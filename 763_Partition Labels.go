func partitionLabels(S string) []int {
    mapping := make(map[byte] int, 26)
    
    for i := 0; i < len(S); i++ {
        mapping[S[i]] = i
    }
    
    
    result := [] int {}
    max := 0
    
    for i := 0; i < len(S); {
        max = compareMax(max, mapping[S[i]])
        
        for j := i + 1; j <= max; j++ {
            max = compareMax(max, mapping[S[j]])
        }
        
        result = append(result, max - i + 1)
        i = max + 1
    }
    return result
}

func compareMax(i, j int) int {
    if i > j {
        return i
    }
    return j
}