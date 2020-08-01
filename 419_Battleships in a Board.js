/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let result = 0;
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (board[i][j] == "X" && 
                (i == 0 || board[i - 1][j] != "X") && 
                (j == 0 || board[i][j - 1] != "X")) 
            {
                result++;
            }
        }
    }
    return result;
};