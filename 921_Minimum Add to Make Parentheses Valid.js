/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let open = 0;
    let close = 0;
    
    for(let i = 0; i < S.length; ++i) {
        if(S[i] === "(") {
            open++;
        } else {
            if(open > 0) open--;
            else close++;
        }
    }
    return open + close;
};