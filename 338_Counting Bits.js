/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const resultArr = [];    
    
    for(let i = 0; i <= num; ++i) {
        let result = 0;
        let curr = i;
        while(curr) {
            let remain = curr % 2;
            
            if(remain === 1) result++;
            
            curr = Math.floor(curr / 2);
        }
        resultArr.push(result);
    }
    
    return resultArr;
};

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let pow = 0;
    const result = [0];
    
    for(let i = 1; i <= num; ++i) {
        if(!(i & (i - 1))) {
            result.push(1);
            pow = i;
        } else {
            result.push(1 + result[i - pow]);
        }
    }
    return result;
};