/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    let curr = [];
    
    for(let i = 0; i < n; ++i) {
        result.push("Push");
        curr.push(i + 1);
        
        if(curr[curr.length - 1] !== target[curr.length - 1]) {
            curr.pop();
            result.push("Pop");
        }
        if(target.length === curr.length)
            break;
    }
    return result;
};