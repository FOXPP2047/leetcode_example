/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let string = "";
    let result = "";
    for(let i = 0; i < s.length; ++i) {
        if(s[i] === " ") {
            for(let j = string.length - 1; j >= 0; --j)
                result += string[j];
            result += " ";
            string = "";
        } else if(i === s.length - 1) {
            string += s[i];
            for(let j = string.length - 1; j >= 0; --j)
                result += string[j];
        } else {
            string += s[i];
        }
    }
    return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let word = '';
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ' ') {
            result += word + s[i];
            word = '';
        } else {
            word = s[i] + word;
        }
    }
    return result + word;
};