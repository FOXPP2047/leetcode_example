/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const size = matrix.length;
    const halfSize = Math.floor(size / 2);
    
    for(let i = 0; i < size; ++i) {
        for(let j = 0; j < size; ++j) {
            if(i !== j && i > j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    const half = size / 2;
    
    for(let i = 0; i < size; ++i) {
        for(let j = 0; j < half; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][size - j - 1];
            matrix[i][size - j - 1] = temp;
        }
    }
};