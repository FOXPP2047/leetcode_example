/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = [];
    
    while(num) {
        let remain = num % 2;
        binary.push(remain);
        num = Math.floor(num / 2);
    }
    
    for(let i = 0; i < binary.length; ++i) {
        if(binary[i] === 1) binary[i] = 0;
        else binary[i] = 1;
    }
    
    let complement = 0;
    let bin = 2 ** 0;
    for(let i = 0; i < binary.length; ++i) {
        complement += (binary[i] * bin)
        bin *= 2;
    }
    return complement;
};

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let todo = num, bit = 1;
    
    while(todo) {
        num = num ^ bit;
        bit = bit << 1;
        todo = todo >> 1;
    }
    return num;
};