/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const size = path.length;
    const stack = [];
    const arr = [];
    
    let str = "";
    for(let i = 0; i < size; ++i) {
        if(path.charAt(i) === "/") {
            arr.push(str);
            str = "";
        } else str += path.charAt(i);
    }
    arr.push(str);
    
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === "." || arr[i] === "" || arr[i] === " ") continue;
        else if(arr[i] === "..") stack.pop();
        else stack.push(arr[i]);
    }
    
    let result = "/";
    for(let i = 0; i < stack.length; ++i) {
        result += stack[i];
        if(i !== stack.length - 1)
            result += "/";
    }
    return result;
};