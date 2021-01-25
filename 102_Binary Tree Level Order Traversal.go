/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    if root == nil {
        return [][] int {}
    }
    
    result := [][] int {}
    
    bfs(&result, 0, root)
    
    return result
}

func bfs(result *[][] int, level int, node *TreeNode) {
    if node == nil {
        return
    }
    
    if len(*result) == level {
        *result = append(*result, [] int {})
    }
    
    (*result)[level] = append((*result)[level], node.Val)
    
    for _, val := range []*TreeNode{node.Left, node.Right} {
        bfs(result, level + 1, val)
    }
}