/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const rowSize = A.length;
    const colSize = A[0].length;
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < parseInt(colSize / 2); ++j) {
            let swap = A[i][j];
            A[i][j] = A[i][colSize - j - 1];
            A[i][colSize - j - 1] = swap;
        }
    }
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            if(A[i][j] === 1) A[i][j] = 0;
            else if(A[i][j] === 0) A[i][j] = 1;
        }
    }
    return A;
};

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const rowSize = A.length;
    const colSize = A[0].length;
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < (colSize / 2); ++j) {
            const flipIndex = rowSize - j - 1;
            const left = A[i][j] === 0 ? 1 : 0;
            const right = A[i][flipIndex] === 0 ? 1 : 0;
            A[i][j] = right;
            A[i][flipIndex] = left;
        }
    }

    return A;
};