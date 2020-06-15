/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let permutation = [];
    const result = [];
    for(let i = 0; i < m; ++i) {
        permutation.push(i+1);
    }
    
    queries.forEach((e) => {
        let index = permutation.indexOf(e);
        result.push(index);
        permutation.splice(index, 1);
        permutation.splice(0, 0, e);
    });
    return result;
};

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let permutation = [];
    const result = [];
    for(let i = 0; i < m; ++i) {
        permutation.push(i+1);
    }
    
    queries.forEach((e) => {
        let index = permutation.indexOf(e);
        result.push(index);
        for(let i = index; i > 0; --i) {
            permutation[i] = permutation[i-1];
        }
        permutation[0] = e;
    });
    return result;
};