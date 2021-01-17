func firstUniqChar(s string) int {
    mapping := map[string] int {}
    for i := 0; i < len(s); i++ {
        _, found := mapping[string(s[i])]
        
        if found {
            mapping[string(s[i])]++
        } else {
            mapping[string(s[i])] = 1
        }
    }
    
    
    minimum := len(s)
    
    for key, value := range mapping {
        
        if value == 1 {
            index := strings.Index(s, key)
            if index < minimum {
                minimum = index
            }
        }
    }
    
    
    if minimum < len(s) {
        return minimum
    }
    return -1
}

func firstUniqChar(s string) int {
    flags := make([]int, 26)
    
    for i := range flags {
        flags[i] = -1
    }
    
    length := len(s)
    
    for i, char := range s {
        index := byte(char - 'a')
        
        if flags[index] == -1 {
            flags[index] = i
        } else {
            flags[index] = length
        }
    }
    
    min := length
    
    for i := range flags {
        if flags[i] >= 0 && flags[i] < length && flags[i] < min {
            min = flags[i]
        }
    }
    
    if min == length {
        return -1
    }
    return min
}