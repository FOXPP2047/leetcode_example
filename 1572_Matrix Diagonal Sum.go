func diagonalSum(mat [][]int) int {
    result := 0
    size := len(mat)
    
    for i := 0; i < size; i++ {    
        result += mat[i][i]
        result += mat[size - 1 - i][i]
    }
    
    if (size % 2 == 1) {
        result -= mat[size / 2][size / 2]
    }
    return result
}