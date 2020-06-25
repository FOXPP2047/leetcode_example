/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = [];
    const size = arr.length;
    let biggest = 0;
    
    for(let i = 0; i < size; ++i) {
        biggest = 0;
        for(let j = i + 1; j < size; ++j) {
            if(biggest < arr[j])
                biggest = arr[j];
        }
        result.push(biggest);
    }
    result[result.length - 1] = -1;
    return result;
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; --i) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
};