/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let result = 0;
    
    while(xor > 0) {
        if(xor & 1 === 1)
            result++;
        xor >>= 1;
    }
    return result;
};