/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    
    points.sort((p1, p2) => {
        return (Math.pow(p1[0], 2) + Math.pow(p1[1], 2)) - (Math.pow(p2[0], 2) + Math.pow(p2[1], 2));
    });
    
    const result = [];
    for(let i = 0; i < K; ++i) {
        result.push(points[i]);
    }
    return result;
};