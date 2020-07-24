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
 * @return {TreeNode}
 */

    
var balanceBST = function(root) {
    const nodes = [];
    
    const storeNodes = (node) => {
        if(!node) return;

        storeNodes(node.left, nodes);
        nodes.push(node.val);
        storeNodes(node.right, nodes);
    }
    storeNodes(root, nodes);
    
    const buildTree = (start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nodes[mid]);

        root.left = buildTree(start, mid - 1);
        root.right = buildTree(mid + 1, end);
        return root;
    }
    
    return buildTree(0, nodes.length - 1);
};