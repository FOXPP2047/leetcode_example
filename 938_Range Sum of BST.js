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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function(root, L, R) {
    let sum = 0;
    dfs = (node, L, R) => {
        if(!node) return;
        if(L <= node.val && node.val <= R) 
            sum += node.val;
        dfs(node.left, L, R);
        dfs(node.right, L, R);
    }

    dfs(root, L, R);
    return sum;
};