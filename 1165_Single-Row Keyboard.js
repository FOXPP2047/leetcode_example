/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let map = new Map();
    
    const keyboardSize = keyboard.length;
    const size = word.length;
    
    let result = 0;
    let curr = 0;
    
    for(let i = 0; i < keyboardSize; ++i) {
        map.set(keyboard[i], i);            
    }
    
    for(let i = 0; i < size; ++i) {
        let location = map.get(word[i]);
        result += Math.abs(location - curr);
        curr = location;
    }
    
    return result;
};