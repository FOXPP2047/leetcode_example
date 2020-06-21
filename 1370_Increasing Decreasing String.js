/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let size = s.length;
    
    const newMap = {};
    for(const c of s) {
        newMap[c] = (newMap[c] || 0) + 1;
    }
    
    const result = [];
    
    while(size > 0) {
        let keys = Object.keys(newMap).sort((a, b) => a.localeCompare(b));
        keys.forEach((key) => {
            result.push(key);
            newMap[key] -= 1;
            if(!newMap[key]) delete newMap[key];
            size -= 1;
        });
        keys = Object.keys(newMap).sort((a, b) => b.localeCompare(a));
        keys.forEach((key) => {
            result.push(key);
            newMap[key] -= 1;
            if(!newMap[key]) delete newMap[key];
            size -= 1;
        });
    }
    return result.join("");
};