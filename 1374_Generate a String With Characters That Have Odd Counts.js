/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let str = "";
    
    if(n % 2 === 1) {
        for(let i = 0; i < n; ++i) {
            str += "a";
        }
    } else {
        for(let i = 0; i < n - 1; ++i) {
            str += "a";
        }
        str += "b";
    }
    return str;
};