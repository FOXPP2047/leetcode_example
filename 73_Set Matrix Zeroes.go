func setZeroes(matrix [][]int)  {
    isColumn := false
    rowSize := len(matrix)
    colSize := len(matrix[0])
    
    for i := 0; i < rowSize; i++ {
        
        if matrix[i][0] == 0 {
            isColumn = true
        }
        
        for j := 1; j < colSize; j++ {
            if matrix[i][j] == 0 {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    
    for i := 1; i < rowSize; i++ {
        for j := 1; j < colSize; j++ {
            if matrix[i][0] == 0 || matrix[0][j] == 0 {
                matrix[i][j] = 0
            }
        }
    }
    
    if matrix[0][0] == 0 {
        for i := 0; i < colSize; i++ {
            matrix[0][i] = 0
        }
    }
    
    if isColumn {
        for i := 0; i < rowSize; i++ {
            matrix[i][0] = 0
        }
    }
}