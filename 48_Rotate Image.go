func rotate(matrix [][]int)  {
    size := len(matrix)
    
    //Transformation
    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            if i != j && i > j {
                temp := matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        } 
    }
    
    halfSize := (size / 2)
    
    for i := 0; i < size; i++ {
        for j := 0; j < halfSize; j++ {
            temp := matrix[i][j]
            matrix[i][j] = matrix[i][size - j - 1]
            matrix[i][size - j - 1] = temp
        }
    }
}