/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr = [];
    let store = num;
    
    while(store) {
        const remain = store % 10;
        arr.push(remain)
        store = parseInt(store / 10);
    }
    
    let newArr = [];
    
    for(let i = arr.length - 1; i >= 0; --i) {
        newArr.push(arr[i]);
    }
    for(let i = 0; i < newArr.length; ++i) {
        if(newArr[i] === 6) {
            newArr[i] = 9;
            break;
        }
    }

    let max = 0;   
    for(let i = 0; i < newArr.length; ++i) {
        const count = newArr[i];
        max = max * 10 + count;
    }
    return max;
};