/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a, b) => a - b);
    let arithmetic = Math.abs(arr[1] - arr[0]);
    
    for(let i = 1; i < arr.length - 1; ++i) {
        if(Math.abs(arr[i + 1] - arr[i]) === arithmetic)
            continue;
        else return false;
    }
    return true;
};