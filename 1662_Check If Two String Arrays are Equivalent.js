/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let i = 0, j = 0;
    let inner1 = 0, inner2 = 0;
    
    const size1 = word1.length, size2 = word2.length;
    
    while(i < size1 && j < size2) {
        if(word1[i][inner1] !== word2[j][inner2]) {
            return false;
        }
        
        if(word1[i].length - 1 === inner1) {
            ++i;
            inner1 = -1;
        }
        
        if(word2[j].length - 1 === inner2) {
            ++j;
            inner2 = -1;
        }
        ++inner1;
        ++inner2;
    }
    
    if(i === size1 && j === size2) {
        return true;
    }
    return false;
};