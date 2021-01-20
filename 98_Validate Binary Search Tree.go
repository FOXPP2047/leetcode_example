/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    if root == nil {
        return true
    }
    result := true
    
    dfs(root.Left, nil, &root.Val, &result)
    dfs(root.Right, &root.Val, nil, &result)
    return result
}

func dfs(node *TreeNode, low *int, high *int, result *bool) {
    if node == nil || !(*result) {
        return
    }
    
    if (low != nil && node.Val <= (*low)) || (high != nil && node.Val >= (*high)) {
        *result = false
        return 
    }
    
    dfs(node.Left, low, &node.Val, result)
    dfs(node.Right, &node.Val, high, result)
}


/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isValidBST(root *TreeNode) bool {
    
    if root == nil {
        return true
    }
    
    return dfs(root.Left, math.MinInt64, root.Val) && dfs(root.Right, root.Val, math.MaxInt64)
}

func dfs(node *TreeNode, low int, high int) bool {
    if node == nil {
        return true
    }
    
    if node.Val <= low || node.Val >= high {
        return false
    }
    
    return dfs(node.Left, low, node.Val) && dfs(node.Right, node.Val, high)
}
