/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let products = 1;
    let sums = 0;
    
    while(n) {
        let remain = n % 10;
        n = Math.floor(n / 10);
        products *= remain;
        sums += remain;
    }
    return products - sums;
};

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    const arr = Array.from(String(n), Number);
    const products = arr.reduce((n1, n2) => n1 * n2);
    const sums = arr.reduce((n1, n2) => n1 + n2);
    
    return products - sums;
};