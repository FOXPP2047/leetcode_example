/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const size = s.length;
    
    let front = 0;
    let end = size - 1;
    
    
    while(front < end) {
        if(s[front] !== s[end]) return false;
        front++;
        end--;
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let str = "";
    for(let i = 0; i < s.length; ++i) {
        if((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || 
           (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57))
            str += s[i];
    }
    
    let begin = 0;
    let back = str.length - 1;
    
    while (begin < back) {
        if(str[begin] !== str[back]) return false;
        begin++;
        back--;
    }
    return true;
};