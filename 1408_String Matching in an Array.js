/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const size = words.length;
    words.sort((a, b) => a.length - b.length);
    
    const result = [];
    
    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if(words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }
    return result;
};