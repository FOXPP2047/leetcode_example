/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    for (let word of words) {
        let map = createMap(chars);

        if (isGoodWord(word, map)) 
            result += word.length;  
    }
    
    return result;   
};

const createMap = (chars) => {
    let map = {};
    for(let i = 0; i < chars.length; ++i) {
        if(!map[chars[i]]) map[chars[i]] = 0;
        map[chars[i]]++;
    }
    return map;
}

const isGoodWord = (word, map) => {

    for(let i = 0; i < word.length; ++i) {
        if(!map[word[i]] || map[word[i]] === 0) 
            return false;
        
        map[word[i]]--;
    }
    return true;
}
