/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums, low = 0, high = nums.length) {
    if(low >= high) return null;
    let maxIndex = low;
    for(let i = low + 1; i < high; ++i) {
        maxIndex = nums[i] > nums[maxIndex] ? i : maxIndex;
    }
    const node = new TreeNode(nums[maxIndex]);
    node.left = constructMaximumBinaryTree(nums, low, maxIndex);
    node.right = constructMaximumBinaryTree(nums, maxIndex + 1, high);
    return node;
};