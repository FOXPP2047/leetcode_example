/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return is_symmetric_helper(root->left, root->right);
    }
    
    bool is_symmetric_helper(TreeNode* left, TreeNode* right) {
        if(!left && !right) {
            return true;
        }
        
        if(!left || !right) {
            return false;
        }
        
        return (left->val == right->val) && is_symmetric_helper(left->left, right->right) &&
            is_symmetric_helper(left->right, right->left);
    }
};