/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let max = -Number.MAX_VALUE;
    let result = 0;
    
    for(let i = 0; i < A.length; ++i) {
        if(A[i] > max) {
            max = A[i];
            result = i;
        }
    }
    return result;
};