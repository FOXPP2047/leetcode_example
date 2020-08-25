/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    const size = A.length;
    
    let isIncreasing = false;
    let isDecreasing = false;
    
    for(let i = 1; i < size; ++i) {
        if(isIncreasing && isDecreasing) return false;
        
        if(A[i] > A[i - 1]) isIncreasing = true;
        else if(A[i] < A[i - 1]) isDecreasing = true;
    }
    
    let result = !(isIncreasing && isDecreasing);
    
    return result;
};