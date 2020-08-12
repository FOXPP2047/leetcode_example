/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const result = [];
    
    if(!matrix || !matrix.length || !matrix[0].length) return result;
    
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
    
    const pacific = [];
    const atlantic = [];
    
    for(let i = 0; i < rowSize; ++i) {
        let rowPacific = [];
        let rowAtlantic = [];
        for(let j = 0; j < colSize; ++j) {
            rowPacific.push(false);
            rowAtlantic.push(false);
        }
        pacific.push(rowPacific);
        atlantic.push(rowAtlantic);
    }
    
    for(let i = 0; i < rowSize; ++i) {
        traverse(0, i, pacific, -1, matrix);
        traverse(colSize - 1, i, atlantic, -1, matrix);
    }
    
    for(let i = 0; i < colSize; ++i) {
        traverse(i, 0, pacific, - 1, matrix);
        traverse(i, rowSize - 1, atlantic, - 1, matrix);
    }
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            if(pacific[i][j] && atlantic[i][j])
                result.push([i, j]);
        }
    }
    
    return result;
};

const traverse = (x, y, visited, height, matrix) => {
    if(x < 0 || x >= matrix[0].length || 
       y < 0 || y >= matrix.length || 
       visited[y][x] || matrix[y][x] < height)
        return;
    visited[y][x] = true;
    traverse(x + 1, y, visited, matrix[y][x], matrix);
    traverse(x - 1, y, visited, matrix[y][x], matrix);
    traverse(x, y + 1, visited, matrix[y][x], matrix);
    traverse(x, y - 1, visited, matrix[y][x], matrix);
}