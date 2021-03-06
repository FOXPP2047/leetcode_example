/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rowSize = board.length;
    
    if(!rowSize) {
        return false;
    }
    
    const colSize = board[0].length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const dfs = (r, c, strIndex, visited) => {
        if(board[r][c] !== word[strIndex]) return false;
        if(strIndex === word.length - 1) return true;
        
        board[r][c] = "-";
        for(const [dx, dy] of directions) {
            let i = r + dx;
            let j = c + dy;
            
            if(i >= 0 && i < rowSize && j >= 0 && j < colSize) {
                if(dfs(i, j, strIndex + 1)) return true;
            }
        }
        board[r][c] = word[strIndex]
        return false;
    }
    
    for(let i = 0; i < rowSize; ++i) {
        for(let j = 0; j < colSize; ++j) {
            if(dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};