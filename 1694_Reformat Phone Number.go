func reformatNumber(number string) string {
    
    number = strings.Replace(number, " ", "", -1)
    number = strings.Replace(number, "-", "", -1)
    
    size := len(number)
    i := 0
    
    for i < size {
        size = len(number)
        pos := size - i
        if pos > 4 {
            number = number[:i + 3] + "-" + number[i + 3:]
            i += 4
        } else if pos == 4 {
            number = number[:i + 2] + "-" + number[i + 2:]
            i += 3
        } else if pos == 2 {
            break
        } else {
            break
        }
    }
    
    return number
}