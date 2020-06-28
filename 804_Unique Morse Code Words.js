/**
 * @param {string[]} words
 * @return {number}
 */
const getIdx = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)

var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    if(!words) return;
    
    let morseArr = [];
    const result = [];
    
    for(let word of words) {
        let code = "";
        for(let mor of word) {
            code += morse[getIdx(mor)];
        }
        if(!result.includes(code)) result.push(code);
    }
    return result.length;
};