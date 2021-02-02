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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    
    const result = [];
    const stack = [];
    stack.push(root);
    
    while(stack.length > 0) {
        const size = stack.length;
        const temp = []
        
        for(let i = 0; i < size; ++i) {
            const node = stack.shift();
            temp.push(node.val);
            if(node.left) {
                stack.push(node.left)
            }
            
            if(node.right) {
                stack.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
};