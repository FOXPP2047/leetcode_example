/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = new Map();
    for(let i = 0; i < A.length; ++i) {
        if(map.has(A[i])) {
            map.set(A[i], map.get(A[i]) + 1);
        } else map.set(A[i], 1);
    }
    
    let rValue = 0;
    let result = 0;
    map.forEach(function(value, key) {
        if(rValue < value) {
            rValue = value
            result = key;
        }    
    });
    
    return result;
};