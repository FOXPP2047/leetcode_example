/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    const vowels = ["a", "e", "i", "o", "u"];
    
    let result = "";
    const size = S.length;
    
    for(let i = 0; i < size; ++i) {
        if(vowels.includes(S[i])) continue;
        else result += S[i];
    }
    
    return result;
};