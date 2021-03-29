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
 * @param {number} targetSum
 * @return {number[][]}
 */
const traverse = (node, sum, curr, result) => {
    if(!node) return result;
    
    curr.push(node.val);
    
    if(!node.left && !node.right && node.val === sum) {
        result.push(curr.slice());
    }
    
    traverse(node.left, sum - node.val, curr, result);
    traverse(node.right, sum - node.val, curr, result);
    
    curr.pop();
    
    return result;
}

var pathSum = function(root, targetSum) {
    return traverse(root, targetSum, [], []);
};