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
var minDepth = function(root) {
    if(!root) return 0;
    
    if(!root.left) return minDepth(root.right) + 1;
    if(!root.right) return minDepth(root.left) + 1;
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let result = 1;
    
    if(!root.left & !root.right) return result;
    
    let queue = [root];
    
    while(queue.length > 0) {
        const size = queue.length;
        
        for(let i = 0; i < size; ++i) {
            let node = queue.shift();    
            
            if(!node.left && !node.right) return result;
            else {
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        ++result;
    }
    
    return result;
};