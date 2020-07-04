/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let arr = new Array(n).fill(0);
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = new Array(m).fill(0);
    }
    
    for(let i = 0; i < indices.length; ++i) {
        for(let j = 0; j < m; ++j) {
            arr[indices[i][0]][j]++;    
        }
        for(let j = 0; j < n; ++j) {
            arr[j][indices[i][1]]++;    
        }
    }
    
    let result = 0;
    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < m; ++j) {
            if(arr[i][j] % 2 === 1)
                result++;
        }
    }
    return result;
};

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let row = Array(n).fill(false);
    let col = Array(m).fill(false);
    
    indices.forEach(([x, y]) => {
        row[x] = !row[x];
        col[y] = !col[y];
    });
    console.log(row, col);
    const numRow = row.reduce((accum, curr) => (curr ? accum + 1 : accum), 0);
    const numCol = col.reduce((accum, curr) => (curr ? accum + 1 : accum), 0);
    console.log(numRow, numCol);
    return numRow * m + numCol * n - 2 * numRow * numCol;
};
//odd value in matrix