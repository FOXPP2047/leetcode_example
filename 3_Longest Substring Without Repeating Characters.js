 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, max = 0;
    let map = new Map();
    const size = s.length;
    
    for(let i = 0; i < size; ++i) {
        let c = s[i];
        if(map.get(c) >= start) {
            start = map.get(c) + 1;
        }
            
        map.set(c, i);

        if(i - start + 1 > max) {
            max = i - start + 1;
        } 
    }
    return max;
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, result = 0;
    let map = new Map();
    
    const size = s.length;
    
    for(let i = 0; i < size; ++i) {
        let char = s[i];
        
        if(map.get(char) >= start) {
            start = map.get(char) + 1;
        }
        map.set(char, i);
        
        if(i - start + 1 > result) result = i - start + 1;
    }
    return result;
};