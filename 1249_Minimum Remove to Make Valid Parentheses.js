/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let indexes = [];
    const size = s.length;
    
    for(let i = 0; i < size; ++i) {
        if(s.charAt(i) === "(") stack.push(i);
        else if(s.charAt(i) === ")") {
            if(!stack.length) indexes.push(i);
            else stack.pop();
        }
    }
    
    while(stack.length) indexes.push(stack.pop());
    let str = "";
    for(let i = 0; i < size; ++i) {
        if(!indexes.includes(i)) str += s.charAt(i);
    }
    return str;
};