/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let map = {};
    words.sort((a, b) => a.length - b.length);
    
    for(let word of words) {
        let longest = 0;
        for(let i = 0; i < word.length; ++i) {
            let pre = word.slice(0, i) + word.slice(i + 1);
            longest = Math.max(longest, (map[pre] || 0) + 1);
        }
        map[word] = longest
    }
    return Math.max(...Object.values(map));
};