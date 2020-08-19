/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
    
    let i = 0, j = colSize - 1;
    
    while(i < rowSize && j >= 0) {
        if(matrix[i][j] === target) return true;
        else if(matrix[i][j] > target) --j;
        else ++i;
    }
    return false;
};