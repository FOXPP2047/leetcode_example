/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function(S) {
    const size = S.length;
    
    if(!size) return S;
    
    let anchor = 0, balance = 0;
    let mountain = [];
    
    for(let i = 0; i < size; ++i) {
        balance += (S.charAt(i) === '1' ? 1 : -1);
        if(balance === 0) {
            mountain.push("1" + makeLargestSpecial(S.substring(anchor + 1, i)) + "0");
            anchor = i + 1;
        }
    }
    
    mountain.sort((a, b) => b.localeCompare(a));
    
    let result = "";
    
    for(let i = 0; i < mountain.length; ++i) {
        result += mountain[i];
    }
    
    return result;
    
};