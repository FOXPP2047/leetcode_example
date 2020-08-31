/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const halfSize = Math.floor(s.length / 2);
    const size = s.length;
    for(let i = 0; i < halfSize; ++i) {
        let temp = s[i];
        s[i] = s[size - 1 - i];
        s[size - 1 - i] = temp;
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    const size = s.length;
    const halfSize = Math.floor(size / 2);
    
    for(let i = 0; i < halfSize; ++i) {
        let temp = s[i];
        s[i] = s[size - 1 - i];
        s[size - 1 - i] = temp;
    }
};