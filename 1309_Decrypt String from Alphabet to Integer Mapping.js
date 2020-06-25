/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const offset = 96;
    const size = s.length;
    let str = ""; 
    
    for (let i = 0; i < size; ++i) {
        let curr = s[i];
        
        if (s[i + 2] === '#') {
            curr = s.slice(i, i + 2);
            i += 2;
        }
            
        str += String.fromCharCode(parseInt(curr) + offset);
    }
    
    return str;
};