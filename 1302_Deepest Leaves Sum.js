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

var deepestLeavesSum = function(root) {
    let sum = 0;
    let level = 0;
    let index = 0;
    let data = [];
    
    dfs = (curr, level) => {
        if(!curr) return;
        if(!curr.left && !curr.right) {
            data[index++] = { "level": level, "value": curr.val };
        }
        else {
            dfs(curr.left, level + 1);
            dfs(curr.right, level + 1);    
        }
    }
    
    dfs(root, level);
    
    const size = data.length;
    let max = 0;
    for(let i = 0; i < size; ++i) {
        if(max < data[i].level) {
            max = data[i].level;
        }
    }
    
    for(let i = 0; i < size; ++i) {
        if(data[i].level === max) {
            sum += data[i].value;
        }   
    }
    return sum;
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

var deepestLeavesSum = function(root) {
    let level = 0;
    let index = 0;
    let data = [];
    
    dfs = (curr, level) => {
        if(!curr) return;
        if(!curr.left && !curr.right) {
            if(data[level] == null) {
                data[level] = [];
            }
            data[level].push(curr.val);
        }
        else {
            dfs(curr.left, level + 1);
            dfs(curr.right, level + 1);    
        }
    }
    
    dfs(root, level);
    
    let maxLeaves = data.pop();
    
    return maxLeaves.reduce((prev, curr) => prev + curr);
};