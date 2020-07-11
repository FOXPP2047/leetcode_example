/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let increase = 0;
    let decrease = S.length;
    const result = [];
    
    for(let i = 0; i < S.length; ++i) {
        if(S[i] === "I") {
            result.push(increase++);        
        } else if(S[i] === "D") {
            result.push(decrease--);
        }
    }
    
    if(S[S.length - 1] === "I") {
        result.push(increase);
    } else if(S[S.length - 1] === "D") {
        result.push(decrease);
    }
    return result;
};