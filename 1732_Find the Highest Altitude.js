/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0;
    let result = curr;
    
    for(let i = 0; i < gain.length; ++i) {
        curr += gain[i];
        
        if(curr > result) {
            result = curr;
        }
    }
    return result;
};