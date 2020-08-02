/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let size = indices.length;
    
    let map = new Map();
    let result = "";
    
    for(let i = 0; i < size; ++i) {
        map.set(indices[i], s.charAt(i));
    }
    
    for(let i = 0; i < size; ++i) {
        result += map.get(i);
    }
    
    return result;
};