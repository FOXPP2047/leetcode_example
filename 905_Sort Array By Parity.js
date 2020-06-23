/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const size = A.length;
    const result = [];
    const odd = [];
    for(let i = 0; i < size; ++i) {
        if(A[i] % 2 === 0) result.push(A[i]);
        else odd.push(A[i]);
    }
    
    for(let i = 0; i < odd.length; ++i) {
        result.push(odd[i]);
    }
    return result;
};