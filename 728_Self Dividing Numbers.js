/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    for(let i = left; i <= right; ++i) {
        let number = i;
        let count = i;
        while(count) {
            let remain = count % 10;
            if(number % remain !== 0) break;
            count = Math.floor(count / 10);
            if(count === 0) result.push(number);
        }
    }
    return result;
};