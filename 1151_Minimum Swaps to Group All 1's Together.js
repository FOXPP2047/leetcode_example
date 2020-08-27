/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    const size = data.length;
    for(let i = 1; i < size; ++i) {
        data[i] += data[i - 1];
    }
    let k = data[size - 1];
    if(k === 0 || k === 1) return 0;
    
    let max = data[k - 1];
    
    for(let i = k; i < size; ++i) {
        max = Math.max(max, data[i] - data[i - k]);
    }
    return k - max;
};