/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const size = strs.length;
    
    if (size === 0) {
        return "";
    }
    
    let result = strs[0];
    
    for (let i = 1; i < size; i++) {
        let curr = strs[i];
        
        result = comparePrefix(result, curr);
    }
    return result;
};

const comparePrefix = (str1, str2) => {
    let len = Math.min(str1.length, str2.length);
    
    let prefix = "";
    
    for (let i = 0; i < len; i++) {
        if(str1[i] === str2[i]) {
            prefix += str1[i];
        } else {
            return prefix;
        }
    }
    return prefix;
}