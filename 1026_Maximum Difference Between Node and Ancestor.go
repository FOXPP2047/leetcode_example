/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxAncestorDiff(root *TreeNode) int {
    result := 0
    
    dfs(root, root.Val, root.Val, &result)
    return result
}

func dfs(curr *TreeNode, maxVal int, minVal int, result *int) {
    if curr == nil {
        return
    }
    
    value := max(abs(curr.Val - maxVal), abs(curr.Val - minVal))
    *result = max(*result, value)
    dfs(curr.Right, max(maxVal, curr.Val), min(minVal, curr.Val), result)
    dfs(curr.Left, max(maxVal, curr.Val), min(minVal, curr.Val), result)
}

func max(x, y int) int {
    if x >= y {
        return x
    }
    return y
}

func min(x, y int) int {
    if x <= y {
        return x
    }
    return y
}

func abs(x int) int {
    if (x < 0) {
        return -x
    }
    return x
}

