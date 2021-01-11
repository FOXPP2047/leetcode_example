/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    queue := []*TreeNode {}
    
    queue = append(queue, root)
    queue = append(queue, root)
    
    for len(queue) > 0 {
        t1 := queue[0]
        queue = queue[1:]
        t2 := queue[0]
        queue = queue[1:]
        
        if t1 == nil && t2 == nil {
            continue
        }
        if t1 == nil || t2 == nil {
            return false
        }
        
        if t1.Val != t2.Val {
            return false
        }
        queue = append(queue, t1.Left)
        queue = append(queue, t2.Right)
        queue = append(queue, t1.Right)
        queue = append(queue, t2.Left)
    }
    return true
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    return isMirror(root, root)
}

func isMirror(t1, t2 *TreeNode) bool {
    if t1 == nil && t2 == nil {
        return true
    }
    if t1 == nil || t2 == nil {
        return false
    }
    
    return (t1.Val == t2.Val) && isMirror(t1.Right, t2.Left) && isMirror(t1.Left, t2.Right)
}