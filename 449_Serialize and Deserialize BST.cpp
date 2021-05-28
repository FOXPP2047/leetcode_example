/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:

    // Encodes a tree to a single string.
    void serialize_helper(TreeNode* root, string& result){
        if(root==nullptr) return;
        
        result += std::to_string(root->val) + ","; // ',' for seperating each value
        serialize_helper(root->left, result);
        serialize_helper(root->right, result);
    }
    
    string serialize(TreeNode* root) {
        if(root==nullptr) return "";
        
        std:string result = "";
        serialize_helper(root, result);
        
        return result;
    }
    
    int to_int(std::string& data, int& pos) {
        pos = data.find(',');
        
        int val = stoi(data.substr(0, pos));
        
        return val;
    }
    
    TreeNode* deserialize_helper(std::string& data, int min, int max) {
        if(data.size() == 0) {
            return nullptr;
        }
        
        int pos = 0;
        int val = to_int(data, pos);
        
        if(val < min || val > max) {
            return nullptr;
        }
        
        data = data.substr(pos + 1);
        
        TreeNode* node = new TreeNode(val);
        
        node->left = deserialize_helper(data, min, node->val);
        node->right = deserialize_helper(data, node->val, max);
        return node;
    }
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        std::cout << data << std::endl;
        if(data == "") {
            return nullptr;
        }

        return deserialize_helper(data, INT_MIN, INT_MAX);
    }
};

// Your Codec object will be instantiated and called as such:
// Codec* ser = new Codec();
// Codec* deser = new Codec();
// string tree = ser->serialize(root);
// TreeNode* ans = deser->deserialize(tree);
// return ans;