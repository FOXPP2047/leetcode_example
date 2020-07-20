/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let even = A.filter(x => x % 2 === 0);
    let odd = A.filter(x => x % 2 === 1);
    const result = [];
    
    for(let i = 0; i < A.length; ++i) {
        if(i % 2 === 0) {
            result.push(even.pop());
        } else result.push(odd.pop());
    }
    return result;
};