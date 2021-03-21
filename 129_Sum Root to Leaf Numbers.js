/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    const traverse = (node, curr) => {
        if(!node) return 0;
        
        curr *= 10;
        
        if(!node.left && !node.right) return curr + node.val;
        
        return traverse(node.left, curr + node.val) + traverse(node.right, curr + node.val);
    }
    
    return traverse(root, 0);
};