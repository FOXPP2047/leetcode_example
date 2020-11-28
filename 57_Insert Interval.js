/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const isOverLap = (prev, curr) => {
    return (prev[1] >= curr[0] && prev[1] <= curr[1]) ||
        (prev[0] >= curr[0] && prev[0] <= curr[1]) ||
        (prev[0] <= curr[0] && prev[1] >= curr[1]);
}

var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    
    const intervalsSize = intervals.length;
    if(intervals.length === 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let prev = [intervals[0][0], intervals[0][1]];
    let result = [];
    
    for(let i = 1; i < intervalsSize; ++i) {
        const curr = intervals[i];
        
        if(isOverLap(prev, curr)) {
            prev[0] = Math.min(prev[0], curr[0]);
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            result.push([...prev]);
            prev[0] = curr[0];
            prev[1] = curr[1];
        }
        
        if(i === intervalsSize - 1) result.push([...prev]);
    }
    
    return result;
};

