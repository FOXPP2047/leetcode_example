/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const size = s.length;
    let i = 0;
    let pMap = {}, qMap = {};
    let result = 0;
    
    while(i < size - 1) {
        for(let j = 0; j < i + 1; ++j) {
            if(!pMap[s[j]]) pMap[s[j]] = 1;
            else pMap[s[j]]++;
        }
        
        for(let j = i + 1; j < size; ++j) {
            if(!qMap[s[j]]) qMap[s[j]] = 1;
            else qMap[s[j]]++;
        }
        
        let pArr = Object.keys(pMap);
        let qArr = Object.keys(qMap);
        
        if(pArr.length === qArr.length)
            result++;
        pMap = {};
        qMap = {};
        ++i;
    }
    return result;
}; //52/61 test cases passed

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const size = s.length;
    let set = new Set();
    let p = new Array(size), q = new Array(size);
    let result = 0;
    for (let i = 0; i < s.length; ++i) {
        set.add(s[i]);
        p[i] = set.size;
    }

    set = new Set();
    for (let i = s.length-1; i >= 0; --i) {
        set.add(s[i]);
        q[i] = set.size;
    }    
    
    for(let i = 1; i < size; ++i) {
        if(p[i - 1] === q[i]) result++;
    }
    return result;
};