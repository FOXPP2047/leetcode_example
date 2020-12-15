func isValid(s string) bool {
    m := make(map[string] string, 3)
    m[")"] = "("
    m["}"] = "{"
    m["]"] = "["
    
    size := len(s)
    result := make([]string, 0)
    
    for i := 0; i < size; i++ {
        value, found := m[string(s[i])]
        
        if found == true {
            if len(result) > 0 {
                popValue := result[len(result)-1] 
                result = result[:len(result)-1]
                
                if popValue != value {
                    return false
                }
            } else {
                return false
            }
            
        } else {
            result = append(result, string(s[i]))  
        }
    }
    size = len(result)
    
    if size == 0 {
        return true
    }
    return false
}


func isValid(s string) bool {
    m := make(map[byte] byte, 3)
    m[')'] = '('
    m['}'] = '{'
    m[']'] = '['
    
    size := len(s)
    result := make([]byte, 0)
    
    for i := 0; i < size; i++ {
        value, found := m[s[i]]
        
        if found == true {
            if len(result) > 0 {
                popValue := result[len(result)-1] 
                result = result[:len(result)-1]
                
                if popValue != value {
                    return false
                }
            } else {
                return false
            }
            
        } else {
            result = append(result, s[i])  
        }
    }
    size = len(result)
    
    if size == 0 {
        return true
    }
    return false
}