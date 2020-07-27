/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(A.length <= 1) return [];
    let result = findCharBetweenTwoWords(A[0], A[1]);
   
    for(let i = 2; i < A.length; ++i) {
        result = findCharBetweenTwoWords(result, A[i]);
    }
    return result.split("");
};

const findCharBetweenTwoWords = (str1, str2) => {
    let result = "";
    let map = {};
    
    for(let c of str1) {
        if(!map[c]) map[c] = 1;
        else map[c]++;
    }
    
    for(let c of str2) {
        if(map[c]) {
            result += c;
            map[c]--;
        }
    }
    return result;
}