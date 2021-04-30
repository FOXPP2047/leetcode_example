/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = new Map();
    
    for(let i = 0; i < sentence.length; ++i) {
        if(!map.has(sentence[i])) {
            map.set(sentence[i], 1);
        } 
    } 
    
    if(map.size === 26) {
        return true;
    }
    return false;
};