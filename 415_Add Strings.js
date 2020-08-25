/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let add = 0;
    let result = "";
    
    while(i >= 0 || j >= 0 || add > 0) {
        const number1 = i < 0 ? 0 : num1.charCodeAt(i) - 48;
        const number2 = j < 0 ? 0 : num2.charCodeAt(j) - 48;
        let sum = number1 + number2 + add;
        result = (sum % 10) + result;
        add = Math.floor(sum / 10);
        --i;
        --j;
    }
    return result;
};