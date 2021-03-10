/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict.length === 0) return false;
    
    const wordSet = new Set(wordDict);
    const visited = new Set();
    
    const q = [0];
    
    while(q.length) {
        const front = q.shift();
        
        if(!visited.has(front)) {
            for(let back = front + 1; back <= s.length; ++back) {
                if(wordSet.has(s.slice(front, back))) {
                    if(back === s.length) return true;
                    q.push(back);
                }
            }
            visited.add(front);
        }
    }
    return false;
};
