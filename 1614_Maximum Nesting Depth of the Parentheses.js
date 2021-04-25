/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let result = -Number.MAX_VALUE;
    let curr = 0;
    for(let i = 0; i < s.length; ++i) {
        if(s[i] === "(") {
            ++curr;
        } else if(s[i] === ")") {
            --curr;
        }
        
        if(curr > result) {
            result = curr;
        }
    }
    return result;
};