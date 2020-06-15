/**
 * @param {number[][]} grid
 * @return {number}
 */
transpose = (m) => m[0].map((col, col_i) => m.map((row, row_i) => m[row_i][col_i]));

var maxIncreaseKeepingSkyline = function(grid) {
    let rowMaxes = grid.map((row) => Math.max(...row));
    let colMaxes = transpose(grid).map((row) => Math.max(...row));
    
    let result = 0;
    const rowSize = grid.length;
    const colSize = grid[0].length;
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            let total = Math.min(rowMaxes[i], colMaxes[j]);
            result += (total - grid[i][j]);
        }    
    }
    return result;
};