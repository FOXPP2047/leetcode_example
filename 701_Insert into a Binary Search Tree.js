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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {    
    const newNode = new TreeNode(val);
    
    if(root == null) {
        root = newNode;
        return root;
    }
        
    let traverse = root;
    let result = null;
    while(traverse) {
        result = traverse;
        if(traverse.val > val)
            traverse = traverse.left;
        else traverse = traverse.right;
    }
    if (result == null) 
        result = newNode; 
    else if (val < result.val) 
        result.left = newNode; 
    else result.right = newNode; 
  
    return root;
};

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {    
    if(!root) 
        return new TreeNode(val);
    if(val > root.val)
        root.right = insertIntoBST(root.right, val);
    else root.left = insertIntoBST(root.left, val);

    return root;
};