/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    
    for(let i = 0; i < arr.length; ++i) {
        if(map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1);
        else map.set(arr[i], 1);
    }
    
    let values = [];
    for(let value of map.values()) {
        values.push(value);
    }
    values = values.sort((a, b) => a - b);
    for(let i = 0; i < values.length - 1; ++i) {
        if(values[i] === values[i + 1])
            return false;
    }
    return true;
};