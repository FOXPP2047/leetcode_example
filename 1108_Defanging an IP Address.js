/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = "";
    const size = address.length;
    
    for(let i = 0; i < size; ++i) {
        if(address[i] === ".") {
            result += "[";
            result += address[i];
            result += "]";
        } else {
            result += address[i];
        }
    }

    return result;
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};