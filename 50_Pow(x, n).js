/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    let result = 1;
    let curr = x;
    let pow = Math.abs(n);
    
    while(pow) {
        if(pow % 2 === 1)
            result = curr * result;
        curr = curr * curr;
        pow = Math.floor(pow / 2);
    }
    
    if(n < 0) return (1 / result);
    else return result;
};