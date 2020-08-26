/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    const result = [];
    let i = 0, j = 0;
    
    while(i < A.length && j < B.length) {
        const low = Math.max(A[i][0], B[j][0]);
        const high = Math.min(A[i][1], B[j][1]);
        
        if(low <= high) result.push([low, high]);
        
        if(A[i][1] < B[j][1]) ++i;
        else ++j;
    }
    
    return result;
};