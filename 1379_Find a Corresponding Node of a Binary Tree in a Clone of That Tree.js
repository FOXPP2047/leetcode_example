/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = (original, cloned, target) => {
    if(!original && !cloned)
        return;
    if(original === target)
        return cloned;
    return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let result = null;
    const dfs = (node) => {
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
        if (node.val === target.val && isSimilar(target, node)) {
            result = node;
        }
    }
    dfs(cloned);
    return result;
};

const isSimilar = (target, node) => {
   if (!target && !node) return true;
   if (!target || !node) return false;
   return target.val === node.val
    && isSimilar(target.left, node.left) 
    && isSimilar(target.right, node.right);
} 