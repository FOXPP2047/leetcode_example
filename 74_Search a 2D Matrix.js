/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const row = matrix.length;
    
    if(row === 0) return false;
    
    let position = 0;
    
    for(let i = 0; i < row; ++i) {
        if(matrix[i][0] <= target) position = i;
    }
    
    const col = matrix[position].length;
    
    for(let i = 0; i < col; ++i) {
        if(matrix[position][i] === target) return true;
    }
    return false;
};