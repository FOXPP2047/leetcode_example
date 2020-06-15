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

var sumEvenGrandparent = function(root) {
    let sum = 0;
    dfs = (curr, parent, grand) => {
        if(!curr) return;
        if(grand && grand.val % 2 === 0) {
            sum += curr.val;
        }
        dfs(curr.left, curr, parent);
        dfs(curr.right, curr, parent);
    }
    dfs(root, null, null);
    return sum;
};

let sum = 0;

dfs = (curr, parent, grand) => {
    if(!curr) return;
    if(grand && grand.val % 2 === 0) {
        sum += curr.val;
    }
    dfs(curr.left, curr, parent);
    dfs(curr.right, curr, parent);
}

var sumEvenGrandparent = function(root) {
    dfs(root, null, null);
    return sum;
};
