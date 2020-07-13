/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minimumRow = [];
    const maximumCol = [];
    
    for(let i = 0; i < matrix.length; ++i) {
        let minimum = Number.MAX_VALUE;;
        for(let j = 0; j < matrix[0].length; ++j) {
            if(minimum > matrix[i][j])
                minimum = matrix[i][j];
        }
        minimumRow.push(minimum);
    }
    for(let i = 0; i < matrix[0].length; ++i) {
        let maximum = -Number.MAX_VALUE;;
        for(let j = 0; j < matrix.length; ++j) {
            if(maximum < matrix[j][i])
                maximum = matrix[j][i];
        }
        maximumCol.push(maximum);
    }

    const result = [];
    for(let i = 0; i < minimumRow.length; ++i) {
        for(let j = 0; j < maximumCol.length; ++j) {
            if(minimumRow[i] === maximumCol[j])
                result.push(minimumRow[i]);
        }
    }
    return result;
};