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
 * @return {boolean}
 */
 //Recursion
var isSymmetric = function(root) {
    return help(root, root);
};

const help = (t1, t2) => {
    if(!t1 && !t2) return true;
    if(!t1 || !t2) return false;
    return (t1.val === t2.val) && help(t1.left, t2.right) && help(t1.right, t2.left);
    
}

//Iterative
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let arr = []
    arr.push(root);
    arr.push(root);
    
    while(arr.length) {
        let t1 = arr.shift();
        let t2 = arr.shift();
        
        if(!t1 && !t2) continue;
        if(!t1 || !t2) return false;
        if(t1.val !== t2.val) return false;
        
        arr.push(t1.left);
        arr.push(t2.right);
        arr.push(t1.right);
        arr.push(t2.left);
    }
    return true;
};