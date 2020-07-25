/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = new Array(1001);
    for(let i = 0; i < arr.length; ++i) arr[i] = 0;
    
    for(let i = 0; i < arr1.length; ++i) {
        arr[arr1[i]]++;
    }
    
    const result = [];
    for(let i = 0; i < arr2.length; ++i) {
        while(arr[arr2[i]]-- > 0)
            result.push(arr2[i]);
    }
    const map = new Map();
    
    for(let i = 0; i < result.length; ++i) {
        if(!map.has(result[i])) map.set(result[i], 1);
    }

    arr1.sort((a, b) => a - b);
    
    for(let i = 0; i < arr1.length; ++i) {
        if(!map.has(arr1[i])) result.push(arr1[i]);
    }
    return result;    
};