/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const size = time.length;
    let count = 0;
    
    for(let i = 0; i < size; ++i) {
        for(let j = i + 1; j < size; ++j) {
            if((time[i] + time[j]) % 60 === 0) ++count;        
        }
    }
    return count;
};