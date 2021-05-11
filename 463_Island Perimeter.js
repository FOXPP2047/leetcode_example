/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rowSize = grid.length;
    const colSize = grid[0].length;
    
    let result = 0;
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            if(!grid[i][j]) continue;
            
            result += 4;
            
            if (i > 0 && grid[i - 1][j]) --result;
            if (j > 0 && grid[i][j - 1]) --result;
            if (i < rowSize - 1 && grid[i + 1][j]) --result;
            if (j < colSize - 1 && grid[i][j + 1]) --result;
        }
    }
    return result;
};