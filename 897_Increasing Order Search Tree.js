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
var increasingBST = function(root) {
    let dummy = new TreeNode(); 
    let tree = dummy;
    
    const inorder = (node) => {
        if(!node) return;
        
        inorder(node.left);
        tree.right = node; 
        tree = tree.right; 
        tree.left = null;
        inorder(node.right);
    }
    inorder(root);
    return dummy.right;
};

