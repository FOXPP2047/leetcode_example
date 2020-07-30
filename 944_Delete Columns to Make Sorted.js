/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let result = 0;
    
    for(let i = 0; i < A[0].length; ++i) {
        for(let j = 0; j < A.length - 1; ++j) {
            if(A[j].charAt(i) > A[j + 1].charAt(i)) {
                result++;
                break;
            }
        }
    }
    
    return result;
};