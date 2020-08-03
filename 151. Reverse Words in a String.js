/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let str = "";
    const size = s.length;
    
    for(let i = 0; i < size; ++i) {
        if(s[i] === " " && str !== "" && str !== " ") {
            result.push(str);
            str = "";
        } else if(s[i] !== " ") {
            str += s[i];
        } 
        if(i === size - 1 && str) {
            result.push(str);
            str = "";
        }
    } 
    
    for(let i = result.length - 1; i >= 0; --i) {
        str += result[i];
        if(i !== 0) str += " ";
    }
    return str;
};