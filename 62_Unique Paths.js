/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let curr = new Array(n).fill(1); 
    
    for (let i = 1; i < m; ++i) {
        let prev = [...cur]; 
        for (let j = 1; j < n; ++j)
            curr[j] = prev[j] + curr[j - 1]; 
    }
    return curr[n - 1];
};