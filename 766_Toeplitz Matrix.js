/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            if(i > 0 && j > 0 && matrix[i - 1][j - 1] != matrix[i][j]) {
                return false;
            }
        }
    }
    return true;
};