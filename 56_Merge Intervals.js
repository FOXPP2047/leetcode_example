/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    const size = intervals.length;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    for(let i = 0; i < intervals.length; ++i) {
        const rLen = result.length;
        if(!rLen || result[rLen - 1][1] < intervals[i][0])
            result.push(intervals[i]);
        else result[rLen - 1][1] = Math.max(result[rLen - 1][1], intervals[i][1]);
    }
    return result;
};