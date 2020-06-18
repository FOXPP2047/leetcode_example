/**
 * @param {number[][]} grid
 * @return {number}
 */

const binary_search = (arr) => {
    let end = arr.length - 1;
    let start = 0;
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] < 0) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

var countNegatives = function(grid) {
    let result = 0;
    for(const row of grid) {
        result += (row.length - binary_search(row));
    }
    return result;
};