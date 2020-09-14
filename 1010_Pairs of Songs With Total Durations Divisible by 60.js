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

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let map = new Map();
    
    for (let t of time) {
        let mod = t % 60;
        let sHalf = mod === 0 ? 0 : 60 - mod;
        
        if(map.has(sHalf)) count += map.get(sHalf);
        
        if(map.has(mod)) {
            map.set(mod, map.get(mod) + 1);
        } else map.set(mod, 1);
    }
    return count;
};