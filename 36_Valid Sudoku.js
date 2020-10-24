/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowRules = new Array(9).fill().map(() => new Set());
    let colRules = new Array(9).fill().map(() => new Set());
    let mixRules = new Array(9).fill().map(() => new Set());
    
    for(let i = 0; i < 9; ++i) {
        for(let j = 0; j < 9; ++j) {
            const curr = board[i][j];
            
            if(curr === ".") continue;
            
            const mixIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            if(rowRules[i].has(curr) ||
              colRules[j].has(curr) ||
              mixRules[mixIndex].has(curr))
                return false;
            rowRules[i].add(curr);
            colRules[j].add(curr);
            mixRules[mixIndex].add(curr);
        }
    }
    return true;
};