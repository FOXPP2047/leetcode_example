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

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let start = 0;
    let end = A.length - 1;
    while(start < end) {
      if(A[start] % 2 === 0) {
        start++;
        continue;
      }
      if(A[end] % 2 === 1) {
        end--;
        continue;
      }
      if(A[start] % 2 === 1 && A[end] % 2 === 0) {
        const temp = A[start];
        A[start] = A[end];
        A[end] = temp;
        start++;
        end--;
      }
    }
    return A;
};