/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const size = S.length;
    
    let newStr = "";
    let count = 0;
    
    for(let i = 0; i < size; ++i) {
        if(S.charAt(i) === "(" && count++ > 0) newStr += S.charAt(i);    
        else if(S.charAt(i) === ")" && count-- > 1) newStr += S.charAt(i);
    }
    

    return newStr;
};