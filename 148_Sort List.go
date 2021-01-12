/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    
    var prev *ListNode
    slow, fast := head, head
    
    for fast != nil && fast.Next != nil {
        fast = fast.Next.Next
        prev = slow
        slow = slow.Next
    }
    
    prev.Next = nil;
    
    left := sortList(head)
    right := sortList(slow)
    
    
    return merge(left, right)
}

func merge(left, right *ListNode) *ListNode {
    temp := new(ListNode)
    tempHead := temp
    
    for left != nil && right != nil {
        if left.Val < right.Val {
            temp.Next = left
            left = left.Next
        } else {
            temp.Next = right
            right = right.Next
        }
        temp = temp.Next
    }
    
    if left != nil {
        temp.Next = left
    }
    
    if right != nil {
        temp.Next = right
    }
    
    return tempHead.Next
}


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }
    return mergeSort(head)
}

func getMid(node *ListNode) *ListNode {
    slow, fast := node, node.Next
    
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }
    
    return slow
}

func merge(left, right *ListNode) *ListNode {
    if left == nil {
        return right
    }
    if right == nil {
        return left
    }
    
    if left.Val < right.Val {
        left.Next = merge(left.Next, right)
        return left
    } else {
        right.Next = merge(left, right.Next)
        return right
    }
}

func mergeSort(node *ListNode) *ListNode {
    if node.Next == nil {
        return node
    }
    
    mid := getMid(node)
    last := mid.Next
    mid.Next = nil
    
    return merge(mergeSort(node), mergeSort(last))
}