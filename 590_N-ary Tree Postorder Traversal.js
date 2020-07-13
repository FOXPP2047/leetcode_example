/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    const stack = [root];
    
    while(stack.length) {
        const curr = stack.pop();
        
        if(curr === null)
            continue;
        
        result.push(curr.val);
        stack.push(...curr.children);
    }
    return result.reverse();
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const traverse = (node) => {
        if(node === null) return;

        for(child of node.children) {
            traverse(child);
        }
        result.push(node.val);
    }
    const result = [];
    traverse(root);
    return result;
};