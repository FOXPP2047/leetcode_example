/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let arr = [];
    
    for(let i = 1; i <= n; ++i) {
        if(n % i === 0) arr.push(i);
    }
    
    let result = 0;
    
    if(arr[k - 1]) result = arr[k - 1];
    else result = -1;
    return result;
};