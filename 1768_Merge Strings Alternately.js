/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const size1 = word1.length;
    const size2 = word2.length;
    
    let i = 0, j = 0;
    let result = "";
    while(i < size1 && j < size2) {
        result += word1[i];
        result += word2[j];
        
        ++i;
        ++j;
    }
    
    while(i < size1) {
        result += word1[i];
        ++i;
    }
    
    while(j < size2) {
        result += word2[j];
        ++j;
    }
    
    return result;
};