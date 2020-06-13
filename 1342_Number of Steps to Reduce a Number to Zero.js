/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let result = 0;
    while(num) {
        if(num % 2 === 1) {
            num -= 1;
        } else {
            num /= 2;
        }
        
        result++;
    }
    return result;
};