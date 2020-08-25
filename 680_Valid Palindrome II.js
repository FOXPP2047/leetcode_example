/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, skipped = false) {
    const size = s.length;
    
    for(let i = 0, j = size - 1; i < j; ++i, --j) {
        if(s[i] !== s[j]) {
            if(skipped) return false;
            return validPalindrome(s.substring(i, j), true) || validPalindrome(s.substring(i + 1, j + 1), true);    
        }
    }
    return true;
};