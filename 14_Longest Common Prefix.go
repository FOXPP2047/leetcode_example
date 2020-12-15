func longestCommonPrefix(strs []string) string {
    size := len(strs)
    
    if size == 0 {
        return ""
    }
    
    result := strs[0]
    
    for i := 0; i < size; i++ {
        curr := strs[i]
        result = comparePrefix(result, curr)
    }
    return result
}

func min(i1, i2 int) int {
    if i1 > i2 {
        return i2
    }
    return i1
}

func comparePrefix(str1, str2 string) string {
    length := min(len(str1), len(str2))
    
    prefix := ""
    
    for i := 0; i < length; i++ {
        if str1[i] == str2[i] {
            prefix += string(str1[i])
        } else {
            return prefix
        }
    }
    return prefix
}