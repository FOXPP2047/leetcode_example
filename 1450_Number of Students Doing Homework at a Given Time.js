/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let result = 0;
    const size = startTime.length;
    for(let i = 0; i < size; ++i) {
        if(startTime[i] <= queryTime && queryTime <= endTime[i]) {
            result++;
        } 
    }
    return result;
};