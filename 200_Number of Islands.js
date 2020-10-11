/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, r, c) => {
    let nr = grid.length;
    let nc = grid[0].length;
    
    grid[r][c] = '0';
    if(r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c);
    if(r + 1 < nr && grid[r + 1][c] === '1') dfs(grid, r + 1, c);
    if(c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1);
    if(c + 1 < nc && grid[r][c + 1] === '1') dfs(grid, r, c + 1);
}
var numIslands = function(grid) {
    let numRow = grid.length;
    if(!numRow) return 0;
    let numCol = grid[0].length;
    
    let result = 0;
    
    for(let r = 0; r < numRow; ++r) {
        for(let c = 0; c < numCol; ++c) {
            if(grid[r][c] === '1') {
                ++result;
                dfs(grid, r, c);
            }
        }
    }
    
    return result;
};