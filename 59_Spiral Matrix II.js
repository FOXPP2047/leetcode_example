/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array(n).fill(0);
    
    for(let i = 0; i < n; ++i) {
        result[i] = new Array(n).fill(0);
    }
    
    let count = 1;
    let totalLayer = Math.floor((n + 1) / 2);
    
    for(let layer = 0; layer < totalLayer; ++layer) {
        //left to right
        for(let ptr = layer; ptr < n - layer; ++ptr) {
            result[layer][ptr] = count++;
        }
        //top to bottom
        for(let ptr = layer + 1; ptr < n - layer; ++ptr) {
            result[ptr][n - layer - 1] = count++;
        }
        //right to left
        for(let ptr = n - layer - 2; ptr >= layer; --ptr) {
            result[n - layer - 1][ptr] = count++;
        }
        //bottom to top
        for(let ptr = n - layer - 2; ptr > layer; --ptr) {
            result[ptr][layer] = count++;
        }
    }
    return result;
};