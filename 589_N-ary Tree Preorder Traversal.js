/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const stack = [root];
    const result = [];
    if (!root) return result;
    
    while(stack.length) {
        const curr = stack.pop();
        result.push(curr.val);
        for(let i = curr.children.length - 1; i >= 0; --i) {
            stack.push(curr.children[i]);
        }
    }
    return result;
};