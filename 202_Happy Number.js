/**
 * @param {number} n
 * @return {boolean}
 */
const getNumber = (n) => {
    let arr = [];
    let result = 0;
    
    while(n) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    
    for(let i = 0; i < arr.length; ++i) {
        result += Math.pow(arr[i], 2);    
    }
    
    return result;
}

var isHappy = function(n) {
    let set = new Set();
    let arr = [];
    
    while (n !== 1) {
        n = getNumber(n);
        
        if(set.has(n)) return false;
        else set.add(n);
    }
    return true;
};
