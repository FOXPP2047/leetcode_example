/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const size = s.length;
    for(let i = 0; i < size; ++i) {
        count += helper(s, i, i);
        count += helper(s, i, i + 1);
    }
    return count
};

const helper = (str, low, high) => {
    const size = str.length;
    let count = 0;
    while(low >= 0 && high < size && str[low] === str[high]) {
        ++count;
        --low;
        ++high;
    }
    return count;
}