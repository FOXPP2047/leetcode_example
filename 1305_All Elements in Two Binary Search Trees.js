/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const traversalTree = (tree, arr) => {
        if (!tree) return;
        traversalTree(tree.left, arr);
        arr.push(tree.val);
        traversalTree(tree.right, arr);    
    }
        
    const result = [];
    
    traversalTree(root1, result);
    traversalTree(root2, result);
    
    return result.sort((a, b) => a - b);
};