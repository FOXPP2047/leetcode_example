/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hLength = haystack.length;
    const nLength = needle.length;
    
    if(nLength === 0)
        return 0;
    let lps = kmp(needle);
    
    for(let i = 0, j = 0; i < hLength;) {
        if(haystack[i] === needle[j]) {
            i++, j++;
        }
        if(j === nLength) 
            return i - j;
        if(i < hLength && haystack[i] !== needle[j]) {
            if(j) 
                j = lps[j - 1];
            else 
                i++;
        }
        
    }
    return -1;
};

//kmp algorithm
let kmp = (needle) => {
    let nLength = needle.length;
    let lps = new Array(nLength).fill(0);
    
    for (let i = 1, length = 0; i < nLength;) {
        if(needle[i] === needle[length]) {
            length++;
            lps[i] = length;
            i++;
        } else if (length) {
            length = lps[length - 1];
        } else {
            lps[i] = 0; 
            i++;
        }
    }
    return lps;
}


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const size = haystack.length;
    const needleSize = needle.length;
    
    if (haystack === "" && needle === "") {
        return 0;
    }
    
    for(let i = 0; i < size; ++i) {
        if(haystack.substring(i, i + needleSize) === needle) {
            return i;
        }
    }
    return -1;
};