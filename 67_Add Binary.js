/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let add = 0;
    
    while (i >= 0 || j >= 0 || add > 0) {
        if(i >= 0) {
            add += parseInt(a[i])
            --i;
        } else add += 0;
        if(j >= 0) {
            add += parseInt(b[j]);
            --j;
        } else add += 0;
        
        result = (add % 2) + result;
        add = Math.floor(add / 2);
    }
    return result;
};