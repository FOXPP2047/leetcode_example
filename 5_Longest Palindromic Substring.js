/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    const size = s.length;
    
    for(let i = 0; i < size; ++i) {
        for(let j = 0; j < 2; ++j) {
            let left = i;
            let right = i + j;
            
            while(left >= 0 && s[left] === s[right]) {
                --left;
                ++right;
            }
            if ((right - left - 1) > result.length) {
                result = s.substring(left + 1, right);
            }
        }    
    }
    return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const size = s.length;
    let result = "";
    
    for(let i = 0; i < size; ++i) {
        for(let j = 0; j < 2; ++j) {
            let left = i;
            let right = i + j;
            while(left >= 0 && s[left] === s[right]) {
                --left;
                ++right;
            }
            
            if((right - left - 1) > result.length) {
                result = s.substring(left + 1, right);
            }
        }
        if(Math.ceil(result.length / 2) >= size - i) {
            break;
        }
    }
    return result;
};