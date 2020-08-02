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
var minDiffInBST = function(root) {
    let prev = null;
    let min = Number.MAX_VALUE;
    
    const inorderTraverse = (node) => {
        if(!node) return;
        
        inorderTraverse(node.left);
        
        
        if(prev) {
            min = Math.min(min, Math.abs(node.val - prev.val));
        }
        
        prev = node;
        
        inorderTraverse(node.right);
    }
    
    inorderTraverse(root);
    
    return min;
};