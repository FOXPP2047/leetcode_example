/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    const size = points.length;
    let result = 0;
    
    for(let i = size - 1; i > 0; --i) {
        result += Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]));
    }
    
    return result;
};