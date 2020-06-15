/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const arr = Array.from(s);
    let count = 0;
    let split = 0;
    for(const i in arr) {
        if(arr[i] === "L") split -= 1;
        else if(arr[i] === "R") split += 1;
        
        if(split === 0) count += 1;
    }
    return count;
};