/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map();
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");
    
    const size = s.length;
    const stack = [];
    
    for(let i = 0; i < size; ++i) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
        else {
            if(stack[stack.length - 1] === map.get(s[i])) stack.pop();
            else return false;
        }
    }
    return stack.length > 0 ? false : true;
};
//Using map, solve the problem