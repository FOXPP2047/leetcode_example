/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; ++i) {
        if(map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
        else map.set(s[i], 1);
    }
    
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let result = "";
    
    for (let [key, value] of sortedMap.entries()) {
        for(let i = 0; i < value; ++i) {
            result += key;
        }
    }
    
    return result;
};