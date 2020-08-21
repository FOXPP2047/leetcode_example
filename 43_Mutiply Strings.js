/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    
    const size1 = num1.length;
    const size2 = num2.length;
    let ans = new Array(size1 + size2).fill(0);
    let str = "";
    
    for(let i = size1 - 1; i >= 0; --i) {
        for(let j = size2 - 1; j >= 0; --j) {
            let product = (num1[i].charCodeAt(0) - 48) * (num2[j].charCodeAt(0) - 48);
            let p1 = i + j;
            let p2 = i + j + 1;
            let sum = product + ans[p2];
            ans[p1] += Math.floor(sum / 10);
            ans[p2] = (sum % 10);
        }
    }
    
    for(let p of ans) {
        if(!(str.length === 0 && p === 0)) str += p;
    }
    return str;
};