/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let result = 0;
    
    while(n > 0) {
        result += n % k;
        n = Math.floor(n / k);
    }
    return result;
};