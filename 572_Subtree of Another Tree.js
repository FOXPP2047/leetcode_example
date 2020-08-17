/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    const isSameNode = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(!node1 || !node2 || node1.val !== node2.val) return false;
        return isSameNode(node1.left, node2.left) && isSameNode(node1.right, node2.right);
    }
    
    const dfs = (node) => {
        if(!node) return false;
        if(node.val === t.val && isSameNode(node, t)) return true;
        return dfs(node.left) || dfs(node.right);
    }

	const result = dfs(s);
    return result;
};