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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const values = [];
    
    const inorderTraversal = (tree, value) => {
        if(!tree) return;
        inorderTraversal(tree.left, value);
        values.push(tree.val);
        inorderTraversal(tree.right, value);
    }
    
    inorderTraversal(root, root.value);
    for(let i = 0; i < values.length - 1; ++i) {
        if(values[i] !== values[i + 1])
            return false;
    }
    return true;
};