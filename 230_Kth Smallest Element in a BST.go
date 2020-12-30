/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthSmallest(root *TreeNode, k int) int {
    elements := [] int{}
    dfs(root, &elements)
    
    sort.Slice(elements, func(a, b int) bool {
        return elements[a] < elements[b]
    })
    
    result := elements[k - 1]
    
    return result
}

func dfs(node *TreeNode, arr *[]int) {
    if node == nil {
        return;
    }
    
    dfs(node.Left, arr)
    *arr = append(*arr, node.Val)
    dfs(node.Right, arr)
}


//O(N)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func kthSmallest(root *TreeNode, k int) int {
    count := countNodes(root.Left)
    
    fmt.Println(count)
    
    if k <= count {
        return kthSmallest(root.Left, k)
    } else if k > count + 1 {
        return kthSmallest(root.Right, k - count - 1)
    }
    return root.Val
}

func countNodes(node *TreeNode) int {
    if node == nil {
        return 0;
    }   
    
    return 1 + countNodes(node.Left) + countNodes(node.Right)
}