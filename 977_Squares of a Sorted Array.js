/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let result = [];
    for(let i = 0; i < A.length; ++i) {
        result.push(A[i] * A[i]);
    }
    return result.sort((a, b) => a - b);
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let result = [];
    let start = 0;
    let end = A.length - 1;
    let p = end;

    while (start <= end) {
        if (A[start] ** 2 > A[end] ** 2) {
            result[p--] = A[start++] ** 2;
        } else {
            result[p--] = A[end--] ** 2;
        }
    }
    
    return result;
};