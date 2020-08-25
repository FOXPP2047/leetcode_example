/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let ordering = 0;
    let map = new Map();
    for(let i = 0; i < order.length; ++i) {
        map.set(order[i], ordering++);
    }
    
    const size = words.length;
    for(let i = 1; i < size; ++i) {
        let prev = words[i - 1], curr = words[i];
        
        let point = 0;
        while(prev[point] === curr[point]) point++;
        if(curr[point] === undefined) return false; //if the curr word is less than prev, false
        if(map.get(prev[point]) > map.get(curr[point])) return false;
    }
    return true;
};