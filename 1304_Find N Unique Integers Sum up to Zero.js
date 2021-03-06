/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = [];
    
    if(n % 2 === 1) {
        result.push(0);
        for(let i = 0; i < parseInt(n / 2); ++i) {
            result.push(i + 1);
            result.push(-(i + 1));
        }
    } else {
        for(let i = 0; i < parseInt(n / 2); ++i) {
            result.push(i + 1);
            result.push(-(i + 1));
        }
    }
    return result;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = [];
    let num = -n + 1;
    
    for(let i = 0; i < n; ++i) {
        result.push(num);
        num += 2;
    }

    return result;
};