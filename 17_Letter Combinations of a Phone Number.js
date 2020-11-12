/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    let obj = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi", 
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv", 
        "9" : "wxyz"
    };

    const result = []
    const dfs = (index, str) => {
        if(index === digits.length) {
            result.push(str);
            return;
        }
        for (const c of obj[digits[index]]) {
            dfs(index + 1, str + c);
        }
    };
     
    dfs(0, "");
    return result;
};