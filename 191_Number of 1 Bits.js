/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    let mask = 1;
    
    for(let i = 0; i < 32; ++i) {
        if(n & mask) ++result;
        mask <<= 1;
    }
    
    return result;
};