/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    if(k === 1) return s;
    
    for(let i = 0; i < s.length; ++i) {
        if(i === 0 || s[i] !== s[i - 1]) stack.push(1);
        else if((++stack[stack.length - 1]) === k) {
            stack.pop();
            s = s.slice(0, i - k + 1) + s.slice(i + 1);
            i = i - k;
        }
    }
    return s;
};