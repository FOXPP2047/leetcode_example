/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    
    let result = 0;
    
    for(let child of root.children) {
        result = Math.max(result, maxDepth(child));
    }
    
    return result + 1;  
};