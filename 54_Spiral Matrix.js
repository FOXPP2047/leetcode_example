/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    
    if (matrix.length === 0) return result;

    let rowstart = 0;
    let colstart = 0;
    let rowend = matrix.length - 1;
    let colend = matrix[0].length - 1;

    while((rowstart <= rowend) && (colstart <= colend)) {

        for(let col = colstart; col <= colend; ++col) {
            result.push(matrix[rowstart][col]);
        }
        
        for (let row = rowstart+1; row <= rowend; ++row) {
            result.push(matrix[row][colend]);
        }
        
        for (let col = colend - 1; col >= colstart; --col) {
            if (rowstart === rowend) break;
            result.push(matrix[rowend][col]);
        }
        
        for (let row = rowend - 1; row > rowstart; --row) {
            if (colstart === colend) break;
            result.push(matrix[row][colstart]);
        }

        rowstart++;
        rowend--;
        colstart++;
        colend--;
    }

    return result;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    
    while(matrix.length) {
        const first = matrix.shift();
        result.push(...first);
        for(const m of matrix) {
            let val = m.pop();
            if(val) {
                result.push(val);
                m.reverse();
            }
        }
        matrix.reverse();
    }
    return result;
};