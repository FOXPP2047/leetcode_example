/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let strN = N.toString();
    
    if(isMonotone(strN)) return N;
    
    while(!isMonotone(strN)) {
        let newStr = "";
        const cliffIndex = getCliffIndex(strN);
        newStr = strN.substring(0, cliffIndex);
        let monoStr = (Number(strN[cliffIndex]) - 1).toString();
        monoStr += "9".repeat(strN.length - cliffIndex - 1);
        newStr += monoStr;
        strN = newStr;
    }
    return Number(strN);
};

const getCliffIndex = (nums) => {
    for(let i = 0; i < nums.length - 1; ++i) {
        if(Number(nums[i]) > Number(nums[i + 1])) return i;
    }
}

const isMonotone = (nums) => {
    for(let i = 0; i < nums.length - 1; ++i) {
        if(Number(nums[i]) > Number(nums[i + 1])) return false;
    }
    return true;
}