/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    
    if(numRows === 0) {
        return result;
    }
    
    result.push([1]);
    
    for(let i = 1; i < numRows; ++i) {
        const prevRow = result[result.length - 1];
        const shiftLeft = [...prevRow, 0];
        const shiftRight = [0, ...prevRow];
        
        console.log(shiftLeft, shiftRight);
        
        const currRow = shiftLeft.map((r, i) => r + shiftRight[i]);
        
        result.push(currRow)
    }
    return result;
};