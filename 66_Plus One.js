/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const size = digits.length;
    
    for(let i = size - 1; i >= 0; --i) {
        ++digits[i];
        if(digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};