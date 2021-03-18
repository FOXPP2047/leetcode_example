/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let neighbors = [0, 1, -1];
    
    let rowSize = board.length;
    
    if(!rowSize) return;
    
    let colSize = board[0].length;
    
    
    for(let r = 0; r < rowSize; ++r) {
        for(let c = 0; c < colSize; ++c) {
            let liveNeighbors = 0;
            
            
            for(let i = 0; i < 3; ++i) {
                for(let j = 0; j < 3; ++j) {
                    if(!(neighbors[i] == 0 && neighbors[j] == 0)) {
                        let row = r + neighbors[i];
                        let col = c + neighbors[j];
                        
                    if((row >= 0 && row < rowSize) && (col >= 0 & col < colSize) && Math.abs(board[row][col]) === 1) {
                            ++liveNeighbors;
                        }
                    }
                }
            }
            
            if((board[r][c] === 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[r][c] = -1;
            }
            
            if(board[r][c] === 0 && liveNeighbors === 3) {
                board[r][c] = 2;
            }
        }
    }
    
    for(let r = 0; r < rowSize; ++r) {
        for(let c = 0; c < colSize; ++c) {
            if(board[r][c] > 0) {
                board[r][c] = 1;
            } else {
                board[r][c] = 0;
            }
        }
    }
};