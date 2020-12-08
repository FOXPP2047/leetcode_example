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
    let stack = [];
    
    for(let i = 0; i < size; ++i) {
        let c = s.charAt(i);
        
        if(map.has(c)) {
            let top = stack.length === 0 ? "#" : stack.pop();
            if (top != map.get(c)) return false;
        } else stack.push(c);
    }
    
    return stack.length === 0 ? true : false;
};