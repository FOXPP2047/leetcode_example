/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const size = s.length;
    let count = 0;
    
    for(let i = size - 1; i >= 0; --i) {
        if(s.charAt(i) === " ") {
            if(count === 0) continue;
            else break;
        }
        else ++count;
    }
    return count;
};