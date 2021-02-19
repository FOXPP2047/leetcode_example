/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    backtracking(result, "", 0, 0, n);
    return result;
};

const backtracking = (result, curr, open, close, max) => {
    if(curr.length === max * 2) {
        result.push(curr);
        return;
    }
    
    if(open < max) {
        backtracking(result, curr + "(", open + 1, close, max);
    }
    
    if(close < open) {
        backtracking(result, curr + ")", open, close + 1, max);
    }
}